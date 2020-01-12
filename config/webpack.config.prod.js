'use strict';

const path                     = require('path');
const webpack                  = require('webpack');
const merge                    = require('webpack-merge');
const HtmlPlugin               = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin  = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin     = require('mini-css-extract-plugin');
const UglifyJSPlugin           = require('uglifyjs-webpack-plugin');
const CompressionPlugin        = require('compression-webpack-plugin');
const helpers                  = require('./helpers');
const commonConfig             = require('./webpack.config.common');
const isProd                   = process.env.NODE_ENV === 'production';
const environment              = isProd ? require('./env/prod.env') : require('./env/staging.env');

const webpackConfig = merge(commonConfig, {
	mode: 'production',
	output: {
		// path: path.resolve(__dirname, 'dist'),
		path: helpers.root('dist'),
		// publicPath: helpers.root('dist'),
		publicPath: '/',
		filename: 'js/[id].[hash].js',
		chunkFilename: 'js/[id].[hash].chunk.js',
		// filename: helpers.root('dist') + 'js/[id].[hash].js',
		// chunkFilename: helpers.root('dist') + 'js/[id].[hash].chunk.js',
	},
	optimization: {
		runtimeChunk: 'single',
		minimizer: [
			new OptimizeCSSAssetsPlugin({
				cssProcessorPluginOptions: {
					preset: [ 'default', { discardComments: { removeAll: true } } ],
				}
			}),
			new UglifyJSPlugin({
				cache: true,
				parallel: true,
				sourceMap: !isProd
			})
		],
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name (module) {
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
						return `npm.${packageName.replace('@', '')}`;
					}
				},
				styles: {
					test: /\.css$/,
					name: 'styles',
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	plugins: [
		new webpack.EnvironmentPlugin(environment),
		new MiniCSSExtractPlugin({
			publicPath: helpers.root('dist'),
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css'
		}),
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
		new HtmlPlugin({
			// template: `${__dirname}/src/index.html`,
			template: helpers.root('index.html'),
			filename: 'index.html',
			inject: 'body',
		}),
		new CompressionPlugin({
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: new RegExp('\\.(js|css)$'),
			threshold: 10240,
			minRatio: 0.8
		}),
		new webpack.HashedModuleIdsPlugin()
	]
});

if (!isProd) {
	webpackConfig.devtool = 'source-map';

	if (process.env.npm_config_report) {
		const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
		webpackConfig.plugins.push(new BundleAnalyzerPlugin());
	}
}

module.exports = webpackConfig;
