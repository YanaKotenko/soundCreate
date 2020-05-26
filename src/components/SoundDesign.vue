<template lang='pug'>
.works_container(ref="container")
	.works_title
		.works_title__grey sound design
		.works_title__white craft your project with unique sounds
		.arrow_right(
			@click="setPage('musicProduction')"
		)
	.works
		.works_list_wrap
			.works_list
				.works_list__item(
					v-for='(work, i) in works'
					v-if="work.pageName === 'soundDesign'"
					:class="[i === 5 ? '_width100' : '_width50']"
					:key='i'
					@click='openWorkExample(work.name)'
				)
					.works_list__title(v-if="work.flag === 'ui'") {{ work.name }} for Design Files
					.works_list__title(v-else) {{ work.name }}
					.works_list__subtitle {{ work.description }}
		.works_img
			img(:src="require('../assets/images/micro.svg')")
</template>

<script>
	import { TIMEOUT_SPEED } from '../constants'

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
				this.$refs.container.style.opacity = '0';

				setTimeout(() => {
					this.$store.commit('setWorkPage', pageName);
				}, TIMEOUT_SPEED)
			},
			openWorkExample(name) {
				const activeObj = this.works.find(e => e.name === name);				

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