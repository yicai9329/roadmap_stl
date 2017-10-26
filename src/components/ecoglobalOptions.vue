<template>
<div id="qqq2" class=" row">
  <div class="col s3 white z-depth-5" id="left-bar">
    <form id="ecoglobal" class="col s12 white z-depth-5">
        <input type="radio" name="type" class="filled-in" id="stlworld" value="0" v-model="mapType"/><label for="stlworld">全球钢铁产品产能</label>
        <br/>
        <input type="radio" name="type" class="filled-in" id="stlchina" value="1" v-model="mapType"/><label for="stlchina">中国钢铁产品产能</label>
    </form>
    </div>
    <div id="chart" class="col s8">
      <div class="col s12" id="mainarea22">
        <div id="mainarea2"></div>
      </div>
    
  </div>
</div>
</template>

<script>
import 'echarts/lib/chart/map'
import 'echarts/map/js/china.js'
import 'echarts/map/js/world.js'
export default {
  name: 'ecoglobal',
  data () {
    return {
      locationsInfo: [],
      mapType: 10,
      myChart2: null,
      option2: {
        baseOption: {
          timeline: {
            data: []
          },
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
              }
            }
          },
          backgroundColor: '#fff',
          visualMap: {
            min: 0,
            max: 30000,
            left: 'right',
            text: ['高', '低'],
            calculable: true,
            color: ['#c05050', '#e5cf0d', '#5ab1ef']
          },
          geo: {
            show: true,
            map: 'world',
            roam: true
          },
          series: [{
            name: 'GDP',
            type: 'map',
            roam: true,
            geoIndex: 0,
            label: {
              normal: {
                show: false
              }
            },
            data: []
          }]
        }
      },
      option2china: {
        baseOption: {
          timeline: {
            data: []
          },
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
              }
            }
          },
          backgroundColor: '#fff',
          visualMap: {
            min: 0,
            max: 30000,
            left: 'right',
            text: ['高', '低'],
            calculable: true,
            color: ['#c05050', '#e5cf0d', '#5ab1ef']
          },
          geo: {
            show: true,
            map: 'china',
            roam: true
          },
          series: [{
            name: 'GDP',
            type: 'map',
            roam: true,
            geoIndex: 0,
            label: {
              normal: {
                show: false
              }
            },
            data: []
          }]
        }
      }
    }
  },
  mounted: function () {
    this.setEchart();
  },
  watch: {
    mapType: function (newType,oldType) {
      this.getStlObjcets(newType);
    }
  },
  methods: {
    setEchart: function() {
      this.myChart2 = this.$echarts.init(document.getElementById('mainarea2'));
      this.myChart2.on('georoam', function () {
        this.myChart2.setOption({
          baseOption: {
            series: (function () {
              var ser = [];
              for (let i = 0; i < this.locationsInfo.length; i++) {
                ser.push({
                  name: this.locationsInfo[i].divName,
                  type: 'pie',
                  radius: 30,
                  center: this.myChart2.convertToPixel('geo', [this.locationsInfo[i].longitude, this.locationsInfo[i].latitude]),
                })
              }
              return ser;
            })()
          }
        });
      }
      )
    },
    getStlObjcets: function(mapType) {
      var mapName;
      if (mapType == 0) {
        mapName = 'world';
      } else if (mapType == 1) {
        mapName = 'china';
      }
      var self = this;
      jQuery.ajax({
        type: 'GET',
        url: 'http://localhost:8080/BIMPlus/stlObjcets.json',
        // data: jQuery("#ecoglobal").serialize(),
        data: {type: mapType},
        dataType: 'jsonp',
        jsonp: 'callback',
        success: function (json) {
          self.locationsInfo = json.locations;
          if (json.legends) {
            self.myChart2.clear();
            if (mapName == 'world') {
              self.myChart2.setOption(self.option2);
            } else {
              self.myChart2.setOption(self.option2china);
            }
            self.myChart2.setOption({
              baseOption: {
                timeline: {
                  axisType: 'category',
                  autoPlay: true,
                  playInterval: 1000,
                  data: json.timeline,
                  label: {
                    formatter: function (s) {
                      return (s);
                    }
                  }
                },
                legend: {
                  data: json.legends
                },
                series: (function () {
                  var ser = [];
                  ser.push({
                    name: 'GDP',
                    type: 'map',
                    mapType: mapName,
                    roam: true,
                    geoIndex: 0,
                    label: {
                      normal: {
                        show: false
                      }
                    }
                  });
                  for (let i = 0; i < json.locations.length; i++) {
                    ser.push({
                      name: json.locations[i].divName,
                      type: 'pie',
                      radius: 30,
                      center: self.myChart2.convertToPixel('geo', [json.locations[i].longitude, json.locations[i].latitude]),
                    })
                  }
                  return ser;
                })()
              },
              options: json.data
            });
          } else {

          }
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
