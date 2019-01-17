<template>
  <div class="fd2 data">
    <ul>
      <li class="fj" v-for="(item,index) in list" :key="index">
        <div class="fd1 fj txtbox">
          <img :src="item.imgurl" class="img fd1">
          <div class="fd1 titbox">
            <a @click="Obtain(index)">{{item.title}}</a>
            <p>主办方：{{item.txt1}}</p>
            <p>{{item.txt2}}</p>
            <p>{{item.txt3}}</p>
          </div>
        </div>
        <span class="fd2 spandata">{{item.data}}</span>
      </li>
    </ul>
    <el-pagination class="pv" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="pagesize"
                   layout="prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      page: 1, // 页数
      pagesize: 10, // 条数
      total: 100, // 总数
      list: [
        // 数据
        {
          title: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '1',
          imgurl: '/img/logox.jpg',
          txt1: '暨南大学',
          txt2: '金陵文化广场',
          txt3:'参与企业100家'
        },
        {
          title: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '2',
          imgurl: '/img/logox.jpg',
          txt1: '暨南大学',
          txt2: '金陵文化广场',
          txt3:'参与企业100家'
        },
        {
          title: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '3',
          imgurl: '/img/logox.jpg',
          txt1: '暨南大学',
          txt2: '金陵文化广场',
          txt3:'参与企业100家'
        },
        {
          title: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '4',
          imgurl: '/img/logox.jpg',
          txt1: '暨南大学',
          txt2: '金陵文化广场',
          txt3:'参与企业100家'
        },
      ],
    };
  },
  methods: {
    btn(index) {
    },
    handleCurrentChange(val) {
      console.log('当前是' + val + '页');
    },
    Obtain(index) {
      // li点击取id
      let id = this.list[index].id;
      console.log(id);
    },
  },
  mounted() {
    
  },
}; // l轮播图宽度为424
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
.titbox {
  width: 90%;
}
</style>
