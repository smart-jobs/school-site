<template>
  <div>
    <div class="fj xwbox">
      <login class="fd1 login" />
      <imgs class="fd1 zon" />
      <journalism class="fd1 journalism" />
    </div>
    <div class="databox fj">
      <calendar class="fd1" />
      <tab class="fd2" />
    </div>
  </div>
</template>

<script>
import Journalism from '~/components/layout/Journalism'
import login from '~/components/utils/login'
import imgs from '~/components/utils/imgs'
import calendar from '~/components/utils/calendar'
import tab from '~/components/layout/tab'
export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    Journalism,
    login,
    imgs,
    calendar,
    tab,
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
