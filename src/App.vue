<template>
  <div id="app" class="main">
    <router-view/>
  </div>
</template>

<style scoped>
.main{
  background: linear-gradient(135deg,#a5bcf0, #ece798 130%);
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.link{
  text-decoration: none;
}
</style>
