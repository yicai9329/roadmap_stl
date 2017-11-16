// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import echarts from 'echarts'
import jQuery from 'jquery'
import VRouter from 'vue-router'

import indexRouter from './router/index.js'

require("../node_modules/materialize-css/dist/css/materialize.min.css");
require("../node_modules/materialize-css/dist/js/materialize.js");
// require("../node_modules/echarts/dist/echarts.js");

Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: indexRouter,
  template: '<App/>',
  components: { App }
})
