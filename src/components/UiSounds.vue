<template lang='pug'>
.ui_sounds
	.ui_sounds__item(
		v-for='(item, index) in audioFiles'
		@click='playAudio(index)'
		:key='index'
	) 
		audio(preload='metadata' ref='track')
			source(:src="require(`../assets/audio/${item}`)" type='audio/mp3')

</template>

<script>
	export default {
		name: 'UiSounds',
		data() {
			return {}
		},
		computed: {
			audioFiles() {
				return this.$store.state.audio
			},
		},
		methods: {
			playAudio(index) {
				this.$refs.track[index].play();
			},
    }
	};
</script>

<style lang='sass' scoped>
	@import '../assets/sass/variables'

	.ui_sounds
		width: 650px
		margin: auto
		text-align: center
		@media ($smPhone)
			padding-top: 80px

		&__item
			display: inline-block
			vertical-align: middle
			margin: 0 8px 16px 8px
			width: 76px
			height: 76px
			background: #858484
			cursor: pointer
			position: relative
			overflow: hidden
			transition: 0.6s
			border-radius: 6px

			&:after, &:before
				content: ''
				position: absolute
				top: 50%
				left: 50%

			&:after
				background: url('../assets/images/play.svg') no-repeat
				width: 16px
				height: 18px
				transform: translateX(-50%) translateY(-50%)

			&:before
				width: 10px
				height: 10px
				border-radius: 50%
				background: #2D46B1
				transition: all .2s ease-out
				opacity: 0
				visibility: hidden

			&._active

				&:before
					opacity: 1
					visibility: visible
					transform: scale(20)

			&:hover
				background: #FCFCFC
		
</style>