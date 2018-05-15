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
// iconfont
import 'styles/iconfont.css'
// css变量文件
import 'styles/variabies.styl'
// vue-swiper 引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import store from './store'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.prototype.bs = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
