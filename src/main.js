// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/icomoon/style.css');
import Vue from 'vue'
import App from './App'
import router from './router'
import swpie from 'photoswipe'
Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
