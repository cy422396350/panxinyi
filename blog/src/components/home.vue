<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList">></home-swiper>
    <home-icon :iconList="iconList">></home-icon>
    <recommend :recomendList="recomendList">></recommend>
    <weekend :weekendList="weekendList"></weekend>
    <div>{{msg}}</div>
  </div>
</template>

<script>
import HomeHeader from './layout/header'
import HomeSwiper from './layout/swiper.vue'
import HomeIcon from './layout/home-icon'
import Recommend from './layout/recommend'
import Weekend from './layout/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      'city': '',
      'msg': 'hello world',
      'swiperList': [],
      'recomendList': [],
      'iconList': [],
      'weekendList': []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    Recommend,
    Weekend
  },
  methods: {
    getHomeInfo () {
      axios.get('api/index.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      if (res.data.ret === true) {
        const data = res.data.data
        this.city = data.city || '北京'
        this.recomendList = data.recommendList
        this.iconList = data.iconList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
