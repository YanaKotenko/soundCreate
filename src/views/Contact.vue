<template lang='pug'>
.contact
  .contact_equalizer
    .contact_equalizer__line._line1
    .contact_equalizer__line._line2
    .contact_equalizer__line._line3
    .contact_equalizer__line._line4
    .contact_equalizer__line._line5
    .contact_equalizer__line._line6
    .contact_equalizer__line._line7
    .contact_equalizer__line._line8
    .contact_equalizer__line._line9
    .contact_equalizer__line._line10
  
  .contact_title 
    | Let’s make
    span something
    .contact_title__text wonderful together.

  a.contact_email(href='mailto:hello@soundcreate.pro') hello@soundcreate.pro
</template>

<script>
  export default {
    name: 'Contact'
  };
</script>

<style lang='sass' scoped>
  @import '../assets/sass/variables'

  .contact
    display: flex
    height: 100%
    flex-direction: column
    align-items: center
    justify-content: center
    // высота контентной части страниц за вычетом высоты хедера и футера
    min-height: calc(100vh - 8vh - 7vh)

    &_equalizer

      &__line
        width: 4px
        height: 130px
        background: $darkGrey
        display: inline-block
        margin-right: 2px
        animation-iteration-count: infinite
        animation-direction: alternate
        animation-duration: 5s
        animation-timing-function: linear
        animation-name: equalizer
        animation-fill-mode: forwards

        &._line1
          animation-duration: 5.6s
        &._line2
          animation-duration: 5s
        &._line3
          animation-duration: 6s
        &._line4
          animation-duration: 2s
        &._line5
          animation-duration: 4s
        &._line6
          animation-duration: 3s
        &._line7
          animation-duration: 1s
        &._line8
          animation-duration: 4.3s
        &._line9
          animation-duration: 2.7s
        &._line10
          animation-duration: 4.9s

    &_title
      font-weight: 600
      font-size: 36px
      margin-bottom: 25px
      text-align: center
      line-height: 1.3
      @media ($smPhone)
        font-size: 32px
      @media ($xsPhone)
        font-size: 26px

      &__text
        display: inline-block
        @media ($tablet)
          display: block

      span
        font-style: italic
        padding: 0 16px

    &_email
      font-weight: 600
      font-size: 24px
      color: $white
      text-decoration: none

  @keyframes equalizer
    0%
      transform: scaleY(1)
    50%
      transform: scaleY(.5)
    100%
      transform: scaleY(1)

</style>