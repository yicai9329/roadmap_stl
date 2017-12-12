<template>
	<div id="newReportLive">
		<div id="reportInfo" class="col s12 card-panel cyan accent-2">
			<span class="text-darken-2">类别: {{reportCategory}}</span><br />
			<span class="text-darken-2">年月: {{initReportDate()}}</span><br />
			<span class="text-darken-2">主题: {{reportTheme}}</span><br />
			<a class="waves-effect waves-light btn">保存</a>
			<a class="waves-effect waves-light btn">提交</a>
		</div>
		<div class="row" id="reportBody">
			<docItemSelect :reportID="reportID"></docItemSelect>
			<docItemContent></docItemContent>
			<div id="modal1" class="modal bottom-sheet">
				<div class="modal-content">
					<h4>图片选择列表</h4>
					<div id="graphSelectArea">
						<form id="graphSelectForm" action="#">
							<template v-for="graphItem in graphItems">
								<span :key="graphItem.key">
									<input class="with-gap" name="group1" :value="graphItem.code" type="radio" :id="graphItem.key" v-model="selectedGraphCode">
									<label :for="graphItem.key">{{graphItem.title}}</label>
								</span><br />
							</template>
						</form>
						<p>你选择的图号是: {{selectedGraphCode}}</p>
					</div>
				</div>
				<div class="modal-footer">
					<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">确认</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import docItemSelect from './docItemSelect'
	import docItemContent from './docItemContent'
	export default {
		name: 'newReportLive',
		data () {
			return {
				reportCategory: '月报',
				reportTheme: '宏观经济研究月报2017年第10期',
				selectedGraphCode: 0,
				reportID: 5,
				graphItems: [
				{
					key: "graph2",
					code: 2,
					title: "全球主要经济体PMI指数"
				},
				{
					key: "graph4",
					code: 4,
					title: "全球主要经济体贸易账"
				},
				{
					key: "graph5",
					code: 5,
					title: "全球主要经济体汇率图"
				},
				{
					key: "graph6",
					code: 6,
					title: "国内GDP季度增速图"
				},
				{
					key:"graph7",
					code: 7,
					title: "国内PPI和CPI指数图"
				},
				{
					key:"graph8",
					code: 8,
					title: "国内PMI指数图"
				},
				{
					key:"graph9",
					code: 9,
					title: "国内社会消费品零售额"
				},
				{
					key: "graph10",
					code: 10,
					title: "国内固定资产投资图"
				},
				{
					key: "graph11",
					code: 11,
					title: "房地产投资增速与房价指数"
				},
				{
					key: "graph12",
					code: 12,
					title: "国内进出口额"
				},
				{
					key: "graph13",
					code: 13,
					title: "国内财政收入增速"
				},
				{
					key: "graph15",
					code: 15,
					title: "国内货币投放量"
				},
				{
					key: "graph16",
					code: 16,
					title: "国内市场利率"
				},
				{
					key: "graph17",
					code: 17,
					title: "大宗商品价格指数"
				},
				{
					key: "graph18",
					code: 18,
					title: "制造业分行业工业增加值增速"
				},
				{
					key: "graph19",
					code: 19,
					title: "制造业分行业固定资产投资增速"
				},
				{
					key: "graph20",
					code: 20,
					title: "同行业拆借隔夜利率"
				},
				{
					key: "graph21",
					code: 21,
					title: "两市股指与两市融余"
				},
				{
					key: "graph22",
					code: 22,
					title: "全球主要经济体贸易出口增速"
				}
				]
			}
		},
		components: {
			docItemSelect,
			docItemContent
		},
		methods: {
			initReportDate: function () {
				let my = new Date();
				return my.getFullYear()+''+my.getMonth()+my.getDate();
			}
		},
		mounted () {
			this.$nextTick(function () {
				jQuery(document).ready(function(){
					// jQuery('.collapsible').collapsible();
					jQuery('.modal').modal();
				});
			})

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#reportTitleOne {
		text-align: center;
		color: black;
	}
	#graphSelectArea {
		text-align: left;
		color: black;
	}
	#reportInfo {
		border-style: groove;
	}
	#reportTextAndImage {
		border-style: outset;
	}
	
</style>
