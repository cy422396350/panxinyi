<template>
  <div class="list">
    <ul class="content">
      <li v-for="(item,key) of alphabet" :key="key">{{key}}</li>
    </ul>
    <!-- you can put some other DOMs here, it won't affect the scrolling -->
  </div>
</template>

<script>
export default{
  name: 'cityAlphabet',
  props: {
    alphabet: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variabies.styl'
.list
  position absolute
  top 2.4rem
  right 0
  bottom 0
  width .4rem
  text-align center
  display flex
  flex-direction column
  justify-content center
  li
    line-height .4rem
    color $bgColor
</style>
