<template lang='pug'>
  .content
    .about_title
      .about_title__img
      .about_title__text creative audio studio from Russia.
    .about_text
      | Soundcreate is small but ambitious creative audio studio specializing in creating music and sound design for commercial, movie, motion graphics and exhibitions. We focus on giving clients completely unique experiences. Through music and sound, we elevate the art and effectiveness of brand media.
    .about_grid
      .about_grid__col
        img(:src="require('../assets/images/jenya.png')")
        .about_description__name Evgeny Gavrilov
        .about_description__position Composer
      .about_grid__col
        img(:src="require('../assets/images/misha.png')")
        .about_description__name Mikhael Gavrilov
        .about_description__position Sound designer, сomposer
      .about_grid__col
        img(:src="require('../assets/images/danil.png')")
        .about_description__name Daniil Sharomov
        .about_description__position Sound designer, сomposer
    .about_main_img
      img(:src="require('../assets/images/about.png')")

    .about_email
      | new business > 
      a.about_email__link(href='mailto:hello@soundcreate.pro') hello@soundcreate.pro
</template>

<script>
  export default {
    name: 'About'
  };
</script>

<style lang='sass' scoped>
  @import '../assets/sass/variables'

  .content
    padding-top: 60px
    padding-bottom: 67px
    @media ($smPhone)
      padding-top: 30px
      padding-bottom: 30px

  img
    width: 100%
    vertical-align: bottom

  .about

    &_title
      margin-bottom: 40px
      display: flex
      align-items: center

      @media ($large)
        margin-bottom: 30px
        line-height: 1.4
        flex-direction: column
        align-items: normal

      &__text
        font-size: 36px
        font-weight: 600
        @media ($xsPhone)
          font-size: 29px

      &__img
        background-image: url('../assets/images/sign_we_are.svg')
        width: 341px
        height: 36px
        display: inline-block
        vertical-align: middle
        margin-right: 16px
        background-size: contain
        background-repeat: no-repeat
        @media ($xsPhone)
          width: 287px
          height: 28px

    &_text
      font-weight: 600
      font-size: 24px
      max-width: 1015px
      width: 100%
      margin-bottom: 40px
      line-height: 1.5
      @media ($large)
        margin-bottom: 30px
      @media ($xsPhone)
        font-size: 21px

    &_grid
      display: flex
      margin-left: -10px
      margin-right: -10px
      @media ($smPhone)
        display: block
        margin-left: 0
        margin-right: 0

      &__col
        width: 33.33%
        padding: 0 10px
        margin-bottom: 30px
        @media ($smPhone)
          width: 100%
          padding: 0
          margin-bottom: 25px

        img
          margin-bottom: 14px

    &_description

      &__name
        color: rgba(252, 252, 252, 0.9)
        margin-bottom: 10px

      &__position
        color: $grey
        position: relative
        padding-left: 17px
        transition: .4s

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

    &_main_img
      margin-bottom: 33px
      @media ($smPhone)
        display: none

    &_email
      color: $grey

    &_email__link
      font-size: 16px
      font-family: $ArchivoBlack
      color: $white
      text-decoration: none
      @media ($xsPhone)
        font-size: 14px
    
</style>