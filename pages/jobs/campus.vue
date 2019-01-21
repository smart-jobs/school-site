<template>
  <div class="fd2 data">
    <ul>
      <li class="fj" v-for="(item,index) in items" :key="index" @click="Obtain(index)">
        <div class="fd1 fj txtbox">
          <img src="/img/logo1.jpg" class="img fd1">
          <div class="fd1 titbox">
            <a>{{item.subject}}</a>
            <p>{{item.corpname}}</p>
            <p>{{item.address}}</p>
          </div>
          <div class="fd1 titbox">
            <br>
            <p>{{item.enterprise}}</p>
            <p>{{item.jobs[0].requirement}}</p>
          </div>
        </div>
        <span class="fd2 spandata">{{item.date}}</span>
      </li>
    </ul>
    <el-pagination class="pv" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="size"
                   layout="prev, pager, next, jumper" :total="items.total">
    </el-pagination>
  </div>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState } = createNamespacedHelpers('jobs/campus');
export default {
  name: 'pagecampus',
  data() {
    return {
      page: 1, // 页数
      size: 10, // 条数
    };
  },
  methods: {
   ...mapActions(['query']),
    handleCurrentChange(val) {
      this.page = val
      this.query({ paging: { page: val-1, size: this.size } });
    },
    Obtain(index) {
      // li点击取id
      let id = this.items[index].id;
      console.log(id);
    },
  },
  mounted() {
    this.query({ paging: { page: this.page, size: this.size } });
  },
  computed: {
    ...mapState(['items'])
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
  width: 40%;
}
</style>
