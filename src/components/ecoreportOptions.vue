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
            <input type="radio" name="graphCode" value="1" id="table1" /><label for="table1">全球主要经济体GDP增速</label>
            <input type="radio" name="graphCode" value="3" id="table2" /><label for="table2">全球主要经济体贸易出口增速</label>
          </div>
          <div id="worandmon" v-else-if="disOption === 'worandmon'">
            <input type="radio" name="graphCode" value="2" id="table3" /><label for="table3">全球主要经济体PMI指数</label>
            <input type="radio" name="graphCode" value="4" id="table4" /><label for="table4">全球主要经济体贸易帐</label>
            <input type="radio" name="graphCode" value="5" id="table5" /><label for="table5">全球主要经济体汇率</label>
          </div>
          <div id="couandsea" v-else-if="disOption ==='couandsea'">
            <input type="radio" name="graphCode" value="6" id="table6" /><label for="table6">国内GDP季度增速</label>
          </div>
          <div id="couandmon" v-else-if="disOption === 'couandmon'">
            <input type="radio" name="graphCode" value="7" id="table7" /><label for="table7">国内PPI和CPI指数</label>
            <input type="radio" name="graphCode" value="8" id="table8" /><label for="table8">国内PMI指数</label>
            <input type="radio" name="graphCode" value="9" id="table9" /><label for="table9">国内社会消费品零售总额</label>
            <input type="radio" name="graphCode" value="10" id="table10" /><label for="table10">国内固定资产投资</label>
            <input type="radio" name="graphCode" value="11" id="table11" /><label for="table11">房地产投资增速与房价指数</label>
            <input type="radio" name="graphCode" value="12" id="table12" /><label for="table12">国内进出口额</label>
            <input type="radio" name="graphCode" value="13" id="table13" /><label for="table13">国内财政收入增速</label>
            <input type="radio" name="graphCode" value="14" id="table14" /><label for="table14">国内地方债发行成本</label>
            <input type="radio" name="graphCode" value="15" id="table15" /><label for="table15">国内货币投放量</label>
            <input type="radio" name="graphCode" value="16" id="table16" /><label for="table16">国内市场利率</label>
            <input type="radio" name="graphCode" value="17" id="table17" /><label for="table17">大宗商品价格指数</label>
            <input type="radio" name="graphCode" value="18" id="table18" /><label for="table18">制造业分行业工业增加值增速</label>
            <input type="radio" name="graphCode" value="19" id="table19" /><label for="table19">制造业分行业固定资产投资增速</label>
          </div>
          <div id="errorOption" v-else>
            I should not appear, you made a wrong choice.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ecoreportOptions',
  data () {
    return {
      disOption1: 'worand',
      disOption2: 'sea'
    }
  },
  computed: {
    disOption: function () {
      return this.disOption1 + this.disOption2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
