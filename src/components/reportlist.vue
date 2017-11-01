<template>
  <div id="downReport">
    <div class="row">
      <div class="col s2 offset-s10">
        <br/>
        <router-link :to="{path:'newReport'}"  class="waves-effect waves-light btn">创建报告</router-link>
      </div>
    </div>
    <div class="col s10" id="reportTable">
      <table class="striped bordered">
        <thead>
          <tr>
            <th>序号</th>
            <th>类别</th>
            <th>报告年月</th>
            <th>报告主题</th>
            <th>状态</th>
            <th>创建日期</th>
            <th>提交日期</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>月报</td>
            <td>201710</td>
            <td>宏观经济研究月报2017年第10期</td>
            <td>提交</td>
            <td>20170915</td>
            <td>20170920</td>
            <td></td>
            <td><a id="download11" class="waves-effect waves-light btn">下载</a> <a class="waves-effect waves-light btn">编辑</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>月报</td>
            <td>201710</td>
            <td>宏观经济研究月报2017年第10期</td>
            <td>提交</td>
            <td>20170915</td>
            <td>20170920</td>
            <td></td>
            <td><a id="download12" class="waves-effect waves-light btn">下载</a> <a class="waves-effect waves-light btn">编辑</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>月报</td>
            <td>201710</td>
            <td>宏观经济研究月报2017年第10期</td>
            <td>提交</td>
            <td>20170915</td>
            <td>20170920</td>
            <td></td>
            <td><a id="download13" class="waves-effect waves-light btn" v-on:click="trialDown">下载</a> <a class="waves-effect waves-light btn">编辑</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td>月报</td>
            <td>201710</td>
            <td>宏观经济研究月报2017年第10期</td>
            <td>提交</td>
            <td>20170915</td>
            <td>20170920</td>
            <td></td>
            <td><a id="download14" class="waves-effect waves-light btn">下载</a> <a class="waves-effect waves-light btn">编辑</a></td>
          </tr>
          <template v-for="item in items">
            <tr v-bind:key="item.key">
              <td>{{item.key}}</td>
              <td>{{item.category}}</td>
              <td>{{item.yearandmonth}}</td>
              <td>{{item.theme}}</td>
              <td>{{item.status}}</td>
              <td>{{item.createdate}}</td>
              <td>{{item.submitdate}}</td>
              <td></td>
              <td><a id="download14" class="waves-effect waves-light btn" v-on:click="downloadReportSeq(item.key)">下载</a> <router-link :to="{name: 'existedReport', params: { report_id: item.key}}" class="waves-effect waves-light btn">编辑</router-link></td>
            </tr>
          </template>
        </tbody>
      </table>
      <ul class="pagination">
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li class="active"><a href="#!">1</a></li>
        <li class="waves-effect"><a href="#!">2</a></li>
        <li class="waves-effect"><a href="#!">3</a></li>
        <li class="waves-effect"><a href="#!">4</a></li>
        <li class="waves-effect"><a href="#!">5</a></li>
        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>

    <div class="col s8" id="chartArea">
      <div class="col s12" id="mainarea11">
        <div id="mainarea111"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reportlist',
  data () {
    return {
      items: [
        {
          key: 9,
          yearandmonth: "20171031",
          category: "月报",
          theme: "宏观经济研究月报2017年第12期",
          status: "提交",
          createdate: "20171027",
          submitdate: "20171030",
        }
      ],
      collectedPicCode: [],
      myChart1: null,
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
      },
      picList: [2,5,6,7]
    }
  },
  // watch: {
  //   collectedPicCode: function () {
  //     this.myChart1.clear();
  //   }
  // },
  methods: {
     reloadList : function () {
       let self = this;
       jQuery.ajax({
         type: 'GET',
         url: 'http://localhost:8080/BIMPlus/reportListReload.json',
         dataType: 'jsonp',
         jsonp: 'callback',
         success: function (json) {
           self.items = json;
         },
         error: function () {
          console.warn("重载报告列表失败")
        }
      });
     },
     setChart: function() {
      this.myChart1 = this.$echarts.init(document.getElementById('mainarea111'));
    },
     postReport: function (reportID) {
      console.log("We are downloading report " + reportID);
      // console.log(this.collectedPicCode);
      return jQuery.ajax({
        type: 'POST',
        url: 'http://localhost:8080/BIMPlus/downloadReport.docx',
        data: {reportID: reportID, picsCode: JSON.stringify(this.collectedPicCode)},
        success: function() {
          console.log("Successfully post the images info code to the backend")
          // self.collectedPicCode.splice(0, self.collectedPicCode.length)
        },
        error: function() {
          console.warn("POSTING THE IMAGES CODE TO THE BACKEND FAILED.")
        },
        complete: function() {
          console.log("post report complete function.")
          // self.collectedPicCode.splice(0, self.collectedPicCode.length)
        }
      });
     },
     trialDown: function () {
      // debugger
      // window.open("E:/GIS/workspace/BIMPlus/build/inplaceWebapp/outReport.docx");
      window.open("http://localhost:8080/BIMPlus/outReport.docx");
     },
     downloadReport: function(reportID){
      if(this.picList.length === 4) {
        let self = this
       jQuery.when(this.showreport(this.picList[0]), this.showreport(this.picList[1]), this.showreport(this.picList[2]), this.showreport(this.picList[3]))
       .then(
         function () {
         console.log("The dataURL has been collected.")
         return self.postReport(reportID)
         
         // self.collectedPicCode.splice(0, self.collectedPicCode.length)
       })
       .then(function () {
          window.open("http://localhost:8080/BIMPlus/outReport.docx");
          self.collectedPicCode.splice(0, self.collectedPicCode.length)
          console.log("The downloading of the report succeed!")
       })
       // .done(function () {
       //  console.log("The downloading of the report succeeded.")
       // })
       // .fail(function () {
       //  console.warn("The collection of dataURL fails.")
       // })
      } else {
        console.warn("The length of the picList is wrong(should be 4)")
      }
     },
     downloadReportSeq: function(reportID) {
      if(this.picList.length === 4) {
        let self = this;
        // this.myChart1.clear();
        this.showreport(this.picList[0])
        .then(function () {
          // self.myChart1.clear();
          self.showreport(self.picList[1])
           }
        )
        .then(function () {
          // self.myChart1.clear();
          self.showreport(self.picList[2])
           })
        .then(function () {
          // self.myChart1.clear();
          self.showreport(self.picList[3])
           }) 
        .then(
           function () {
            console.log("The dataURL has been collected.")
            return self.postReport(reportID)
        })
       .then(function () {
          window.open("http://localhost:8080/BIMPlus/outReport.docx");
          self.collectedPicCode.splice(0, self.collectedPicCode.length)
          console.log("The downloading of the report succeed!")
       })
       // .done(function () {
       //  console.log("The downloading of the report succeeded.")
       // })
       // .fail(function () {
       //  console.warn("The collection of dataURL fails.")
       // })
      } else {
        console.warn("The length of the picList is wrong")
      }
     },
     showreport: function(picCode) {
      // this.myChart1.clear();
      // debugger
      this.myChart1.setOption(this.option1, true);
      let self = this; 
    return  jQuery.ajax({
        type: 'GET',
        url: 'http://localhost:8080/BIMPlus/seasonReport.json',
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
      animation: false
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
      self.collectedPicCode.push(self.myChart1.getDataURL());
      console.log("The " + picCode + " th has been collected.")
      // self.myChart1.clear();
    },
    error: function () {
      console.warn("经济季报数据加载失败！")
    }
  });
    }
   },
  mounted () {
    this.$nextTick (function () {
      this.reloadList();
      this.setChart();
  })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #mainarea111 {
    margin-top:5px;
    height: 650px;
    width: 500px;
  }
</style>
