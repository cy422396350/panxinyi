<template>
  <div class="wrapper" ref="wrapper">
    <div class="cityList">
      <div class="area border-topbottom">
        <div class="title">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCity" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom" v-for="(items , key) of cities" :key="key">
        <div class="title">{{key}}</div>
        <ul class="item-list">
          <li class="item border-bottom" v-for="inneritem of items" :key="inneritem.id">{{inneritem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
  name: 'cityList',
  props: {
    hotCity: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:after
    border-color #ccc
  &:before
    border-color #ccc
border-bottom
  &:before
    border-color #ccc
.wrapper
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
.title
  line-height .44rem
  background #eee
  font-size .26rem
  padding-left .2rem
  color: #666
.button-list
  overflow hidden
  padding .1rem .6rem .1rem .1rem
  .button-wrapper
    width 33.33%
    float left
  .button
    margin: .1rem
    text-align center
    border solid .02rem #ccc
.item-list
  .item
    padding-left: .2rem
    line-height .54rem
    color: #666

</style>
