<template>
  <div id="qqq" class=" row">
    <div id="chart" class="col s8">
      <div class="col s12" id="mainarea33">
        <div id="mainarea3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'echarts/lib/chart/map'
import 'echarts/map/js/china.js'
import prefixURL from '../globalUse/globalVar.js'
export default {
  name: 'stlcompany',
  data () {
    return {
      myChart3: null,
      option3: {
        backgroundColor: '#fff',
        geo: {
          show: true,
          map: 'china',
          roam: true
        },
        series: [
        {
          name: '企业一览',
          type: 'scatter',
          mapType: 'china',
          coordinateSystem: 'geo',
          data: [],
          symbolSize: 30
        }
        ]
      }
    }
  },
  methods: {
    setEchart: function () {
      // debugger
      // console.log("The stl compnay has been initialized.");
      this.myChart3 =  this.$echarts.init(document.getElementById('mainarea3'));
    },
    getStlCompany: function () {
      let self = this;
      jQuery.ajax({
        type: 'GET',
        url: prefixURL.devURL + 'stlCompany.json',
        // url: prefixURL.prodURL + 'stlCompany.json',
        dataType: 'jsonp',
        jsonp: 'callback',
        success: function (json) {
          self.myChart3.setOption(self.option3);
          self.myChart3.setOption({
            series: [
            {
              data: (function () {
                var dataArray = [];
                for (let i = 0; i < json.length; i++) {
                  dataArray.push({
                    name: json[i][0],
                    value: json[i][1],
                    label:{
                      normal:{
                        position:'right',
                        color:'#ff2121'
                      },
                    },
                    itemStyle: {
                      normal: {
                        color: '#b25d25'
                      },
                      emphasis: {
                        color: '#ff2121'
                      }
                    }
                  })
                };
                return dataArray;
              })()
            }
            ]
          });
          self.myChart3.setOption({
            series: {
              label: {
                normal: {
                  show: true,
                  formatter: '{b}'
                }
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: function (data) {
                var str = data.value[2];
                var str2 = data.value[4];
                var arr = str2.split('');
            for (var i = 24; i < arr.length; i += 25) //25字换行  
            {
              arr[i] += '</br>';
            }
            str2 = arr.join("");
            str = str + ':' + '</br>' + str2;
            return str;
          },
          position: 'inside',
          textStyle: {
            fontSize: 25
          }
        }
      })
        },
        error: function () {
          console.warn("钢铁企业数据加载失败！")
        }
      });
    } 
  },
  mounted: function () {
    this.setEchart();
    this.getStlCompany();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
