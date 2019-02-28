<template>
  <div class="data fd2">
    <div class="userbox">
      <div class="fj">
        <span class="fd1">姓名</span>
        <em class="fd1">{{useinfo.name}}</em>
      </div>
      <div class="fj">
        <span class="fd1">分站信息</span>
        <em class="fd1">{{useinfo.unit}}</em>
      </div>
      <div class="fj none">
        <span class="fd1">公司名称</span>
        <em class="fd1">{{useinfo.corpname}}</em>
      </div>
    </div>
  </div>
</template>

<script>
const { mapState:log } = createNamespacedHelpers('login');
export default {
  data() {
    return {
      useinfo:''
    };
  },
  methods: {
    
  },
  mounted() {
   
  },
  computed: {
    ...log(['useinfo'])
  }
};
</script>

<style lang="less" scoped>
.userbox{width: 60%;margin: 10% auto;font-size: 1.2em;font-weight: 700;line-height: 2.5em;}
span{width: 25%;text-align-last: justify;border-right: 1px solid #999;text-indent: 1em;padding-right: 3%;}
em{margin-left: 5%}
.fj{border-bottom:1px solid #999;}
.none{border-bottom:none;}
</style>