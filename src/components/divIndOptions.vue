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
</div>
</template>

<script>
export default {
  name: 'divind',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
