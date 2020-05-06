<template>
  <div>
    <router-view></router-view>
   <FooterGuide></FooterGuide>
  </div>
</template>

<script>

import FooterGuide from 'components/footerGuide/footerGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.d1{
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
