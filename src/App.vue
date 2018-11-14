<template>
  <div id="app">
    <myHeader></myHeader>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import header from  './components/header'
import bottomNav from  './components/bottomNav'
export default {
  name: 'App',
  components:{
    myHeader:header,
    bottomNav:bottomNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin:0;
  padding:0;
}
ul{
  list-style: none
}
</style>
