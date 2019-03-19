<template>
  <div id="app">
    <div class="header">
      <router-link to="/">Home</router-link>
      <router-link to="/About">About</router-link>
      <router-link to="/Favorite">Favorite</router-link>
      <router-link to="/Language">Language</router-link>
      <router-link to="/Contact">Contact</router-link>

      <router-view />
    </div>  

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/_color.scss';
.header {
  width: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 10;
}
a {
  height: 7vh;
  line-height: 7vh;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  color: black;
  text-decoration: none;
  width: 150px;
  display: inline-block;
  &:hover {
    background-color: darken(white, 5%);
  }
}
.clear {
  clear: left;
}
</style>
