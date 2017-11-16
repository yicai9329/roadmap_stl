<template>
<div id="newReport">
	<br/>
	<div class="row">
		<div class="col s2 push-s10">
			<a class="waves-effect waves-light btn" v-on:click="saveNewReport">保存</a>
		</div>
		<div class="col s2 push-s7">
			<a class="waves-effect waves-light btn">提交</a>
		</div>
	</div>
	<div class="row">

		<div class="col s2">
			<div class="col s12 white z-depth-5" id="left-bar">
				<div id="reportOptionList" class="col s12 white z-depth-5">
					<form id="graphOption">
						<p>
							<input class="with-gap" name="group1" type="radio" id="caption" value="100" v-model="picCode" />
							<label for="caption">报告摘要</label>
						</p>			
						<p>
							<input class="with-gap" name="group1" value="2" v-model="picCode" type="radio" id="graph1" />
							<label for="graph1">报告图表1</label>
						</p>
						<p>
							<input class="with-gap" name="group1" value="5" v-model="picCode" type="radio" id="graph2" />
							<label for="graph2">报告图表2</label>
						</p>
						<p>
							<input class="with-gap" name="group1" value="6" v-model="picCode" type="radio" id="graph3"  />
							<label for="graph3">报告图表3</label>
						</p>
						<p>
							<input class="with-gap" name="group1" value="7" v-model="picCode" type="radio" id="graph4"  />
							<label for="graph4">报告图表4</label>
						</p>
					</form>
				</div>
			</div>
		</div>

		<div class="col s8">
			<div class="row">
				<div id="titleOfGraph" class="col s12 white">
					<span class="flow-text">国内PPI和CPI指数</span>
				</div>

				<div id="chart1" class="col s8">
					<div class="col s12" id="mainarea11">
						<div id="mainarea111"></div>
					</div>
				</div>
                

				<div class="input-field col s4" v-show="picCode == 100">
					<textarea id="textarea0" class="materialize-textarea" :data-length="inputMax" v-model="text0"></textarea>
					<label for="textarea0">Textarea0</label>
				</div>
				<div class="input-field col s4" v-show="picCode == 2">
					<textarea id="textarea2" class="materialize-textarea" :data-length="inputMax" v-model="text2"></textarea>
					<label for="textarea2">Textarea2</label>
				</div>
				<div class="input-field col s4" v-show="picCode == 5">
					<textarea id="textarea5" class="materialize-textarea" :data-length="inputMax" v-model="text5"></textarea>
					<label for="textarea5">Textarea5</label>
				</div>
				<div class="input-field col s4" v-show="picCode == 6">
					<textarea id="textarea6" class="materialize-textarea" :data-length="inputMax" v-model="text6"></textarea>
					<label for="textarea6">Textarea6</label>
				</div>
				<div class="input-field col s4" v-show="picCode == 7">
					<textarea id="textarea7" class="materialize-textarea" :data-length="inputMax" v-model="text7"></textarea>
					<label for="textarea7">Textarea7</label>
				</div>
			</div>

		</div>
<!-- 		<p>{{text0}}</p><br/>
		<p>{{text2}}</p><br/>
		<p>{{text5}}</p><br/>
		<p>{{text6}}</p><br/>
		<p>{{text7}}</p> -->
	</div>
</div>
</template>

<script>
import prefixURL from '../globalUse/globalVar.js'

	export default {
		name: 'newreport',
		watch: {
			picCode: function (newCode, oldCode) {
				if(newCode != 100) {
					this.showreport(newCode);
				} else if (newCode == 100) {
					this.myChart1.clear();
				}
			}
		},
		data () {
			return {
				myChart1: null,
				picCode: 0,
				text0: "",
				text2: "",
				text5: "",
				text6: "",
				text7: "",
				inputMax: 1000,
				nextReportID: 9,
				option1: {
					legend: {
						data: []
					},
					toolbox: {
						top: 10,
						right: 20,
						show: true,
						feature: {
							saveAsImage: {
								show: true
							},
							magicType: {
								show: true,
								type: ['line', 'bar']
							},
							dataView: {
								show: true,
								readOnly: false
							},
							dataZoom: {
								show: true,
								title: {
									zoom: '区域缩放',
									back: '区域缩放还原'
								}
							}
						},

					},
					legend: [{
						data: []
					}],
					backgroundColor: '#eeeeee',
					grid: [{
						left: 'center',
						top: 'center',
						width: '90%',
						height: '80%'
					}],
					xAxis: [{
						type: 'category',
						data: []
					}],
					yAxis: [{
						type: 'value'
					}],
					dataZoom: [{
						id: 'dataZoomX',
						type: 'slider',
						xAxisIndex: [0],
						filterMode: 'filter',
						bottom: 20
					}],
					series: []
				}
			}
		},
	methods: {
		setChart: function() {
			this.myChart1 = this.$echarts.init(document.getElementById('mainarea111'));
		},
		saveNewReport: function() {
			let self = this
			jQuery.ajax({
				type: 'POST',
				url: prefixURL.devURL + 'newReportSave.json',
				// url: prefixURL.prodURL + 'newReportSave.json',
				data: {nextID: self.nextReportID, text0: self.text0, text2: self.text2, text5: self.text5, text6: self.text6, text7: self.text7},
				success: function () {
					console.log("The " + self.nextReportID + " th " + " has been saved.");
				},
				error: function () {
					console.warn("重载报告列表失败")
				}
			});
			self.nextReportID += 1;
		},
		showreport: function(picCode) {
		this.myChart1.setOption(this.option1, true);
		let self = this; 
		jQuery.ajax({
		  type: 'GET',
		  url: prefixURL.devURL + 'seasonReport.json',
		  // url: prefixURL.prodURL + 'seasonReport.json',
		// data: jQuery("#reportlist").serialize(),
		// data: {graphCode: 6},
		data: {graphCode: picCode},
		dataType: 'jsonp',
		jsonp: 'callback',
		success: function (json) {
		// console.log(jQuery("#reportlist").serialize());

		self.myChart1.setOption({
			xAxis: {
				data: json.xdata
			},
			// animation: false
		});
		if (json.legend) {
			self.myChart1.setOption({
				legend: {
					data: json.legend
				},
				yAxis: [{ type: 'value' }]
			});
			self.myChart1.setOption({
				series: (function () {
					var ser = [];
					for (let i = 0; i < json.ydata.length; i++) {
						ser.push({
							name: json.legend[i],
							type: 'line',
							data: json.ydata[i]
						})
					}
					return ser;
				})()
			});
		} else {
			self.myChart1.setOption({
				series: [{
					name: 'one',
					type: 'line',
					data: json.ydata
				}],
				yAxis: [{ type: 'value' }]
			})
		}
      // downloadChart = myChart1;
      // console.log("the graph6 has been initialized.")
  },
  error: function () {
  	console.warn("经济季报数据加载失败！")
  }
});
}
},
mounted () {
	this.$nextTick (function () {
		jQuery(document).ready(function() {
			jQuery('input#input_text, textarea#textarea0, textarea#textarea2, textarea#textarea5, textarea#textarea6, textarea#textarea7').characterCounter();
		});
		this.setChart();
	})
} 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #titleOfGraph {
  	text-align: center;
  }
  #mainarea111 {
      margin-top:5px;
      height: 650px;
  }
</style>
