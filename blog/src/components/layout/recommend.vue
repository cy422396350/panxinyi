<template>
  <div>
    <div class="hot-title">
      热销推荐
    </div>
    <ul>
      <router-link tag="li" :to="'/detail/'+it.id" class="item border-bottom" v-for="it of recomendList" :key="it.id">
        <img :src="it.imgUrl" alt="" class="item-img">
        <div class="item-right">
          <p class="item-title">{{it.title}}</p>
          <p class="item-desc">{{it.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recomendList: Array
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
    display flex
    height 1.9rem
    background: #ffffff
    box-sizing border-box
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-right
      min-width 0
      flex: 1
      padding: .1rem
      .item-title
        font-size .32rem
        line-height .54rem
        ellipse()
      .item-desc
        color: #ccc
        line-height .4rem
        ellipse()
      .item-button
        background #FF9300
        color #ffffff
        padding .1rem .2rem
        border-radius .06rem

</style>
