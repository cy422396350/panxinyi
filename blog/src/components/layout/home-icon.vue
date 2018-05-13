<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(item,index) of pages" :key="index">
        <div class="icon" v-for="icon of item" :key="icon.id">
          <div class="icon-img">
            <img
              :src="icon.imgUrl"
              alt="">
          </div>
          <p>
            {{icon.desc}}
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img
              src="https://upload.jianshu.io/users/upload_avatars/1480597/73e40211-fea4-438a-880d-d3865eaf9893.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
              alt="">
          </div>
          <p>
            热门景点
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeIcon',
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) pages[page] = []
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variabies.styl"
  @import "~styles/mixins.styl"
  .icons >>>  .swiper-container
    height 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      overflow hidden
      width 25%
      padding-bottom 25%
      float left
      position relative
      .icon-img
        position absolute
        left 0
        right 0
        top 0
        bottom: 0.44rem
        box-sizing border-box
        padding .1rem
        img
          display block
          margin 0 auto
          height 100%
    p
      position absolute
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor
      width 100%
      ellipse()
</style>
