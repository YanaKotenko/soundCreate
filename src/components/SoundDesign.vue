<template lang='pug'>
.works_wrapper
	.works_title(ref='title')
		.works_title__img
		.works_title__text original music for your project
		.arrow_right(
			@click="setPage('musicProduction')"
		)
	.works
		.works_img(ref='img')
			img(:src="require('../assets/images/micro.svg')")
		.works_list_wrap(ref='list')
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
	import { hideWorkElements, showWorkElements } from '../utils'

	export default {
		name: 'SoundDesign',
		computed: {
			works() {
				return this.$store.state.works
			},
			isMobile() {
        return this.$store.state.mobile
      },
		},
		methods: {
			setPage(pageName) {
				hideWorkElements(this.$refs)

				setTimeout(() => {
					this.$store.commit('setWorkPage', pageName);
				}, 1000)
			},
			openWorkExample(name) {
				hideWorkElements(this.$refs);

				setTimeout(() => {
					const activeObj = this.works.find(e => e.name === name);				

					this.$store.commit('openWorkExample')
					this.$store.commit('setActiveWork', activeObj)
				}, 1000);
			},
		},
		mounted() {
			showWorkElements(this.$refs, this.isMobile)
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
		@media ($smPhone)
			margin-top: 30px

</style>