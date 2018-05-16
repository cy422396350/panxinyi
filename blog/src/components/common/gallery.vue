<template>
  <div class="container" @click="handleClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item , index) in list" :key="index">
          <img class="swiper-img" :src="item" alt="1">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Gallery',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      },
      showGallery: false
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return ['static/image/banner.jpg']
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('closeGallery')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  background #333333
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  width 100%
  display flex
  flex-direction column
  justify-content center
  .wrapper
    width 100%
    padding-bottom 100%
    height 0
    .swiper-pagination
      color:#eaeaea
      position absolute
      bottom -1rem
</style>
