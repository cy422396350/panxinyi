<template>
  <div>
    <div class="list-address border-bottom">
      <i class="iconfont">&#xe60d;</i>
      <div class="address-title">
        辽宁省大连市沙河口中山路608-8号（星海国际大酒店旁边）
      </div>
      <i class="iconfont font-go">&#xe62d;</i>
    </div>
    <div class="list-introduce border-bottom">
      <i class="iconfont font-go">&#xe674;</i>
      <div class="address-title">
        查看景点简介及开放时间
      </div>
      <i class="iconfont font-go">&#xe62d;</i>
    </div>
    <div class="list-x border-bottom">
      <div class="x-star">
        <span style="margin-right: .2rem"><i class="iconfont">&#xe761;</i></span>
        <i class="iconfont">&#xe670;</i>
        <i class="iconfont">&#xe670;</i>
        <i class="iconfont">&#xe670;</i>
        <i class="iconfont">&#xe670;</i>
        <i class="iconfont">&#xe670;</i>
        <span style="margin-left: .2rem">4.9分</span>
      </div>
      <div class="x-comment">
        18576条评论
        <i class="iconfont font-go">&#xe62d;</i>
      </div>
    </div>
    <div class="list-laba">
      <i class="iconfont icon-laba">&#xe6ec;</i>
      <div class="list-laba-content">(02-14~02-15): 09:00~12:00开放，13:00停止大家撒看来戒毒所卡拉丹江口撒了</div>
      <i class="iconfont font-go">&#xe62d;</i>
    </div>
    <div class="list-tickets">
      <div class="list-tickets-title" v-for="(item , index) in piao" :key="index">
        {{item.title}}
        <div v-if="item.children">
          <detail-list :piao="item.children"></detail-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'DetailList',
  props: {
    piao: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.list-address
  line-height .6rem
  text-align center
  padding .1rem
  display flex
  overflow hidden
.list-introduce
  line-height .6rem
  text-align left
  padding .1rem
  display flex
  overflow hidden
.address-title
  flex 1
  height .4rem
  line-height .4rem
  padding 0.1rem
  font-weight bold
  ellipse()
  color: #544321
.font-go
  color: #999
  font-size .2rem
.list-x
  height .6rem
  padding .1rem
  .x-star
    line-height .6rem
    float left
    i
      color: #ffce33
  .x-comment
    line-height .6rem
    float right
.list-laba
  line-height .8rem
  height .8rem
  overflow hidden
  padding .1rem
  background rgba(200,112,147,0.5)
  color: darkred
  display flex
  .icon-laba
    font-size .4rem
    color: darkred
  .list-laba-content
    flex 1
    ellipse()
</style>
