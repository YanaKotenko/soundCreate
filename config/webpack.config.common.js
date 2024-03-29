'use strict';

const VueLoaderPlugin      = require('vue-loader/lib/plugin');
const HtmlPlugin           = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const helpers              = require('./helpers');
const isDev                = process.env.NODE_ENV === 'development';
const autoprefixer         = require('autoprefixer');

const webpackConfig = {
	entry: {
		polyfill: '@babel/polyfill',
		main: helpers.root('src', 'main'),
	},
	resolve: {
		extensions: [ '.js', '.vue' ],
		alias: {
				'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
				'@': helpers.root('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: [ helpers.root('src') ],
			},{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [ helpers.root('src') ]
			},{
				test: /\.css$/,
				use: [
					isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: isDev } },
				]
			},{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers:['ie >= 8', 'last 4 version']
								})
							],
							sourceMap: true
						}
					},{
						loader: 'sass-loader',
						options: {
							indentedSyntax: true
						}
					}
				]
			},{
				test: /\.pug$/,
				oneOf: [{
					resourceQuery: /^\?vue/,
					use: ["pug-plain-loader"]
				}, {
					use: [
						"html-loader",
						"pug-html-loader"
					]
				}]
			},{ 
        test: /\.(jpg|png|gif|svg)$/, 
        use: [{ 
					loader: 'file-loader', 
					options: { name: '[name].[ext]', outputPath: './assets/images/' }
				}]
			},{
				test: /\.(mov|mp4)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}  
				}]
			},{
				test: /\.(ogg|mp3|wav|mpe?g)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}  
				}]
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlPlugin({ template: 'index.html', chunksSortMode: 'dependency' })
	]
};

module.exports = webpackConfig;
