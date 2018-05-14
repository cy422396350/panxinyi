<template>
  <div class="search">
    <input type="text" placeholder="请输入要搜索的城市名或拼音">
  </div>
</template>

<script>
export default{
  name: 'citySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variabies.styl"
  .search
    background $bgColor
    height .72rem
    padding .1rem
    box-sizing border-box
    input
      width 100%
      height .52rem
      text-align center
      color #666
      border-radius .06rem
      ellipse()
</style>
