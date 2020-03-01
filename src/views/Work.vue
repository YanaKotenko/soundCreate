<template lang='pug'>
div
  .page_container(v-if='!isOpenWorkExample')
    .content
      Composing(v-if="workPage === 'composing'")
      SoundDesign(v-if="workPage === 'soundDesign'")
      MusicProduction(v-if="workPage === 'musicProduction'")
  .page_container_works(v-if='isOpenWorkExample')
    WorkExample
</template>

<script>
	import Composing from '../components/Composing'
	import SoundDesign from '../components/SoundDesign'
	import MusicProduction from '../components/MusicProduction'
	import WorkExample from '../components/WorkExample'

	export default {
		name: 'Work',
		components: { Composing, SoundDesign, MusicProduction, WorkExample },
    data() {
      return {}
    },
    computed: {
      workPage() {
        return this.$store.state.workPage
      },
      isOpenWorkExample() {
        return this.$store.state.workExamplePopup
      },
    },
	};
</script>

<style lang='sass' scoped>
  @import '../assets/sass/variables'

  .content
    @media ($large)
      padding-top: 50px
      padding-bottom: 50px
    @media ($smPhone)
      padding-top: 30px
      padding-bottom: 40px


  .page_container
    display: flex
    // высота контентной части страниц за вычетом высоты хедера и футера
    min-height: calc(100vh - 8vh - 7vh)
    @media ($large)
      min-height: auto

  .page_container_works
    display: flex
    // высота контентной части страницы за вычетом высоты только хедера
    min-height: calc(100vh - 8vh)
	
</style>