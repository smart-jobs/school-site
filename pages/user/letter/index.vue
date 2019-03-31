<template>
  <div class="data right">
    <el-card class="box-card" v-for="(item,index) in mylist" :key="index">
      <div slot="header" class="fj">
        <span class="left">{{item && item.title}}</span>
        <div class="text right fj"><i class="left">状态:</i> <em class="left" :class="{a1:item.status == '0',a2:item.status == '1',a3:item.status == '2'}">{{item | statusy}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">企业名称:</i> <em class="left">{{item && item.corpname}}</em></div>
        <div class="text right fj"><i class="left">类别:</i> <em class="left">{{item | type1}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">姓名:</i> <em class="left">{{userinfo | get('reg.info.xm')}}</em></div>
        <div class="text right fj"><i class="left">学历:</i> <em class="left">{{userinfo | get('reg.info.xl')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">性别:</i> <em class="left">{{userinfo  | get('reg.info.xb')}}</em></div>
        <div class="text right fj"><i class="left">毕业院校:</i> <em class="left">{{userinfo  | get('reg.info.yxmc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">身份证号:</i> <em class="left">{{userinfo | get('reg.info.sfzh')}}</em></div>
        <div class="text right fj"><i class="left">专业名称:</i> <em class="left">{{userinfo | get('reg.info.zymc')}}</em></div>
      </div>
      <el-button class="btn0 xq" type="text" @click="xq(item)">查看详情</el-button>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers,mapGetters } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/letter');
export default {
  data() {
    return {
      useinfo: ''
    };
  },
  methods: {
    ...mapActions(['query']),
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
    if (this.userinfo !== null) {
      let userid =  this.userinfo.userid
      this.query({userid:userid});
    }
  },
  computed: {
    ...mapState(['mylist']),
    ...mapGetters(['userinfo'])
  },
  filters: {
    type1: function (val) {
      if (val !== null) {
        switch (val.type) {
          case '0':
            return '招聘信息'
            break;
        
          case '1':
            return '招聘会'
            break;
        }
      }
    },
    statusy: function (val) {
      if (val !== null) {
        switch (val.status) {
          case '0':
            return '未处理'
            break;
        
          case '1':
            return '已处理'
            break;

          case '2':
            return '已拒绝'
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
.a3{color:#ff0033}
.a1{color: #d1e000}
.a2{color: #11ca00}
.xq{margin-left: 0;}
</style>