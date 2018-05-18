<template>
  <div>
    <detail-banner
      @showGallery="handleShow"
      :sightName="sightName"
      :bannerImg="bannerImg"
    ></detail-banner>
    <keep-alive>
      <detail-header></detail-header>
    </keep-alive>
    <fade-animation>
      <detail-gallery
        :list="gallaryImgs"
        @closeGallery="handleClose"
        v-show="showGallery"
      ></detail-gallery>
    </fade-animation>
    <detail-list :piao="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './detail/banner'
import DetailGallery from 'common/gallery'
import DetailHeader from './detail/header'
import DetailList from './detail/list'
import FadeAnimation from 'common/fadeAnimation'
import axios from 'axios'
export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailGallery,
    DetailHeader,
    DetailList,
    FadeAnimation
  },
  data () {
    return {
      imgs: [
        '/static/image/banner.jpg',
        '/static/image/banner.jpg',
        '/static/image/banner.jpg',
        '/static/image/banner.jpg'
      ],
      showGallery: false,
      categoryList: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    handleClose () {
      this.showGallery = false
    },
    handleShow () {
      this.showGallery = true
    },
    getDetailInfoSucc (ret) {
      let res = ret.data
      if (res.ret && res.data) {
        let data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    axios.get('/api/detail.json', {
      params: {
        id: this.$route.params.id
      }
    }).then(this.getDetailInfoSucc)
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
