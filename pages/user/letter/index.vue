<template>
  <div class="data fd2">
    <el-card class="box-card" v-for="(item,index) in list" :key="index">
      <div slot="header" class="fj">
        <span class="fd1">{{item && item.title}}</span>
        <div class="text fd2 fj"><i class="fd1">状态:</i> <em class="fd1" :class="{a1:item.status == 0,a2:item.status == 1,a2:item.status == 2}">{{item | status}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">企业名称:</i> <em class="fd1">{{item && item.corpname}}</em></div>
        <div class="text fd2 fj"><i class="fd1">类别:</i> <em class="fd1">{{item | type1}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">姓名:</i> <em class="fd1">{{item | get('info.xm')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">学历:</i> <em class="fd1">{{item | get('info.xl')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">性别:</i> <em class="fd1">{{item | get('info.xb')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">毕业院校:</i> <em class="fd1">{{item | get('info.yxmc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">出生日期:</i> <em class="fd1">{{item | get('info.csrq')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">专业名称:</i> <em class="fd1">{{item | get('info.zymc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">联系方式:</i> <em class="fd1">{{item | get('contact.mobile')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">电子邮件:</i> <em class="fd1">{{item | get('contact.email')}}</em></div>
      </div>
      <div class="item" v-show="item.reqly !== ''">
        <div class="text fj"><i class="fd1">回复:</i> <em class="fd1">{{item && item.reqly}}</em></div>
      </div>
      <el-button class="btn0 xq" type="text" @click="xq(item)">查看详情</el-button>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/letter');
export default {
  data() {
    return {
      list:[
        {
          title:'WEB前端工程师',
          content:'撒咖啡就爱看是否会卡机是分开了飞机到了付款就会打瞌睡加肥加大SVN家里快单进口量的反馈进店率凝聚力对抗看见了第三个看了冀东水泥撒大声地了；安抚撒咖啡就爱看是否会卡机是分开了飞机到了付款就会打瞌睡加肥加大SVN家里快单进口量的反馈进店率凝聚力对抗看见了第三个看了冀东水泥撒大声地了；安抚',
          reqly: '',
          status: 0,
          corpname: '公司名称',
          type: 0,
          info:{
            xm:'张恒洋',
            xb:'男',
            csrq:'1995-11-15',
            xl:'本科',
            yxmc:'吉林农业大学',
            zymc:'计算机技术与科学'
          },
          contact:{
            mobile:'15948346032',
            email:'1042813942@qq.com'
          },
        }
      ]
    };
  },
  methods: {
    ...mapActions(['query']),
    xq (item) {
      console.log(item._id)
    }
  },
  mounted() {
    let userid =  JSON.parse(sessionStorage.getItem("user")).userid
    this.query({userid:userid});
    console.log(this.mylist)
  },
  computed: {
    ...mapState(['mylist']),
  },
  filters: {
    type1: function (val) {
      if (val !== null) {
        switch (val.type) {
          case 0:
            return '招聘会'
            break;
        
          case 1:
            return '招聘信息'
            break;
        }
      }
    },
    status: function (val) {
      if (val !== null) {
        switch (val.status) {
          case 0:
            return '未接收'
            break;
        
          case 1:
            return '已接收'
            break;

          case 2:
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