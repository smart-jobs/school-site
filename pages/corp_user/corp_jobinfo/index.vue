<template>
  <div class="right data">
    <ul>
      <el-button class="btnx" type="text" @click="handleadd">新建招聘信息</el-button>
      <br>
      <li class="fj" v-for="(item,index) in items" :key="index">
        <div class="left fj txtbox">
          <img src="/www/img/logo2.png" class="img left">
          <div class="left titbox">
            <a>{{item.title}}</a>
            <p>招聘人数：{{item.count}}</p>
            <p>学历要求：{{item | get('xlreqs.name')}}</p>
            <p>
              <el-button class="btn0 xq" type="text" @click="xq(item)">查看招聘职位</el-button>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination class="pv" @current-change="handleCurrentChange" :current-page.sync="size" :page-size="pagesize"
                   layout="prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers,mapGetters } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('corp_user/corp_jobinfo');
export default {
  name: 'TabItemJobfair',
  data() {
    return {
      size: 0,
      pagesize: 10,
    };
  },
  methods: {
    ...mapActions(['query']),
    handleCurrentChange(val) {
      let corpid = this.userinfo.corpid;
      this.size = val
      this.query({ corpid: corpid, size: val, pagesize: this.pagesize });
    },
    xq (item) {
      let _id = item._id
      this.$router.push('/corp_user/corp_jobinfo/'+_id)
    },
    handleadd() {
      this.$router.push('/corp_user/corp_jobinfo/updata')
    }
  },
  mounted() {
    if (this.userinfo !== null) {
      let corpid = this.userinfo.corpid;
      let size = this.size;
      let pagesize = this.pagesize;
      this.query({ corpid: corpid, size: size, pagesize: pagesize });
    }
  },
  computed: {
    ...mapState(['items','total']),
    ...mapGetters(['userinfo'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
.titbox {
  width: 90%;
}
.btnx{
  padding: 3px 0;
  display: block;
  background: linear-gradient(#0097c4,#117bb0);
  color: #fff;
  text-align: center;
  padding: 8px;
  margin-left: 3%;
}
</style>
