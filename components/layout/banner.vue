<template>
  <div>
    <div class="box">
      <img :src="bj1" class="bj">
      <img :src="bj2" class="bottom">
    </div>
    <div class="logobox">
      <img :src="logo" class="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      bj1: '/img/1477572201-3251.jpg',
      bj2: '/img/bg-shade.png',
      logo: '/img/logo.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  min-width: 1200px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.bj {
  width: 100%;
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200px;
  width: 100%;
}
.logobox {
  width: 1200px;
  position: relative;
  margin: 100px auto;
}
</style>
