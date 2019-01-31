<template>
  <div class="data fd2">
    <el-button class="btn0" type="text" @click="btn0">新建模板</el-button>
    <el-card class="box-card" v-for="(item,index) in list" :key="index">
      <div slot="header" class="fj">
        <span class="fd1">{{item && item.title}}</span>
        <el-button class="fd2 btn" type="text" @click="btn2(item)">删除</el-button>
        <el-button class="fd2 btn" type="text" @click="btn1(item)">更改</el-button>
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
      <pre class="item">
        {{item && item.content}}
      </pre>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {
          title:'模板标题',
          content:'撒咖啡就爱看是否会卡机是分开了飞机到了付款就会打瞌睡加肥加大SVN家里快单进口量的反馈进店率凝聚力对抗看见了第三个看了冀东水泥撒大声地了；安抚撒咖啡就爱看是否会卡机是分开了飞机到了付款就会打瞌睡加肥加大SVN家里快单进口量的反馈进店率凝聚力对抗看见了第三个看了冀东水泥撒大声地了；安抚',
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
          _id:'546548asd6as421sd8w6qf1'
        },
        {
          title:'模板标题',
          content:'撒咖啡就爱看是否会卡机是分开了飞机到了付款就会打瞌睡加肥加大SVN家里快单进口量的反馈进店率凝聚力对抗看见了第三个看了冀东水泥撒大声地了；安抚撒咖啡就爱看是否会卡机是分开了飞机到了付款就会打瞌睡加肥加大SVN家里快单进口量的反馈进店率凝聚力对抗看见了第三个看了冀东水泥撒大声地了；安抚',
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
          _id:'546548asd6as421sd8w6qf1'
        }
      ]
    };
  },
  methods: {
    btn0 () {
      location.href = 'user/resume/establish'
    },
    btn1 (item) {
      let _id = item._id
      this.$router.push({
        path: '/user/resume/establish',
        query: {
          _id:_id
        }
      })
    },
    btn2 (item) {
      let _id = item._id
      console.log('删除传参'+_id)
    }
  },
  mounted() {},
  computed: {}
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
</style>