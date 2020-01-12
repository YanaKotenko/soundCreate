<template lang='pug'>
.contact
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

    
</style>