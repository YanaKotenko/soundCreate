<template lang='pug'>
.works_container(ref="container")
	.works_title
		.works_title__grey music production
		.works_title__white craft your project with unique sounds
		.arrow_right(
			@click="setPage('composing')"
		)
	.works
		.works_list_wrap
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
	import { TIMEOUT_SPEED } from '../constants'

	export default {
		name: 'MusicProduction',
		computed: {
			works() {
				return this.$store.state.works
			},
		},
		methods: {
			setPage(pageName) {
				this.$refs.container.style.opacity = '0';
				setTimeout(() => {
					this.$store.commit('setWorkPage', pageName);
				}, TIMEOUT_SPEED)
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
			this.$refs.container.style.opacity = '1';
		},
	};
</script>

<style lang='sass' scoped>
	@import '../assets/sass/variables'

</style>