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
      src: 'on_the_shore.mp4',
      poster: 'posterAlien',
    },{
      name: 'On the Shore of a Dream',
      description: 'Song for soundrtack, 2018',
      category: 'composing',
      pageName: 'composing',
      flag: 'video',
      src: 'on_the_shore.mp4',
      poster: 'posterShore',
    },{
      name: 'Odd Days',
      description: 'Music for soundtrack, 2015',
      category: 'composing',
      pageName: 'composing',
      flag: 'video',
      src: 'odd_days.mp4',
      poster: 'posterOdd',
    },{
      name: 'Banksy: Genious or Vandal?',
      description: 'Sound design for exhibition, 2019',
      category: 'sound design',
      pageName: 'soundDesign',
      flag: 'video',
      src: 'banksy.mp4',
      poster: 'posterBanksy',
    },{
      name: 'The Calves',
      description: 'Sound design for cartoon, 2019',
      category: 'sound design',
      pageName: 'soundDesign',
      flag: 'video',
      src: 'calves.mp4',
      poster: 'posterCalves',
    },{
      name: 'UI Sounds (for Design Files)',
      description: 'Sounds for apps, 2018',
      category: 'sound design',
      pageName: 'soundDesign',
      flag: 'ui',
      src: null,
      poster: null,
    },{
      name: 'Salut: Fireworks',
      description: 'Producing, mixing, mastering, 2019',
      category: 'music production',
      pageName: 'musicProduction',
      flag: 'frame',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/237454729&color=%2370786a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      poster: null,
    },{
      name: 'Buerak: Repost Modern',
      description: 'Mixing, mastering, 2018',
      category: 'music production',
      pageName: 'musicProduction',
      flag: 'frame',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/54550823&color=%235e717a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      poster: null,
    },{
      name: 'Buerak: Small Apartments',
      description: 'Mixing, mastering, 2017',
      category: 'music production',
      pageName: 'musicProduction',
      flag: 'frame',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/54550825&color=%235e717a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      poster: null,
    },{
      name: 'Buerak: Precise Dances',
      description: 'Mixing, mastering, 2016',
      category: 'music production',
      pageName: 'musicProduction',
      flag: 'frame',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/54550826&color=%235e717a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      poster: null,
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