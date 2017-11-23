import VRouter from 'vue-router'
import Vue from 'vue'


import reportlist from '../components/reportlist'
import ecoreportOptions from '../components/ecoreportOptions'
import ecoglobal from '../components/ecoglobalOptions'
import divind from '../components/divIndOptions'
import stlcompany from '../components/stlCompany'
import newreport from '../components/newReport'
import existedReport from '../components/existedReport'
import newReportLive from '../components/newReportLive'


Vue.use(VRouter)

let router = new VRouter({
	mode: 'hash',
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
     },
     {
      path: '/newReportLive',
      component: newReportLive
     },
     {
      path: '/existedReport/:report_id',
      name: 'existedReport',
      component: existedReport,
      props: true
     }
	]
})

export default router;