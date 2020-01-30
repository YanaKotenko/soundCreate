<template lang='pug'>
div
	.works_title
		.works_title__img
		.works_title__text original music for your project
		.arrow_right(
			@click="setPage('soundDesign')"
		)
	.works
		.works_list
			.works_list__item(
				v-for='(work, i) in works'
				v-if="work.pageName === 'composing'"
				:class="[i === 2 ? '_width100' : '_width50']"
				:key='i'
				@click='openWorkExample(work.name)'
			)
				.works_list__title {{ work.name }}
				.works_list__subtitle {{ work.description }}
		.works_img
			img(:src="require('../assets/images/sint.svg')")

</template>

<script>
	export default {
		name: 'Composing',
		computed: {
			works() {
				return this.$store.state.works
			},
		},
		methods: {
			setPage(pageName) {
				this.$store.commit('setWorkPage', pageName);
			},
			openWorkExample(name) {
				const activeObj = this.works.find(e => e.name === name);				

				this.$store.commit('openWorkExample')
				this.$store.commit('setActiveWork', activeObj)
			},
    }
	};
</script>

<style lang='sass' scoped>
	@import '../assets/sass/variables'

	.works_title__img
		background-image: url('../assets/images/sign_composing.svg')
		width: 196px
		height: 36px
		display: inline-block
		vertical-align: middle
		margin-right: 16px
		background-size: contain
		background-repeat: no-repeat

	// .active
	// 	height: 100px
	// 	transition: height 0.4s ease

</style>