// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/icomoon/style.css');
//require('mobiscroll')
import echarts from 'echarts'
import jquery from 'jquery'
//import mobiscroll from 'mobiscroll'
import Vue from 'vue'
import App from './App'
import router from './router'
import swpie from 'photoswipe'
Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$jquery = jquery
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
