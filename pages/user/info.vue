<template>
  <div class="data fd2">
    <div class="userbox">
      <div class="fj">
        <span class="fd1">姓名</span>
        <em class="fd1">张恒洋</em>
      </div>
      <div class="fj">
        <span class="fd1">性别</span>
        <em class="fd1">男</em>
      </div>
      <div class="fj">
        <span class="fd1">学历</span>
        <em class="fd1">本科</em>
      </div>
      <div class="fj">
        <span class="fd1">证件名称</span>
        <em class="fd1">身份证</em>
      </div>
      <div class="fj">
        <span class="fd1">证件号码</span>
        <em class="fd1">220122199511157233</em>
      </div>
      <div class="fj">
        <span class="fd1">院校名称</span>
        <em class="fd1">长春理工大学</em>
      </div>
      <div class="fj none">
        <span class="fd1">专业名称</span>
        <em class="fd1">汽车检测与维修</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted() {},
  computed: {}
};
</script>

<style lang="less" scoped>
.userbox{width: 60%;margin: 10% auto;font-size: 1.2em;font-weight: 700;line-height: 2.5em;}
span{width: 25%;text-align-last: justify;border-right: 1px solid #999;text-indent: 1em;padding-right: 3%;}
em{margin-left: 5%}
.fj{border-bottom:1px solid #999;}
.none{border-bottom:none;}
</style>