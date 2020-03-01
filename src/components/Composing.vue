<template lang='pug'>
div
	.works_title(ref='title')
		.works_title__img composing
		.works_title__text original music for your project
		.arrow_right(
			@click="setPage('soundDesign')"
		)
	.works
		.works_list_wrap(ref='list')
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
		.works_img(ref='img')
			img(:src="require('../assets/images/sint.svg')")

</template>

<script>
	import { hideWorkElements, showWorkElements, slideOut, slideIn } from '../utils'
	import { TIMEOUT_SPEED } from '../constants'

	export default {
		name: 'Composing',
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
				slideOut(this.$refs);

				setTimeout(() => {
					this.$store.commit('setWorkPage', pageName);
				}, TIMEOUT_SPEED);
			},
			openWorkExample(name) {
				setTimeout(() => {
					const activeObj = this.works.find(e => e.name === name);				

					this.$store.commit('openWorkExample')
					this.$store.commit('setActiveWork', activeObj)
				}, TIMEOUT_SPEED);
			},
		},
		mounted() {
      slideIn(this.$refs, this.isMobile);
		},
	};
</script>

<style lang='sass' scoped>
	@import '../assets/sass/variables'

</style>