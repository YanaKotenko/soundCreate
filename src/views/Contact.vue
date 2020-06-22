<template lang='pug'>
.contact
  .contact_equalizer_wrap
    .contact_equalizer
      .contact_equalizer__line(
        v-for='(line, i) in linesArray'
        ref="line"
      )
  .contact_title 
    | Let’s make
    span something
    .contact_title__text wonderful together.
  a.contact_email(href='mailto:soundddcreate@gmail.com') soundddcreate@gmail.com
</template>

<script>
  export default {
    name: 'Contact',
    data() {
      return {
        linesArray: [],
        min: 2,
        max: 10
      }
    },
    computed: {
      isMobile() {
        return this.$store.state.mobile
      },
      linesCount() {
        return this.isMobile ? 35 : 70
      }
    },
    methods: {
      getRandomInt(min, max) {
        return Math.random() * (max - min) + min;
      }
    },
		created() {
      for (let i = 0; i < this.linesCount; i++) {
        this.linesArray.push(i);
      }
    },
    mounted() {
      for (let i = 0; i < this.linesCount; i++) {
        this.$refs.line[i].style.animationDuration = `${this.getRandomInt(this.min, this.max)}s`;
      }
    }
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

    &_equalizer_wrap
      overflow: hidden
      margin-bottom: 50px
      @media ($smPhone)
        margin-bottom: 20px

    &_equalizer
      animation-timing-function: ease-in

      &__line
        width: 4px
        height: 130px
        background: $darkGrey
        display: inline-block
        margin-right: 4px
        animation-iteration-count: infinite
        animation-direction: alternate
        animation-timing-function: linear
        animation-name: equalizer
        animation-fill-mode: forwards
        @media ($smPhone)
          height: 90px

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
    25%
      transform: scaleY(.25)
    50%
      transform: scaleY(.5)
    75%
      transform: scaleY(.75)
    100%
      transform: scaleY(1)

</style>