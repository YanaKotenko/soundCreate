<template lang='pug'>
.ui_sounds
	.ui_sounds__item(
		v-for='(item, index) in audioFiles'
		@click='playAudio(index)'
		:key='index'
	) 
		audio(preload='metadata' ref='track')
			source(:src="require(`../assets/audio/uiSounds/${item}`)" type='audio/mp3')

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
		width: 834px
		margin: auto
		text-align: center
		@media ($extraLarge)
			width: 650px
		@media ($smPhone)
			padding-top: 80px

		&__item
			display: inline-block
			vertical-align: middle
			margin: 0 8px 16px 8px
			width: 102px
			height: 102px
			background: #858484
			cursor: pointer
			position: relative
			overflow: hidden
			transition: 0.6s
			border-radius: 6px
			@media ($extraLarge)
				width: 76px
				height: 76px

			&:after, &:before
				content: ''
				position: absolute
				top: 50%
				left: 50%

			&:after
				background: url('../assets/images/play.svg') no-repeat
				width: 18px
				height: 21px
				transform: translateX(-36%) translateY(-50%)
				background-size: contain
				@media ($extraLarge)
					width: 14px
					height: 16px

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