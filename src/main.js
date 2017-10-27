// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import echarts from 'echarts'
import jQuery from 'jquery'
import VRouter from 'vue-router'

import reportlist from './components/reportlist'
import ecoreportOptions from './components/ecoreportOptions'
import ecoglobal from './components/ecoglobalOptions'
import divind from './components/divIndOptions'
import stlcompany from './components/stlCompany'
import newreport from './components/newReport'

require("../node_modules/materialize-css/dist/css/materialize.min.css");
require("../node_modules/materialize-css/dist/js/materialize.js");
// require("../node_modules/echarts/dist/echarts.js");

Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false
Vue.use(VRouter)

let router = new VRouter({
	mode: 'history',
	routes: [
	   {
	   	path: '/',
	   	redirect: '/ecoreport'
	   },
     {
     	path: '/reportToBeDownloaded',
     	component: reportlist
     },
     {
     	path: '/ecoreport',
     	component: ecoreportOptions
     },
     {
     	path: '/ecoglobal',
     	component: ecoglobal
     },
     {
     	path: '/divInd',
     	component: divind
     },
     {
      path: '/stlCompnay',
      component: stlcompany
     },
     {
      path: '/newReport',
      component: newreport
     }
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
