<template lang='pug'>
.examples
	.content
		.examples_footer__close(@click='closeWorkExample(activeWork.pageName)')
	.examples_content
		.videoBox(v-if="activeWork.flag === 'video'")
			.play_button(ref='playBtn' @click='playPauseVideo') play
			video(@click='playPauseVideo' ref='video' :poster='posters[activeWork.poster]')
				source(:src='activeWork.src' type='video/mp4')

		div(v-if="activeWork.flag === 'ui'")
			UiSounds

		.examples_soundcloud(v-if="activeWork.flag === 'frame'")
			iframe(scrolling="no" frameborder="no" allow="autoplay" :src='activeWork.src')
	.examples_footer
		.content
			.examples_footer__title
				.examples_footer__name_wrap
					.examples_footer__category {{ activeWork.category }}
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
	import posterAlien from '../assets/images/poster_alien.png';
	import posterShore from '../assets/images/poster_shore.png';
	import posterBanksy from '../assets/images/poster_banksy.png';
	import posterOdd from '../assets/images/poster_odd.png';
	import posterPulse from '../assets/images/poster_pulse.png';
	import posterCalves from '../assets/images/poster_calves.png';

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
					posterPulse
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
		},
		methods: {
			closeWorkExample(workPageName) {
				this.$store.commit('setWorkPage', workPageName);
				this.$store.commit('closeWorkExample');
				this.$store.commit('setActiveWork', null);
			},
			changeProject(int) {
				const video = this.$refs.video;
				const playBtn = this.$refs.playBtn;
				const index = this.works.findIndex(obj => obj.name === this.activeWork.name) + int;

				if(playBtn) {
					playBtn.style.display = 'block';
				}

				if(video) {
					video.load();
				}

				if(index >= 0 && index <= this.works.length - 1) {
					this.$store.commit('setActiveWork', this.works[index]);
				}
			},
			playPauseVideo() {
				const video = this.$refs.video;
				const playBtn = this.$refs.playBtn;

				if (video.paused) {
					video.play();
					playBtn.style.display = 'none';
				} else {
					video.pause();
					playBtn.style.display = 'block';
				}
			}
    }
	};
</script>

<style lang='sass' scoped>
	@import '../assets/sass/variables'
	@import '../assets/sass/default'

	video
		width: 730px
		height: 410px
		@media ($smPhone)
			width: 100%
			padding: 0 16px

	iframe
		width: 300px
		height: 300px

	.videoBox
		position: relative

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
			font-size: 32px
			font-weight: 600
			display: inline-block
			vertical-align: middle
			margin-right: 20px
			@media ($smPhone)
				display: block
				font-size: 18px

		&__description
			font-size: 14px
			font-weight: 600
			letter-spacing: 0.2px
			color: $grey
			position: relative
			padding-left: 17px
			margin-top: 13px

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
			position: relative
			bottom: 10px
			float: right
			@media ($smPhone)
				float: none
				bottom: 0
				margin-bottom: 20px

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