<template lang='pug'>
.examples
	.content
		.examples__category._mobile(v-if='isMobile') {{ activeWork.category }}
		.examples_footer__close(@click='closeWorkExample(activeWork.pageName)')
	.examples_content
		.video_box(v-if="activeWork.flag === 'video'")
			.play_button(ref='playVideoBtn' @click='playPauseVideo') play
			video(@click='playPauseVideo' ref='video' :poster='posters[activeWork.poster]')
				source(:src='activeWork.src' type='video/mp4')

		div(v-if="activeWork.flag === 'ui'")
			UiSounds

		.examples_audio(v-if="activeWork.flag === 'audio'")
			.audio_box
				.audio_poster
					img(:src='posters[activeWork.poster]' @click='playPauseAudio')
					.play_button(ref='playAudioBtn' @click='playPauseAudio') play
				a.audio_link(:href='activeWork.url' target='_blank') Apple Music >
				audio(preload='metadata' ref='audio')
					source(:src="require(`../assets/audio/${activeWork.src}`)" type='audio/mp3')
	.examples_footer
		.content
			.examples_footer__title
				.examples_footer__name_wrap
					.examples__category._footer(v-if='!isMobile') {{ activeWork.category }}
					.examples_footer__name {{ activeWork.name }}
				.examples_footer__description {{ activeWork.description }}
			.examples_footer__nav
				.examples_footer__nav_item(@click='changeProject(-1)') previous project
				.examples_footer__nav_item(@click='changeProject(1)') next project

</template>

<script>
	import UiSounds from '../components/UiSounds'
	// для подгрузки видосов
	import alien from '../assets/videos/on_the_shore.mp4';
	import shore from '../assets/videos/on_the_shore.mp4';
	import banksy from '../assets/videos/banksy.mp4';
	import calves from '../assets/videos/calves.mp4';
	import oddDays from '../assets/videos/odd_days.mp4';
	import pulse from '../assets/videos/pulse.mp4';
	// для подгрузки постеров на видео
	import posterAlien from '../assets/images/poster_alien.jpg';
	import posterShore from '../assets/images/poster_shore.jpg';
	import posterBanksy from '../assets/images/poster_banksy.jpg';
	import posterOdd from '../assets/images/poster_odd.jpg';
	import posterCalves from '../assets/images/poster_calves.jpg';
	import posterBuerakApartments from '../assets/images/poster_buerak_apartments.jpg';
	import posterBuerakDances from '../assets/images/poster_buerak_dances.jpg';
	import posterBuerakModern from '../assets/images/poster_buerak_modern.jpg';
	import posterSalut from '../assets/images/poster_salut.jpg';

	export default {
		name: 'WorkExample',
		components: { UiSounds },
		data() {
			return {
				posters: {
					posterShore, 
					posterAlien,
					posterBanksy,
					posterCalves,
					posterOdd,
					posterBuerakApartments,
					posterBuerakDances,
					posterBuerakModern,
					posterSalut,
				}
			};
		},
		computed: {
			works() {
				return this.$store.state.works
			},
			activeWork() {
				return this.$store.state.activeWork
			},
			isMobile() {
        return this.$store.state.mobile
      },
		},
		methods: {
			closeWorkExample(workPageName) {
				this.$store.commit('setWorkPage', workPageName);
				this.$store.commit('closeWorkExample');
				this.$store.commit('setActiveWork', null);
			},
			changeProject(int) {
				const video = this.$refs.video;
				const audio = this.$refs.audio;
				const playVideoBtn = this.$refs.playVideoBtn;
				const playAudioBtn = this.$refs.playAudioBtn;
				const index = this.works.findIndex(obj => obj.name === this.activeWork.name) + int;

				if(playVideoBtn) {
					playVideoBtn.style.display = 'block';
				}
				if(playAudioBtn) {
					playAudioBtn.style.display = 'block';
				}

				if(video) {
					video.load();
				}
				if(audio) {
					audio.load();
				}

				if(index >= 0 && index <= this.works.length - 1) {
					this.$store.commit('setActiveWork', this.works[index]);
				}
			},
			playPauseVideo() {
				const video = this.$refs.video;
				const playVideoBtn = this.$refs.playVideoBtn;

				if (video.paused) {
					video.play();
					playVideoBtn.style.display = 'none';
				} else {
					video.pause();
					playVideoBtn.style.display = 'block';
				}
			},
			playPauseAudio() {
				const audio = this.$refs.audio;
				const playAudioBtn = this.$refs.playAudioBtn;

				if (audio.paused) {
					audio.play();
					playAudioBtn.style.display = 'none';
				} else {
					audio.pause();
					playAudioBtn.style.display = 'block';
				}
			}
    }
	};
