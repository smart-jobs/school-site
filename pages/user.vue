<template>
  <div class="boxone2">
    <div class="boxone fj">
      <!--二级导航菜单-->
      <sub-nav :data="columns" :activated="column"/>
      <!--页面内容-->
      <nuxt-child/>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import SubNav from '@/components/layout/subnav';
export default {
  data() {
    return {
      columns: [
        {
          label: "个人信息",
          link: "user/info",
          key: "info"
        },
        {
          label: "简历模板",
          link: "user/resume",
          key: "resume"
        },
        {
          label: "求职信",
          link: "user/letter",
          key: "letter"
        },
        {
          label: "入场券",
          link: "user/ticket",
          key: "ticket"
        }
      ]
    };
  },
  methods: {
    btn (item) {
      this.num = item.key
      location.href = item.link
    }
  },
  mounted() {},
  computed: {
    ...mapState(['column']),
  },
  components: {
    SubNav,
  }
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