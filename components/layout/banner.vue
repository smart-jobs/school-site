<template>
  <div>
    <div class="zj_banner_box">
      <img :src="bj1" class="zj_banner_bj">
      <img :src="bj2" class="zj_banner_bottom">
    </div>
    <div class="zj_banner_logobox">
      <img :src="logo" class="zj_banner_logo">
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
<style lang="less" scoped>
@import '~@/assets/total.less';
</style>
