<template lang='pug'>
div
	.works_title
		.works_title__img
		.works_title__text original music for your project
		.arrow_right(
			@click="setPage('musicProduction')"
		)
	.works
		.works_img
			img(:src="require('../assets/images/micro.svg')")
		.works_list
			.works_list__item(
				v-for='(work, i) in works'
				v-if="work.pageName === 'soundDesign'"
				:class="[i === 5 ? '_width100' : '_width50']"
				:key='i'
				@click='openWorkExample(work.name)'
			)
				.works_list__title {{ work.name }}
				.works_list__subtitle {{ work.description }}
</template>

<script>
	export default {
		name: 'SoundDesign',
		computed: {
			works() {
				return this.$store.state.works
			},
		},
		methods: {
			setPage(pageName) {
				this.$store.commit('setWorkPage', pageName)
			},
			openWorkExample(name) {
				const activeObj = this.works.find(e => e.name === name);
				
				this.$store.commit('openWorkExample')
				this.$store.commit('setActiveWork', activeObj)
			}
		},
		created() {
			console.log('created');
		},
		mounted() {
			console.log('mounted');
		},
	};
</script>

<style lang='sass' scoped>
	@import '../assets/sass/variables'

	.works_title__img
		background-image: url('../assets/images/sign_design.svg')
		width: 238px
		height: 36px
		display: inline-block
		vertical-align: middle
		margin-right: 16px
		background-size: contain
		background-repeat: no-repeat

</style>