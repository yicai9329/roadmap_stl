<template>
	<div class="col s12" id="captionSelect">
		<ul class="collapsible" data-collapsible="accordion">
			<template v-for="captionItem in captionItems">
				<li :key="captionItem.captionI">
					<div class="collapsible-header"><i class="material-icons">place</i>{{captionItem.captionI}}</div>
					<div class="collapsible-body">
						<template v-for="subTitle in captionItem.children">
							<ul class="collection" :key="subTitle.captionII">
								<li class="collection-item"><a href="#!">{{subTitle.captionII}}</a></li>
							</ul>
						</template>
					</div>
				</li>
			</template>
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
</template>

<script>
	export default {
		name: 'docItemSelect',
		data () {
			return {
				captionItems: [
				{ captionI: "报告摘要" , reportID: this.reportID,
				children:[ {captionII: "全球经济形势的整体判断"}, {captionII: "国内经济形势的整体判断"} ]
			},                                                                                                              
			{ captionI: "全球经济发展趋势", reportID: this.reportID,
			children:[{captionII: "全球经济保持回暖态势，美欧中制造业景气达近年高点"}, {captionII: "全球贸易出口增势强劲，贸易失衡依然严重"}, {captionII: "前三季美元疲软，欧、日元和人民币走势强劲"}]
		},
		{captionI: "产业经济分析", reportID: this.reportID,
		children:[{captionII: "大宗商品价格冲高回落，钢铁价格领头"},{captionII: "钢铁效益明显回升，通信、计算机、仪器仪表与汽车产业领增"}]
	},
	{captionI: "结论及建议", reportID: this.reportID, children:[
	{captionII: "整体结论及趋势预测"}
	]}                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	],
}
},
mounted () {
	this.$nextTick(function () {
		jQuery(document).ready(function(){
			jQuery('.collapsible').collapsible();
			jQuery('.modal').modal();
		});
	})

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>