</script>

<style lang='sass' scoped>
	@import '../assets/sass/variables'
	@import '../assets/sass/default'

	video
		width: 1032px
		height: 580px
		@media ($extraLarge)
			width: 730px
			height: 410px
		@media ($smPhone)
			width: 100%
			padding: 0 16px

	iframe
		width: 300px
		height: 300px

	.video_box
		position: relative

	.audio
		&_box
			width: 445px
			text-align: center
			@media ($extraLarge)
				width: 309px
			@media ($tablet)
				width: 344px
			@media ($xsPhone)
				width: 200px

		&_poster
			position: relative
			margin-bottom: 24px

			img
				width: 100%

		&_link
			display: inline-block
			color: $grey
			text-decoration: none

	.play_button
		font-weight: 600
		font-size: 16px
		text-align: center
		color: $black
		background: rgba(255, 255, 255, 0.6)
		box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.2)
		border-radius: 6px
		padding: 12px 26px
		position: absolute
		left: 50%
		top: 50%
		transform: translate(-50%, -50%)
		z-index: 1
		cursor: pointer

		&:hover
			background: rgba(0, 0, 0, 0.7)
			color: $white

	.content
		display: flex
		justify-content: space-between
		align-items: center
		position: relative
		@media ($large)
			align-items: normal
			flex-direction: column
			width: 100%
			padding: 0

	.examples
		display: flex
		flex-direction: column
		width: 100%
		justify-content: space-between

		&_soundcloud
			@media ($smPhone)
				padding: 80px 0 60px

		&__category
			font-weight: bold
			font-size: 16px
			letter-spacing: -0.1px
			color: #E8E8E8
			border: 1px solid #E8E8E8
			border-radius: 4px
			padding: 4px 13px
			display: inline-block
			vertical-align: middle

			&._footer
				position: relative
				bottom: 10px
				float: right

			&._mobile
				position: absolute
				top: 25px
				left: 16px

	.examples_content
		display: flex
		height: 100%

		& > div
			display: flex
			width: 100%
			align-items: center
			justify-content: center

	.examples_footer
		display: flex
		padding: 34px 0
		border-top: 1px solid $darkGrey
		width: 100%
		@media ($large)
			border-top: none
			padding: 0
		@media ($smPhone)
			padding-bottom: 60px

		&__title
			@media ($large)
				margin: 0 auto 60px
				width: 980px
				padding: 0 40px
			@media ($tablet)
				width: 768px
				padding: 0 30px
			@media ($smPhone)
				width: 100%
				padding: 0 16px
				margin-bottom: 40px

		&__nav
			@media ($large)
				text-align: center
				border-top: 1px solid $darkGrey
				padding: 30px 0
			@media ($smPhone)
				padding: 0
				position: fixed
				width: 100%
				bottom: 0
				z-index: 3
				background-color: $black

			&_item
				cursor: pointer
				font-weight: 600
				font-size: 24px
				color: $darkGrey
				padding: 25px 20px
				border-left: 1px solid $darkGrey
				display: inline-block
				@media ($smPhone)
					font-size: 20px
					width: 50%
				@media ($xsPhone)
					font-size: 18px
					padding: 20px 10px

				&:first-child
					border: none

		&__name_wrap
			display: inline-block

		&__name
			font-size: 40px
			font-weight: 600
			display: inline-block
			vertical-align: middle
			margin-right: 20px
			@media ($extraLarge)
				font-size: 32px
			@media ($smPhone)
				display: block
				font-size: 18px

		&__description
			font-size: 20px
			font-weight: 600
			letter-spacing: 0.2px
			color: $grey
			position: relative
			padding-left: 17px
			margin-top: 13px
			@media ($extraLarge)
				font-size: 14px

			&:before
				content: ''
				width: 12px
				height: 12px
				background-color: $grey
				position: absolute
				left: 0
				top: 50%
				transform: translateY(-50%)
				border-radius: 50%

		&__close
			width: 34px
			height: 34px
			background-image: url('../assets/images/close.svg')
			background-size: contain
			background-repeat: no-repeat
			background-position: 50% 50%
			cursor: pointer
			position: absolute
			right: 40px
			top: 25px
			z-index: 1

			&:hover
				background-image: url('../assets/images/close_hover.svg')

			@media ($large)
				right: 30px
			@media ($smPhone)
				right: 16px

</style>