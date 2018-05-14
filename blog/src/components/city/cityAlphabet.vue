<template>
  <div class="list">
    <ul class="content">
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
      <li>F</li>
      <li>G</li>
      <li>H</li>
      <li>I</li>
      <li>J</li>
      <li>K</li>
      <li>L</li>
      <li>M</li>
      <li>N</li>
      <li>O</li>
      <li>P</li>
      <li>Q</li>
      <li>R</li>
      <li>S</li>
      <li>T</li>
      <li>U</li>
      <li>V</li>
      <li>W</li>
      <li>X</li>
      <li>Y</li>
      <li>Y</li>
      <li>Z</li>
    </ul>
    <!-- you can put some other DOMs here, it won't affect the scrolling -->
  </div>
</template>

<script>
export default{
  name: 'cityAlphabet'
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
