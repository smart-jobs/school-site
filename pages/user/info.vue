<template>
  <div class="data right">
    <el-card class="box-card">
      <div class="item fj">
        <div class="text left fj"><i class="left">姓名:</i> <em class="left">{{userinfo | get('reg.info.xm')}}</em></div>
        <div class="text right fj"><i class="left">性别:</i> <em class="left">{{userinfo | get('reg.info.xb')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">证件名称:</i> <em class="left">身份证</em></div>
        <div class="text right fj"><i class="left">证件号码:</i> <em class="left">{{userinfo | get('reg.info.sfzh')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text right fj"><i class="left">毕业院校:</i> <em class="left">{{userinfo  | get('reg.info.yxmc')}}</em></div>
        <div class="text right fj"><i class="left">专业名称:</i> <em class="left">{{userinfo | get('reg.info.zymc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">学历:</i> <em class="left">{{userinfo | get('reg.info.xl')}}</em></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
    };
  },
  methods: {
    
  },
  mounted() {
  },
  computed: {
    ...mapGetters(['userinfo'])
  }
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
  width: 50%;
}

.item {
  margin-bottom: 18px;
}
i{
  width: 20%;
  display: block;
  text-align-last: justify;
}
em{
  display: block;
  margin-left: 10%
}
.box-card {
  width: 80%;
  margin-bottom: 2em;
}
.btn{
  padding: 3px 8px;
}
.btn0{
  padding: 3px 0;
  margin-top: 2em;
  margin-left: 10%;
  display: block;
  text-align: left
}
</style>