// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 重置文件
import 'styles/reset.css'
// 一像素边框的解决方案
import 'styles/border.css'
// 消除点击延迟（移动端）
import fastClick from 'fastClick'
import 'styles/iconfont.css'
// import './assets/styles/variabies.styl'

fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
