<template>
  <div>
    <nav>
      <div class="nav-wrapper grey darken-3 z-depth-1">
        <ul class="hide-on-med-and-down">
          <li><a href="#" id="tes" class=" white-text"><i class="large material-icons right">airplay</i></a></li>
          <li><a href="#" class="dropdown-button white-text" data-activates="dropdown1">宏观经济地图<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a class="dropdown-button white-text" href="#!" data-activates="dropdown2">钢铁行业地图<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a class="dropdown-button white-text" href="#!">报告下载</a></li>
        </ul>
      </div>
    </nav>
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">宏观经济发展</a>
        <ul class="dropdown3">
          <li><a>关键指标</a></li>
          <li><a href="#!">经济季报</a></li>
          <li><a href="#!">全球经济</a></li>
        </ul>
      </li>
      <li class="divider"></li>
      <li><a href="#!">产业发展</a>
        <ul class="dropdown3">
          <li><a>三产整体情况</a></li>
          <li><a href="#!">区域产业发展趋势分析</a></li>
          <li><a href="#!">区域间产业流动情况分析</a></li>
        </ul>
      </li>
    </ul>
    <ul id="dropdown2" class="dropdown-content">
      <li><a>国内外钢铁行业现状</a>
        <ul class="dropdown3">
          <li><a>钢铁行业投资热度</a></li>
          <li><a href="#!">钢厂竞争力排名</a></li>
          <li><a href="#!">粗钢供需情况</a></li>
          <li><a href="#!">钢材进出口</a></li>
        </ul>
      </li>
      <li class="divider"></li>
      <li><a href="#!">企业信息</a>
        <ul class="dropdown3">
          <li><a href="#!">钢厂基本信息显示与查询</a></li>
          <li><a href="#!">技术经济+系统优化+总图</a></li>
          <li><a href="#!">钢厂竞争力排名</a></li>
          <li><a href="#!">钢厂信息对比</a></li>
          <li><a href="#!">钢厂总图信息</a></li>
          <li><a href="#!">物料平衡图</a></li>
          <li><a href="#!">能源平衡表</a></li>
          <li><a href="#!">拟建项目</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: 'bim_map'
    }
  },
  ready () {
  
    // Code that will run only after the
    // entire view has been rendered
    $(".dropdown-button").dropdown({
      belowOrigin: true,
      hover: false,
      constrainWidth: false,
      gutter: 0,
    });
  
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
