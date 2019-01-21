<template>
  <div class="fd2 data">
    <ul>
      <li class="fj" v-for="(item,index) in items" :key="index" @click="Obtain(index)">
        <div class="fd1 fj txtbox">
          <img src="/img/logo2.jpg" class="img fd1">
          <div class="fd1 titbox">
            <a>{{item.subject}}</a>
            <p>举办时间：{{item.date}} {{item.time}}</p>
            <p>举办地址：{{item.address}}</p>
            <p>分站信息：{{item.unit}}</p>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination class="pv" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="size" layout="prev, pager, next, jumper"
                   :total="total">
    </el-pagination>
  </div>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('jobs/jobfair');
export default {
  name: 'TabItemJobfair',
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
      this.query({ paging: { page: val, size: this.size } });
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
    ...mapState(['items','total']),
  },
  filters: {
    date: function(value) {
      if (value) return moment(value).format('YYYY-MM-DD');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
.titbox {
  width: 90%;
}
</style>
