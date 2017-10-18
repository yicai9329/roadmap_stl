<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import layout from './components/layout'

export default {
  name: 'app',
  components: {
    layout
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
    #left-bar{
      
      margin: 20px;
    
    }
    #index-banner{
      height: 100px;
    }
    
    #mainarea{
      height: 900px;
    }
    #mainarea1{
      margin-top:5px;
      height: 850px;
    }
    #mainarea2{
      height: 850px;
    }
    #mainarea3{
      height: 850px;
    }
    .no1{
      background: gray;
      height: 50px;
      margin-bottom: 30px;
    }
    #indList{
      list-style: none;
    }
    .panelll{
      display: none;
      position: absolute;
      z-index: 999;
      height: 100px;
    }
    #indList li:hover {color: #00807C}
    #divList{
      list-style: none;
    }
    nav{
      margin-top:5px;
    }
    #dropdown1 li:hover>ul{
      display: block;
    }
    #dropdown2 li:hover>ul{
      display: block;
    }
    .dropdown3{
      display: none;
    }
</style>
