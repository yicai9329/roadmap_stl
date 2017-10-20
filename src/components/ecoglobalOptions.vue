<template>
<div id="qqq2" class=" row">
  <div class="col s3 white z-depth-5" id="left-bar">
    <form id="ecoglobal" class="col s12 white z-depth-5">
        <input type="radio" name="type" class="filled-in" id="stlworld" value="0" /><label for="stlworld">全球钢铁产品产能</label>
        <br/>
        <input type="radio" name="type" class="filled-in" id="stlchina" value="1" /><label for="stlchina">中国钢铁产品产能</label>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'ecoglobal',
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
