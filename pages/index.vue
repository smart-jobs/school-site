<template>
  <div>
    <banner />
    <navx />
    <div class="fj xwbox">
      <login class="fd1 login" />
      <imgs class="fd1 zon" />
      <journalism class="fd1 journalism" />
    </div>
    <div class="databox fj">
      <calendar class="fd1" />
      <tab class="fd2" />
    </div>
    <feet />
  </div>
</template>

<script>
import banner from '~/components/layout/banner'
import navx from '~/components/layout/navx'
import Journalism from '~/components/layout/Journalism'
import login from '~/components/function/login'
import imgs from '~/components/function/imgs'
import calendar from '~/components/function/calendar'
import tab from '~/components/layout/tab'
import feet from '~/components/layout/feet'
export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    banner,
    navx,
    Journalism,
    login,
    imgs,
    calendar,
    tab,
    feet
  }
} // l轮播图宽度为424
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xwbox {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;
}
.databox {
  width: 1200px;
  margin: 4rem auto;
  position: relative;
}
.zon {
  margin: 0 17px;
}
.journalism,
.login {
  height: 330px;
}
</style>
