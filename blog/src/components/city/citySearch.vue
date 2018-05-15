<template>
  <div>
    <div class="search">
      <input type="text" placeholder="请输入要搜索的城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="border-bottom"
            v-for="item in list"
            :key="item.id"
            @click="handleClickCity(item.name)"
        >{{item.name}}</li>
        <li class="border-bottom" v-show="hasNoData">没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
  name: 'citySearch',
  props: {
    city: Object
  },
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  methods: {
    handleClickCity (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return (this.list.length === 0)
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        return
      }
      this.timer = setTimeout(() => {
        const ret = []
        for (let i in this.city) {
          this.city[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              ret.push(value)
            }
          })
        }
        this.list = ret
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
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
  .search-content
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background: #eeeeee
    overflow: hidden
    z-index 1
    li
      line-height .62rem
      color: #4d4d4d
      padding-left .1rem
</style>
