<template>
  <div>
    <div class="hot-title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="it of weekendList" :key="it.id">
        <div class="item-img-wrapper">
          <img :src="it.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-right">
          <p class="item-title">{{it.title}}</p>
          <p class="item-desc">{{it.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  props: {
    weekendList: Array
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .hot-title
    background: #eee
    line-height: .8rem
    text-indent: .2rem
    margin-top: .2rem

  .item
    background: #ffffff
    box-sizing border-box

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%

  .item-right
    padding: .1rem
    .item-title
      font-size .32rem
      line-height .54rem
      ellipse()
    .item-desc
      color: #ccc
      line-height .4rem
      ellipse()

</style>
