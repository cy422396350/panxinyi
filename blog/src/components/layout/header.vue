<template>
  <div class="header">
    <div class="left-header">
      <div class="iconfont icon-back"></div>
    </div>
    <div class="center-header">
      <span class="iconfont">&#xe606;</span>
      内容
    </div>
    <router-link to="/city">
      <div class="right-header">
        {{this.city}}
        <span class="iconfont icon-jiantouarrow486"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variabies.styl"
  .header
    display: flex;
    line-height: $headerHeight;
    background: $bgColor;
    color: #fff;
    .left-header
      width: .64rem;
      float: left;
      .icon-back
        text-align center;
        font-size: .4rem;

  .right-header
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #ffffff
    .icon-jiantouarrow486
      font-size: .24rem;
      margin-left: -.04rem;

  .center-header
    flex: 1;
    margin-top: .12rem;
    margin-bottom: 0.12rem;
    line-height: .62rem
    border-radius: .1rem;
    color: #ccc;
    background: #fff;
    padding-left: .2rem;
</style>
