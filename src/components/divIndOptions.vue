<template>
<div id="qqq1" class=" row">
  <div class="col s3 white z-depth-5" id="left-bar">
    <div id="divind">
      <form id="scatterdata">
        <div id="yearList" class="col s12 input-field">
          <select id="yearList1" name="yearFrom" class="col s6">   
          </select>
          <label>选择起止年份</label>
          <select id="yearList2" name="yearTo" class="col s6">
          </select>
        </div>
        <div id="divList" class="col s12 input-field">
          <p><select id="divList1" name="divList">
          </select>
          <label>选择地区</label></p>
        </div>
        <p class="col s12"><input type="checkbox" class="filled-in" id="clear" /><label for="clear">清除/全选</label></p>
        <div id="indList" class="col s12">
        </div>
        <input type="radio" name="switchType" value="0" id="switch0" /><label for="switch0">产业对比</label>
        <input type="radio" name="switchType" value="1" id="switch1" /><label for="switch1">地区对比</label>
      </form>
    </div>
  </div>
  <div id="chart" class="col s8">
    <div class="col s12" id="mainareaa">
       <div id="mainarea"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'divind',
  data () {
  return {
  option:  { title: {
    text: '圆圈大小代表工业产值大小',
    left: 'center'
  },
  legend: {
    right: 10,
    data: []
  },
  backgroundColor: '#eeeeee',
  toolbox: {
    top: 70,
    right: 40,
    orient: 'vertical',
    show: true,
    feature: {
      saveAsImage: {
        show: true
      }
    }
  },
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    hideDelay: 100,
    formatter: function (data) {
      return data.value[3] + '</br>' + data.value[4] + '</br>' + data.value[5]
    },
  },
  grid: {
    left: 72,
    top: 'center',
    width: '85%',
    height: '85%'
  },
  xAxis: {
    name: '销售利润率(%)',
    nameGap: 10,
    nameTextStyle: {
      width: 15
    },
    type: 'value',
    min: 0,
    data: []
  },
  yAxis: {
    name: '全员劳动生产率(万元/人年)',
    nameTextStyle: {
      width: 15
    },
    type: 'value'
  },
  dataZoom: [{
    id: 'dataZoomX',
    type: 'slider',
    xAxisIndex: [0],
    filterMode: 'empty',
    bottom: 20
  }, {
    id: 'dataZoomY',
    type: 'slider',
    yAxisIndex: [0],
    filterMode: 'empty'
  }],
  series: []
}
    }
  },
  methods: {
    initBase() {
      let myChart = this.$echarts.init(document.getElementById('mainarea'))

      myChart.setOption(this.option)
    }

  },
  mounted() {
    this.initBase();
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
