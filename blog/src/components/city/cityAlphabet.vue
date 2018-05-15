<template>
  <div class="list">
    <ul class="content">
      <li v-for="item of letter" :key="item"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick"
          :ref="item"
      >{{item}}
      </li>
    </ul>
    <!-- you can put some other DOMs here, it won't affect the scrolling -->
  </div>
</template>

<script>
export default{
  name: 'cityAlphabet',
  props: {
    alphabet: Object
  },
  data () {
    return {
      touchState: false,
      timer: null,
      startY: ''
    }
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.alphabet) {
        letter.push(i)
      }
      return letter
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.bs.$emit('changeLetter', e.target.innerText)
    },
    handleTouchStart () {
      this.touchState = true
    },
    handleTouchMove (e) {
      if (this.touchState) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const index = Math.floor((e.touches[0].clientY - 110 - this.startY) / 20)
          console.log(this.letter[index])
          if (index >= 0 && index < this.letter.length) {
            this.bs.$emit('changeLetter', this.letter[index])
          }
        }, 30)
      }
    },
    handleTouchEnd () {
      this.touchState = false
    }
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
