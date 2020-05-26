import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    desktop: null,
    tablet: null,
    mobile: null,
    workPage: 'composing',
    workExamplePopup: false,
    works: [{ 
      name: 'Alien',
      description: 'Music for trailer, 2018',
      category: 'composing',
      pageName: 'composing',
      flag: 'video',
      src: 'alien.mp4',
      poster: 'posterAlien',
      url: null,
    },{
      name: 'On the Shore of a Dream',
      description: 'Song for soundrtack, 2018',
      category: 'composing',
      pageName: 'composing',
      flag: 'video',
      src: 'on_the_shore.mp4',
      poster: 'posterShore',
      url: null,
    },{
      name: 'Odd Days',
      description: 'Music for soundtrack, 2015',
      category: 'composing',
      pageName: 'composing',
      flag: 'video',
      src: 'odd_days.mp4',
      poster: 'posterOdd',
      url: null,
    },{
      name: 'Banksy: Genious or Vandal?',
      description: 'Sound design for exhibition, 2019',
      category: 'sound design',
      pageName: 'soundDesign',
      flag: 'video',
      src: 'banksy.mp4',
      poster: 'posterBanksy',
      url: null,
    },{
      name: 'The Calves',
      description: 'Sound design for cartoon, 2019',
      category: 'sound design',
      pageName: 'soundDesign',
      flag: 'video',
      src: 'calves.mp4',
      poster: 'posterCalves',
      url: null,
    },{
      name: 'UI Sounds',
      description: 'Sounds for apps, 2018',
      category: 'sound design',
      pageName: 'soundDesign',
      flag: 'ui',
      src: null,
      poster: null,
      url: null,
    },{
      name: 'Salut: Fireworks',
      description: 'Producing, mixing, mastering, 2019',
      category: 'music production',
      pageName: 'musicProduction',
      flag: 'audio',
      src: 'salut.mp3',
      poster: 'posterSalut',
      url: 'https://music.apple.com/album/1473141972',
    },{
      name: 'Buerak: Repost Modern',
      description: 'Mixing, mastering, 2018',
      category: 'music production',
      pageName: 'musicProduction',
      flag: 'audio',
      src: 'buerak_modern.mp3',
      poster: 'posterBuerakModern',
      url: 'https://music.apple.com/album/%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82-%D0%BC%D0%BE%D0%B4%D0%B5%D1%80%D0%BD/1433575106',
    },{
      name: 'Buerak: Small Apartments',
      description: 'Mixing, mastering, 2017',
      category: 'music production',
      pageName: 'musicProduction',
      flag: 'audio',
      src: 'buerak_durachok.mp3',
      poster: 'posterBuerakApartments',
      url: 'https://music.apple.com/album/%D1%88%D0%BE%D1%83-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81/1477837314',
    },{
      name: 'Buerak: Precise Dances',
      description: 'Mixing, mastering, 2016',
      category: 'music production',
      pageName: 'musicProduction',
      flag: 'audio',
      src: 'buerak-dances.mp3',
      poster: 'posterBuerakDances',
      url: 'https://music.apple.com/album/%D1%82%D0%B0%D0%BD%D1%86%D1%8B-%D0%BF%D0%BE-%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82%D1%83/1476535609',
    }],
    activeWork: null,
    audio: [
      'click_01.mp3',
      'click_05.mp3',
      'click_14.mp3',
      'click_18.mp3',
      'error_02.mp3',
      'error_06.mp3',
      'error_07.mp3',
      'error_12.mp3',
      'error_14.mp3',
      'error_17.mp3',
      'error_20.mp3',
      'pop_02.mp3',
      'pop_04.mp3',
      'pop_08.mp3',
      'pop_17.mp3',
      'pop_21.mp3',
      'tadah_02.mp3',
      'tadah_05.mp3',
      'tadah_14.mp3',
      'tadah_18.mp3',
      'woosh_02.mp3',
      'woosh_09.mp3',
      'woosh_18.mp3',
      'woosh_21.mp3',
    ],
  },
  getters: {},
  mutations: {
    isWidthMobile(state) {
      state.mobile = window.innerWidth <= 767 ? true : false
    },
    isWidthTablet(state) {
      state.tablet = window.innerWidth <= 992  ? true : false
    },
    isWidthDesktop(state) {
      state.desktop = window.innerWidth > 992  ? true : false
    },
    setWorkPage(state, page) {
      state.workPage = page
    },
    openWorkExample(state) {
      state.workExamplePopup = true;
    },
    closeWorkExample(state) {
      state.workExamplePopup = false;
    },
    setActiveWork(state, name) {
      state.activeWork = name;
    },
  },
  actions: {}
})

export default store