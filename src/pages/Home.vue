<template>
  <div class="home">
    <div>
      <h1 class="home-title">kazuki-tsuruse(Nuoun) is Portfolio</h1>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.home-title {
  width: 800px;
  position: relative;
  padding: 0.5em;
  margin: 5px auto;
  background: #a6d3c8;
  color: white;
}
.home-title:after {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 20px rgb(149, 158, 155);
}  
</style>
