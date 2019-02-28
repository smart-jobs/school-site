<template>
  <div class="fd2 data">
    <ul>
      <li class="fj" v-for="(item,index) in items" :key="index">
        <div class="fd1 fj txtbox">
          <img src="/img/logo2.jpg" class="img fd1">
          <div class="fd1 titbox">
            <a @click="Obtain(item)">{{item.subject}}</a>
            <p>举办时间：{{item.date}} {{item.time}}</p>
            <p>分站信息：{{item.unit}}</p>
            <p>
              <el-button class="btn0 xq" type="text" @click="xq(item)">查看招聘职位</el-button>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('user_corp/corp_fair');
export default {
  name: 'TabItemJobfair',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['query']),
    Obtain(item) {
      let _id = item._id
      this.$router.push('/jobs/jobfair/'+_id)
    },
    xq (item) {
      let _id = item._id
      this.$router.push('/user_corp/corp_fair/'+_id)
    }
  },
  mounted() {
    let useinfo = JSON.parse(sessionStorage.getItem("user"))
    if (useinfo !== null) {
      let corpid = useinfo.corpid
      this.query({corpid:corpid});
    }
  },
  computed: {
    ...mapState(['items'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
.titbox {
  width: 90%;
}
.btn0{
  padding: 3px 0;
  margin-top: 1em;
  margin-left: 6%;
  display: block;
  text-align: left
}
</style>
