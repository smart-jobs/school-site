<template>
  <div class="data fd2">
    <el-card class="box-card" v-for="(item,index) in mylist" :key="index">
      <div slot="header" class="fj">
        <span class="fd1">{{item && item.title}}</span>
        <div class="text fd2 fj"><i class="fd1">状态:</i> <em class="fd1" :class="{a1:item.status == '0',a2:item.status == '1',a3:item.status == '2'}">{{item | statusy}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">企业名称:</i> <em class="fd1">{{item && item.corpname}}</em></div>
        <div class="text fd2 fj"><i class="fd1">类别:</i> <em class="fd1">{{item | type1}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">姓名:</i> <em class="fd1">{{userinfo && userinfo.xm}}</em></div>
        <div class="text fd2 fj"><i class="fd1">学历:</i> <em class="fd1">{{userinfo && userinfo.xl}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">性别:</i> <em class="fd1">{{userinfo && userinfo.xb}}</em></div>
        <div class="text fd2 fj"><i class="fd1">毕业院校:</i> <em class="fd1">{{userinfo && userinfo.yxmc}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">身份证号:</i> <em class="fd1">{{userinfo && userinfo.sfzh}}</em></div>
        <div class="text fd2 fj"><i class="fd1">专业名称:</i> <em class="fd1">{{userinfo && userinfo.zymc}}</em></div>
      </div>
      <el-button class="btn0 xq" type="text" @click="xq(item)">查看详情</el-button>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/letter');
const { mapState:userstate, mapActions:useractions} = createNamespacedHelpers('user/info');
export default {
  data() {
    return {
      useinfo: ''
    };
  },
  methods: {
    ...mapActions(['query']),
    ...useractions(['userquery']),
    xq (item) {
      let _id = item._id
      this.$router.push({
        path: '/user/letter/detailed',
        query: {
          _id:_id
        }
      })
    }
  },
  mounted() {
    let userid =  JSON.parse(sessionStorage.getItem("user")).userid
    this.query({userid:userid});
    this.userquery({userid:userid})
  },
  computed: {
    ...mapState(['mylist']),
    ...userstate(['userinfo']),
  },
  filters: {
    type1: function (val) {
      if (val !== null) {
        switch (val.type) {
          case '0':
            return '招聘会'
            break;
        
          case '1':
            return '招聘信息'
            break;
        }
      }
    },
    statusy: function (val) {
      if (val !== null) {
        switch (val.status) {
          case '0':
            return '未接收'
            break;
        
          case '1':
            return '已接收'
            break;

          case '2':
            return '已回复'
            break;
        }
      }
    }
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
  margin: 2em auto
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
.a1{color:#ff0033}
.a2{color: #d1e000}
.a3{color: #11ca00}
.xq{margin-left: 0;}
</style>