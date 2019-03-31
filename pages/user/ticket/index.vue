<template>
  <div class="data right">
    <el-card class="box-card" v-for="(item,index) in ticket_list" :key="index">
      <div slot="header" class="fj">
        <span class="left">招聘会入场券</span>
        <div class="text right fj"><i class="left">状态:</i> <em class="left" :class="{a1:item.verify.status == '1',a3:item.verify.status == '0'}">{{item.verify | type1}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">名称:</i> <em class="left">{{item && item.subject}}</em></div>
        <div class="text right fj"><i class="left">门票:</i> <em class="left">{{item.type | statusy}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">姓名:</i> <em class="left">{{item | get('user.name') }}</em></div>
        <div class="text right fj"><i class="left">学校:</i> <em class="left">{{item.origin | origin }}</em></div>
      </div>
      <info :item="item"/>
    </el-card>
  </div>
</template>

<script>
import info from './info'
import { createNamespacedHelpers,mapGetters } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('user/ticket');
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['query']),
  },
  mounted() {
    let userid =  this.userinfo.userid
    this.query({ userid: userid })
  },
  computed: {
    ...mapState(['ticket_list']),
    ...mapGetters(['userinfo'])
  },
  filters: {
    type1: function (val) {
      if (val !== null) {
        switch (val.status) {
          case '0':
            return '未使用'
            break;
        
          case '1':
            return '已使用('+val.time+')'
            break;
        }
      }
    },
    statusy: function (val) {
      if (val !== null) {
        switch (val) {
          case '0':
            return '普通门票'
            break;
        
          case '1':
            return '临时门票'
            break;
        }
      }
    },
    origin: function (val) {
      switch (val) {
        case '0':
          return '本校学生'
          break;
      
        case '1':
          return '外校学生'
          break;
      }
    }
  },
  components: {
    info
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
  margin-left: 10%;
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
.a1{color:#ff0033}
.a2{color: #d1e000}
.a3{color: #11ca00}
.xq{margin-left: 0;}
</style>