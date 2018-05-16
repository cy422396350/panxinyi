<template>
  <div class="banner" @click="showGallery">
    <img src="/static/image/banner.jpg" >
    <div class="banner-info">
      <div class="banner-title">大连圣帝亚海洋世界（AAAAA景区）</div>
      <div class="banner-number">
        <span class="iconfont icon-image"></span>
        39
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'DetailBanner',
  methods: {
    showGallery () {
      this.$emit('showGallery')
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  height: 0
  padding-bottom 55%
  overflow hidden
  img
    width 100%
  .banner-info
    position: absolute
    left 0
    bottom 0
    right 0
    height .64rem
    line-height .64rem
    color #ffffff
    display flex
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-title
      padding-left: .2rem
      flex 1
    .banner-number
      line-height .64rem
      height: .64rem
      padding:0 .4rem
      border-radius: .2rem
      background: rgba(0,0,0,0.8)
      margin-right .1rem
</style>
