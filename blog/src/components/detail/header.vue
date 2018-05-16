<template>
  <div>
    <div class="header-abs" v-show="showAbs">
      <router-link tag="i" to="/" class="iconfont">&#xe934;</router-link>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacitySty">
      <router-link tag="i" to="/" class="iconfont">&#xe934;</router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default{
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacitySty: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140 > 1 ? 1 : top / 140
        this.opacitySty = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variabies.styl'
.header-abs
  position: fixed
  top .2rem
  left .2rem
  width .8rem
  height .8rem
  line-height .8rem
  background: rgba(0,0,0,0.7)
  color: #ffffff
  text-align center
  border-radius: .4rem
.header-fixed
  background $bgColor
  line-height $headerHeight
  height $headerHeight
  position fixed
  top 0rem
  left 0rem
  right 0rem
  text-align center
  color: #ffffff
  i
    display block
    float left
    padding-left .2rem

</style>
