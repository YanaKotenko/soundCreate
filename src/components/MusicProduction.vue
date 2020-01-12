<template lang='pug'>
div
	.works_title
		.works_title__img
		.works_title__text craft your project with unique sounds
		.arrow_right(
			@click="setPage('composing')"
		)
	.works
		.works_list
			.works_list__item._width50(
				v-for='(work, i) in works'
				v-if="work.pageName === 'musicProduction'"
				:key='i'
				@click='openWorkExample(work.name)'
			)
				.works_list__title {{ work.name }}
				.works_list__subtitle {{ work.description }}
		.works_img
			img(:src="require('../assets/images/pult.svg')")

</template>

<script>
	export default {
		name: 'MusicProduction',
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
    }
	};
</script>

<style lang='sass' scoped>
	@import '../assets/sass/variables'

	.works_title__img
		background-image: url('../assets/images/sign_music.svg')
		width: 302px
		height: 36px
		display: inline-block
		vertical-align: middle
		margin-right: 16px
		background-size: contain
		background-repeat: no-repeat

</style>