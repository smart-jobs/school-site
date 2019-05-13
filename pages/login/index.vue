<template>
  <div class="boxone2">
    <div class="boxone fj">
      <!--二级导航菜单-->
      <sub-nav :data="columns || []" activated="0" />
      <!--页面内容-->
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
import SubNav from '@/components/layout/subnav';

export default {
  components: {
    SubNav,
  },
  data() {
    return {
      columns: [
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
};
</script>

<style lang="less" scoped>
@import '~@/assets/secondary.less';
</style>
