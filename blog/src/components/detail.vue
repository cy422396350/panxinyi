<template>
  <div>
    <detail-banner @showGallery="handleShow"></detail-banner>
    <detail-gallery
      :list="imgs"
      @closeGallery="handleClose"
      v-show="showGallery"
    ></detail-gallery>
  </div>
</template>

<script>
import DetailBanner from './detail/banner'
import DetailGallery from 'common/gallery'
export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailGallery
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

</style>
