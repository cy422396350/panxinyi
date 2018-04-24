<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="1">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        {'id': '0001', 'imgUrl': 'https://img.mukewang.com/5abb727800018fd009360316.jpg'},
        {'id': '0002', 'imgUrl': 'https://img.mukewang.com/5ac356a6000166ec09360316.jpg'},
        {'id': '0003', 'imgUrl': 'https://img.mukewang.com/5ad9c34b0001056209360316.jpg'},
        {'id': '0004', 'imgUrl': 'https://img.mukewang.com/5ad9c33300012eff09360316.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper>>>.swiper-pagination-bullet-active
    background #fff

  .swiper-img {
    width: 100%;
  }

  .wrapper {
    width 100%;
    height 0;
    overflow hidden
    padding-bottom 33.76%
    background #eee
  }
</style>
