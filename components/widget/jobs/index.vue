<template>
  <div class="box">
    <div class="header fj">
      <div class="btnbox fd1">
        <div class="btn" v-for="(item,index) in job" :key="index" :class="{btnx:index == key}" @mouseenter="btnshow(item)">{{item.label}}</div>
      </div>
    </div>
    <campus v-show="link == 'campus'"/>
    <jobfair v-show="link == 'jobfair'"/>
    <jobinfo v-show="link == 'jobinfo'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import campus from './campus';
import jobfair from './jobfair';
import jobinfo from './jobinfo';
export default {
  name: 'home',
  data() {
    return {
      key: 0,
      link: 'jobinfo'
    }
  },
  methods: {
    btnshow(item) {
      this.key = item.key
      this.link = item.link
    }
  },
  mounted() {
  },
  computed: {
    ...mapState(['job'])
  },
  components: {
    campus,
    jobfair,
    jobinfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 841px;
  margin-left: 17px;
  height: 370px;
  border-top: 5px solid #60b0f4;
  border-bottom: 5px solid #60b0f4;
}
.header {
  width: 100%;
}
.btnbox {
  width: 60%;
  border-left: 1px solid #ddd;
  display: flex;
}
.btn {
  width: 25%;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 2.5em;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.btnx {
  border-bottom: 1px solid #fff;
  color: #60b0f4;
}
</style>
