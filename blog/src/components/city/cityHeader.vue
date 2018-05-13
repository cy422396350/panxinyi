<template>
  <div class="cityHeader">
    <router-link to="/">
      <div class="iconfont icon-back"></div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style scoped lang="stylus">
  @import "~styles/variabies.styl"
  .cityHeader
    height $headerHeight
    line-height $headerHeight
    color: #fff
    background $bgColor
    font-size .32rem
    text-align center
    .icon-back
      width .64rem
      float left
      color #ffffff
</style>
