<template lang='pug'>
  .application
    .load_images
    .header
      .content
        .flex_wrapper
          router-link.logo(to='/') soundcreate
          .menu
            router-link.menu__item(to='/') work
            router-link.menu__item(to='/about') about
            router-link.menu__item(to='/contact') contact
    router-view
    .footer(v-if='!isOpenWorkExample')
      .content
        .flex_wrapper(v-if="$route.path !== '/contact' && $route.path !== '/about'")
          .footer_email
            | new business > 
            a.footer_email__link(href='mailto:hello@soundcreate.pro') hello@soundcreate.pro
          .footer_sign We will compose original music for your film, tv show, game, app or any kind of project.
        .footer_social(v-if="$route.path === '/contact' || $route.path === '/about'")
          a.footer_social_link(href='https://www.instagram.com/' target='_blank') Instagram
          a.footer_social_link(href='https://www.facebook.com/' target='_blank') Facebook
          a.footer_social_link(href='https://medium.com/' target='_blank') Medium
          a.footer_social_link(href='https://www.vimeo.com/' target='_blank') Vimeo
</template>

<script>
	export default {
    name: 'Router',
    data() {
      return {}
    },
    computed: {
      isOpenWorkExample() {
        return this.$store.state.workExamplePopup
      },
    },
    methods: {
      getMobileWidth() {
        this.$store.commit('isWidthMobile')
      },
      getTabletWidth() {
        this.$store.commit('isWidthTablet')
      },
      getDesktopWidth() {
        this.$store.commit('isWidthDesktop')
      },
    },
    created() {
      window.addEventListener('resize', () => {
        this.getMobileWidth()
        this.getTabletWidth()
        this.getDesktopWidth()
      })

      this.getMobileWidth()
      this.getTabletWidth()
      this.getDesktopWidth()
    },
	};
</script>

<style lang='sass' scoped>
  @import './assets/sass/variables'

  .application
    display: flex
    flex-direction: column
    height: 100%
    // padding-bottom: 76px
    position: relative
    @media ($smPhone)
      padding-top: 65px

  .load_images
    opacity: 0
    height: 0
    visibility: hidden
    &:after
      content: url('./assets/images/micro.svg') url('./assets/images/sint.svg') url('./assets/images/pult.svg')
      position: absolute
      left: -2000px

  .header
    border-bottom: 1px solid $darkGrey
    padding: 32px 0
    @media ($smPhone)
      padding: 24px 0
      position: fixed
      width: 100%
      z-index: 3
      background-color: $black
      top: 0

  .flex_wrapper
    display: flex
    align-items: center
    justify-content: space-between

  .logo
    font-size: 24px
    font-family: $ArchivoBlack
    letter-spacing: -0.5px
    color: $white
    text-decoration: none
    @media ($smPhone)
      font-size: 16px

  .menu
    
    &__item
      font-weight: bold
      font-size: 16px
      letter-spacing: -0.1px
      color: $black
      background-color: $white
      padding: 4px 10px
      border-radius: 6px
      margin-left: 12px
      text-decoration: none
      &:hover
        background-color: transparent
        color: $white
      @media ($xsPhone)
        font-size: 14px
        margin-left: 6px
        padding: 4px 8px

  .footer
    padding: 28px 0
    border-top: 1px solid $darkGrey
    // position: absolute
    // bottom: 0
    // left: 0
    width: 100%

    &_email
      color: $grey

    &_email__link
      font-size: 16px
      font-family: $ArchivoBlack
      color: $white
      text-decoration: none
      @media ($xsPhone)
        font-size: 14px

    &_sign
      color: $grey
      @media ($tablet)
        display: none

    &_social
      text-align: center

    &_social_link
      font-weight: 600
      font-size: 14px
      color: $grey
      text-decoration: none
      letter-spacing: 0.2px
      margin: 0 12px
      @media ($xsPhone)
        margin: 0 6px

</style>

