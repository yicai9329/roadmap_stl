<template>
<div id="downReport">
    <div class="row">
      <div class="col s2 offset-s10">
        <br/>
        <router-link :to="{path:'newReport'}"  class="waves-effect waves-light btn">创建报告</router-link>
      </div>
    </div>
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
            <td><a id="download13" class="waves-effect waves-light btn">下载</a> <a class="waves-effect waves-light btn">编辑</a></td>
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
              <td><a id="download14" class="waves-effect waves-light btn">下载</a> <router-link :to="{name: 'existedReport', params: { report_id: item.key}}" class="waves-effect waves-light btn">编辑</router-link></td>
            </tr>
          </template>
        </tbody>
      </table>
    <div id=""
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
      ]
    }
  },
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
     }
   },
  mounted () {
    this.$nextTick (function () {
      this.reloadList();
  })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
