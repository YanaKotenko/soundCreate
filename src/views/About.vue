<template lang='pug'>
  .content
    .about_title(ref='aboutTitle')
      .about_title__grey we are soundcreate:
      .about_title__white creative audio studio from Russia.
    .about_text
      | Soundcreate is small but ambitious creative audio studio specializing in creating music and sound design for commercial, movie, motion graphics and exhibitions. We focus on giving clients completely unique experiences. Through music and sound, we elevate the art and effectiveness of brand media.
    .about_grid
      .about_grid__col(ref='aboutImg1')
        img(:src="require('../assets/images/jenya.png')")
        .about_description__name Evgeny Gavrilov
        .about_description__position Composer
      .about_grid__col(ref='aboutImg2')
        img(:src="require('../assets/images/misha.png')")
        .about_description__name Mikhail Gavrilov
        .about_description__position Sound designer, сomposer
      .about_grid__col(ref='aboutImg3')
        img(:src="require('../assets/images/danil.png')")
        .about_description__name Daniil Sharomov
        .about_description__position Sound designer, сomposer
    .about_main_img(ref='aboutMainImg')
      img(:src="require('../assets/images/about.png')")

    .about_email
      | new business > 
      a.about_email__link(href='mailto:soundddcreate@gmail.com') soundddcreate@gmail.com
</template>

<script>
  export default {
    name: 'About',
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
      font-size: 52px
      font-weight: 600
      @media ($extraLarge)
        font-size: 36px
      @media ($large)
        margin-bottom: 30px
        line-height: 1.4
        flex-direction: column
        align-items: normal
      @media ($xsPhone)
        font-size: 29px

      &__white
        color: $white
      &__grey
        color: $grey
        padding-right: 16px

    &_text
      font-weight: 600
      font-size: 32px
      max-width: 1015px
      width: 100%
      margin-bottom: 40px
      line-height: 1.3
      @media ($extraLarge)
        font-size: 24px
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
        font-size: 20px
        @media ($extraLarge)
          font-size: 14px

      &__position
        color: $grey
        position: relative
        padding-left: 17px
        transition: .4s
        font-size: 20px
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

    &_main_img
      margin-bottom: 33px
      @media ($smPhone)
        display: none

    &_email
      color: $grey
      font-size: 20px
      @media ($extraLarge)
        font-size: 16px
      @media ($xsPhone)
        font-size: 14px

    &_email__link
      font-family: $ArchivoBlack
      color: $white
      text-decoration: none
    
</style>