<template>
  <div>
    <detail-banner @showGallery="handleShow"></detail-banner>
    <keep-alive>
      <detail-header></detail-header>
    </keep-alive>
    <detail-gallery
      :list="imgs"
      @closeGallery="handleClose"
      v-show="showGallery"
    ></detail-gallery>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './detail/banner'
import DetailGallery from 'common/gallery'
import DetailHeader from './detail/header'
export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailGallery,
    DetailHeader
  },
  data () {
    return {
      imgs: [
        '/static/image/banner.jpg',
        '/static/image/banner.jpg',
        '/static/image/banner.jpg',
        '/static/image/banner.jpg'
      ],
      showGallery: false
    }
  },
  methods: {
    handleClose () {
      this.showGallery = false
    },
    handleShow () {
      this.showGallery = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
