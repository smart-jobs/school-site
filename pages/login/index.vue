<template>
  <div class="boxone2">
    <div class="boxone fj">
      <!--二级导航菜单-->
      <div class="tab">
        <div class="tabs" v-for="(item,index) in menu" :key="index" :class="{ a1: item.key == num }">
          <div class="tabx" @click="btn(item)">{{item.label}}</div>
        </div>
      </div>
      <!--页面内容-->
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: '0',
      menu: [
        {
          label: "企业注册",
          link: "login/qy",
          key: "0"
        },
        {
          label: "学生注册",
          link: "login/qy",
          key: "1"
        }
      ]
    };
  },
  methods: {
    btn (item) {
      this.num = item.key
      console.log(item)
    }
  },
  mounted() {},
  computed: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/secondary.less";
.tab {
  width: 20%;
  background:#ffffff;
  line-height: 2.5em;
  color: #000;
}
.tab .tabx {
  border-bottom: 1px solid #e9e9e9;
  text-indent: 1em;
  cursor: pointer;
  width: 90%;
  margin: 0 auto;
}
.a1 {
  color: #1e649f;
  border-left: 3px solid #1e649f;
}
</style>