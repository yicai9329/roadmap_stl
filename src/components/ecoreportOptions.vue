<template>
  <div id="qqq" class=" row">
    <div class="col s3 white z-depth-5" id="left-bar">
      <div id="ecoreport" class="col s12 white z-depth-5">
        <p class="col s6"><input type="radio" name="wod" class="filled-in" id="world" value='worand' v-model='disOption1' checked/><label for="world">世界</label>
          <input type="radio" name="wod" class="filled-in" id="country" value='couand' v-model='disOption1' /><label for="country">国内</label></p>
        <p class="col s6"><input type="radio" name="moh" class="filled-in" id="season" value='sea' v-model='disOption2' checked/><label for="season">季度</label>
          <input type="radio" name="moh" class="filled-in" id="month" value='mon' v-model='disOption2' /><label for="month">月度</label></p>
        <form id="reportlist">
          <div id="worandsea" v-if="disOption === 'worandsea'">
            <input type="radio" name="graphCode" value="1" id="table1" v-model="picCode"/><label for="table1">全球主要经济体GDP增速</label>
            <input type="radio" name="graphCode" value="3" id="table2" v-model="picCode"/><label for="table2">全球主要经济体贸易出口增速</label>
          </div>
          <div id="worandmon" v-else-if="disOption === 'worandmon'">
            <input type="radio" name="graphCode" value="2" id="table3" v-model="picCode"/><label for="table3">全球主要经济体PMI指数</label>
            <input type="radio" name="graphCode" value="4" id="table4" v-model="picCode"/><label for="table4">全球主要经济体贸易帐</label>
            <input type="radio" name="graphCode" value="5" id="table5" v-model="picCode"/><label for="table5">全球主要经济体汇率</label>
            <input type="radio" name="graphCode" value="22" id="table22" v-model="picCode"/><label for="table22">全球主要经济体贸易出口增长率</label>
          </div>
          <div id="couandsea" v-else-if="disOption ==='couandsea'">
            <input type="radio" name="graphCode" value="6" id="table6" v-model="picCode"/><label for="table6">国内GDP季度增速</label>
          </div>
          <div id="couandmon" v-else-if="disOption === 'couandmon'">
            <input type="radio" name="graphCode" value="7" id="table7" v-model="picCode"/><label for="table7">国内PPI和CPI指数</label>
            <input type="radio" name="graphCode" value="8" id="table8" v-model="picCode"/><label for="table8">国内PMI指数</label>
            <input type="radio" name="graphCode" value="9" id="table9" v-model="picCode"/><label for="table9">国内社会消费品零售总额</label>
            <input type="radio" name="graphCode" value="10" id="table10" v-model="picCode"/><label for="table10">国内固定资产投资</label>
            <input type="radio" name="graphCode" value="11" id="table11" v-model="picCode"/><label for="table11">房地产投资增速与房价指数</label>
            <input type="radio" name="graphCode" value="12" id="table12" v-model="picCode"/><label for="table12">国内进出口额</label>
            <input type="radio" name="graphCode" value="13" id="table13" v-model="picCode"/><label for="table13">国内财政收入增速</label>
            <input type="radio" name="graphCode" value="14" id="table14" v-model="picCode"/><label for="table14">国内地方债发行成本</label>
            <input type="radio" name="graphCode" value="15" id="table15" v-model="picCode"/><label for="table15">国内货币投放量</label>
            <input type="radio" name="graphCode" value="16" id="table16" v-model="picCode"/><label for="table16">国内市场利率</label>
            <input type="radio" name="graphCode" value="17" id="table17" v-model="picCode"/><label for="table17">大宗商品价格指数</label>
            <input type="radio" name="graphCode" value="18" id="table18" v-model="picCode"/><label for="table18">制造业分行业工业增加值增速</label>
            <input type="radio" name="graphCode" value="19" id="table19" v-model="picCode"/><label for="table19">制造业分行业固定资产投资增速</label>
            <input type="radio" name="graphCode" value="20" id="table20" v-model="picCode"/><label for="table20">同业拆借隔夜利率</label>
            <input type="radio" name="graphCode" value="21" id="table21" v-model="picCode"/><label for="table21">两市股指与两市融余</label>
          </div>
          <div id="errorOption" v-else>
            I should not appear, you made a wrong choice.
          </div>
        </form>
      </div>
      <button v-on:click="showreport" v-show="">测试jquery加载数据</button>
    </div>
    <div id="chart" class="col s8">
      <div class="col s12" id="mainarea11">
        <div id="mainarea1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import prefixURL from '../globalUse/globalVar.js'

export default {
  name: 'ecoreportOptions',
  data () {
    return {
      disOption1: 'worand',
      disOption2: 'sea',
      myChart1: null,
      picCode: 0,
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
  computed: {
    disOption: function () {
      return this.disOption1 + this.disOption2
    }
  },
  mounted() {
     this.setChart();
  },
  watch: {
    picCode: function (newCode) {
      this.showreport();
    }
  },
  methods: {
    setChart: function() {
      this.myChart1 = this.$echarts.init(document.getElementById('mainarea1'));
    },
    showreport: function() {
    // if(typeof myChart1 == "undefined"){
    //    let myChart1 = this.$echarts.init(document.getElementById('mainarea1'))
    // }
    // let myChart1 = this.$echarts.init(document.getElementById('mainarea1'))
    // console.log(jQuery("#reportlist").serialize())
    this.myChart1.setOption(this.option1, true);
    let self = this; 
    jQuery.ajax({
    type: 'GET',
    url: prefixURL.devURL + 'seasonReport.json',
    // url: prefixURL.prodURL + 'seasonReport.json',
    // data: jQuery("#reportlist").serialize(),
    // data: {graphCode: 6},
    data: {graphCode: self.picCode},
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function (json) {
      console.log(jQuery("#reportlist").serialize());
      
      self.myChart1.setOption({
        xAxis: {
          data: json.xdata
        }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
