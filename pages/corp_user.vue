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
          label: "企业信息",
          link: "corp_user/corp_info",
          key: "corp_info"
        },
        {
          label: "用户信息",
          link: "corp_user/corp_user",
          key: "corp_user"
        },
        {
          label: "招聘会",
          link: "corp_user/corp_fair",
          key: "corp_fair"
        },
        {
          label: "宣讲会",
          link: "corp_user/corp_campus",
          key: "corp_campus"
        },
        {
          label: "求职信",
          link: "corp_user/corp_letter",
          key: "corp_letter"
        },
         {
          label: "招聘信息",
          link: "corp_user/corp_jobinfo",
          key: "corp_jobinfo"
        }
      ]
    };
  },
  methods: {
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