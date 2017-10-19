<template>
<div id="downReport">
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
            <td><a id="download11" class="waves-effect waves-light btn">下载</a> <a class="waves-effect waves-light btn">编辑</a></td>
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
            <td><a id="download11" class="waves-effect waves-light btn">下载</a> <a class="waves-effect waves-light btn">编辑</a></td>
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
            <td><a id="download11" class="waves-effect waves-light btn">下载</a> <a class="waves-effect waves-light btn">编辑</a></td>
          </tr>
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
</template>

<script>
export default {
  name: 'reportlist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
