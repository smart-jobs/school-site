<template>
  <div class="data fd2">
    <el-card class="box-card">
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">姓名:</i>
          <em class="fd1">{{userinfo && userinfo.name}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">分站信息:</i>
          <em class="fd1">{{userinfo && userinfo.unit}}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">公司名称:</i>
          <em class="fd1">{{userinfo && userinfo.corpname}}</em>
        </div>
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
.box-card {
  width: 80%;
  margin-left: 5%;
}
.text {
  font-size: 14px;
  width: 50%;
}
.item {
  margin-bottom: 18px;
}
i {
  width: 20%;
  display: block;
  text-align-last: justify;
}
em {
  display: block;
  margin-left: 10%;
}
</style>