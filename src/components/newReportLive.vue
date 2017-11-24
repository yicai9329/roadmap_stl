<template>
	<div id="newReportLive">
		<div id="reportInfo" class="col s12 card-panel cyan accent-2">
			<span class="text-darken-2">类别: {{reportCategory}}</span><br />
			<span class="text-darken-2">年月: {{reportDate}}</span><br />
			<span class="text-darken-2">主题: {{reportTheme}}</span><br />
			<a class="waves-effect waves-light btn">保存</a>
			<a class="waves-effect waves-light btn">提交</a>
		</div>
		<div class="row" id="reportBody">
			<div class="col s3 green lighten-3" id="captionSelect">
				<ul class="collapsible" data-collapsible="accordion">
					<li>
						<div class="collapsible-header"><i class="material-icons">place</i>报告摘要</div>
						<div class="collapsible-body">
							<ul class="collection">
								<li class="collection-item"><a href="#!">全球经济形势的整体判断</a></li>
								<li class="collection-item"><a href="#!">国内经济形势的整体判断</a></li>
							</ul>
						</div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">place</i>全球经济发展趋势</div>
						<div class="collapsible-body">
							<ul class="collection">
								<li class="collection-item"><a href="#!">全球经济保持回暖态势，美欧中制造业景气达近年高点</a></li>
								<li class="collection-item"><a href="#!">全球贸易出口增势强劲，贸易失衡依然严重</a></li>
								<li class="collection-item"><a href="#!">前三季美元疲软，欧、日元和人民币走势强劲</a></li>
							</ul>
						</div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">place</i>国内经济变化趋势</div>
						<div class="collapsible-body">
							<ul class="collection">
								<li class="collection-item"><a href="#!">GDP增速保持较快增长，现代服务业和高端制造业贡献较大</a></li>
								<li class="collection-item"><a href="#!">	去产能、上游价格上涨和环保三重压力PPI持续上涨，PPI与CPI差距持续扩大</a></li>
								<li class="collection-item"><a href="#!">经济趋好，制造业与非制造业PMI达近年来高点</a></li>
								<li class="collection-item"><a href="#!">消费增速受房产降温影响略有放缓，网上零售保持高速增长</a></li>
								<li class="collection-item"><a href="#!">固定资产投资增速持续放缓，房产投资降速明显</a></li>
								<li class="collection-item"><a href="#!">大宗商品进口量价齐升，欧美与新兴市场共同支撑出口增长，贸易顺差冲高回落</a></li>
								<li class="collection-item"><a href="#!">财政收入受价格上涨、企业盈利改善和房产热影响增速快，地方债交易所发行剧增</a></li>
								<li class="collection-item"><a href="#!">流动性趋紧略松，市场利率上升回落，居民杠杆过快，政府加强控制 </a></li>
								<li class="collection-item"><a href="#!">经济趋好带动股市缓慢上升，两市融余持续攀升逼近万亿</a></li>
							</ul>
						</div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">place</i>产业经济分析</div>
						<div class="collapsible-body">
							<ul class="collection">
								<li class="collection-item"><a href="#!">大宗商品价格冲高回落，钢铁价格领头</a></li>
								<li class="collection-item"><a href="#!">钢铁效益明显回升，通信、计算机、仪器仪表与汽车产业领增</a></li>
							</ul>
						</div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">place</i>结论及建议</div>
						<div class="collapsible-body">
							<ul class="collection">
								<li class="collection-item"><a href="#!">整体结论及趋势预测</a></li>
							</ul>
						</div>
					</li>
				</ul>
				<div class="row" id="addButtonForCaptionOne">
					<span class="deep-purple-text darken-4">增加一级标题</span>&nbsp;<a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
					<span class="deep-purple-text darken-4">减去一级标题</span>&nbsp;<a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">cancel</i></a>
				</div>
				<div class="row" id="addButtonForCaptionTwo">
					<span class="deep-purple-text darken-4">增加二级标题</span>&nbsp;<a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
					<span class="deep-purple-text darken-4">减少二级标题</span>&nbsp;<a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">cancel</i></a>
				</div>
			</div>
			<div class="col s9" id="reportContent">
				<div id="reportTitleOne" class="col s9 offset-s3 card-panel blue lighten-3">
					<label for="caption1">一级标题:</label><input placeholder="请输入一级标题" id="caption1" type="text" class="validate"><br />
					<label for="caption2">二级标题:</label><input placeholder="请输入二级标题" id="caption2" type="text" class="validate">
				</div>
				<div id="reportTtileTwo" class="row">
					<div id="reportTitleTwoAddOrDelete" class="col s2  lime lighten-4">
						<span class="indigo-text darken-3">增加文本域</span>&nbsp;<a href="#!"><i class="material-icons">add</i></a> <br />
						<span class="indigo-text darken-3">增加图片</span>&nbsp;<a href="#!"><i class="material-icons">add</i></a><br />
						<span class="indigo-text darken-3">删掉文本域</span>&nbsp;<a href="#!"><i class="material-icons">cancel</i></a> <br />
						<span class="indigo-text darken-3">删掉图片</span>&nbsp;<a href="#!"><i class="material-icons">cancel</i></a>
					</div>
					<div id="reportTextAndImage" class="col s10  deep-orange lighten-5">
                      
					</div>
				</div> 
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'newReportLive',
		data () {
			return {
				reportCategory: '月报',
				reportDate: '20171124',
				reportTheme: '宏观经济研究月报2017年第10期'
			}
		},
		methods: {
			initForCollapse: function () {

			}
		},
		mounted () {
			this.$nextTick(function () {
				jQuery(document).ready(function(){
					jQuery('.collapsible').collapsible();
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
</style>
