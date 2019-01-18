<template>
  <div class="fd2 data">
    <ul>
      <li class="fj" v-for="(item,index) in items" :key="index" @click="Obtain(index)">
        <div class="fd1 fj txtbox">
          <img src="/img/logo2.jpg" class="img fd1">
          <div class="fd1 titbox">
            <a>{{item.subject}}</a>
            <p>{{item.time}}</p>
            <p>{{item.address}}</p>
            <p>{{item.type}}</p>
          </div>
        </div>
        <span class="fd2 spandata">{{item.date}}</span>
      </li>
    </ul>
    <el-pagination class="pv" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="pagesize"
                   layout="prev, pager, next, jumper" :total="items.total">
    </el-pagination>
  </div>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('jobs/jobfair');
export default {
  name: 'TabItemJobfair',
  data() {
    return {
      page: 1, // 页数
      pagesize: 10, // 条数
    };
  },
  methods: {
    ...mapActions(['query']),
    handleCurrentChange(val) {
      this.page = val
      let page = this.page
      let pageSize = val-1
      this.query({paging:{page:page, pageSize:pageSize}});
    },
    Obtain(index) {
      // li点击取id
      let id = this.items[index].id;
      console.log(id);
    },
  },
  mounted() {
    let page = this.page
    let pageSize = this.pagesize
    this.query({paging:{page:page, pageSize:pageSize}});
  },
  computed: {
    ...mapState(['items']),
  },
  filters: {
    date: function (value) {
      if(value)
        return moment(value).format('YYYY-MM-DD');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
.titbox {
  width: 90%;
}
</style>
