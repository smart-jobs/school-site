<template>
  <div class="data right">
    <el-button class="left btnx" type="text" @click="handleAdd">添加职位</el-button>
    <br>
    <el-card class="box-card" v-for="(item, index) in current && current.jobs" :key="index">
      <div slot="header" class="fj">
        <span class="left">{{ current && current.corpname }}</span>
        <el-button class="right btn" type="text" v-if="current.status == 1" @click="handleDelete(item)">删除</el-button>
        <el-button class="right btn" type="text" v-if="current.status == 1" @click="handleUpdate(index)">更改</el-button>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">招聘会:</i> <em class="left">{{ corp_info && corp_info.subject }}</em>
        </div>
        <div class="text right fj">
          <i class="left">分站信息:</i> <em class="left">{{ corp_info && corp_info.unit }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">招聘职位:</i> <em class="left">{{ item && item.name }}</em>
        </div>
        <div class="text right fj">
          <i class="left">招聘人数:</i> <em class="left">{{ item && item.count }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">应聘要求:</i> <em class="left">{{ item && item.requirement }}</em>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('corp_user/corp_fair');
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['fetch', 'delete','details']),
    async handleDelete(item) {
      let corpid = this.userinfo.corpid;
      let job_id = item._id;
      const res = await this.delete({
        corpid: corpid,
        job_id: job_id,
      });
      this.$checkRes(res, '删除成功', '删除失败');
    },
    handleUpdate(index) {
      this.$router.push({ path: '/corp_user/corp_fair/update', query: { index: index } });
    },
    handleAdd() {
      let fair_id = this.current.fair_id;
      this.$router.push({ path: '/corp_user/corp_fair/update', query: { fair_id: fair_id } });
    },
  },
  mounted() {
    let _id = this.$route.params.id;
    if (this.userinfo !== null) {
      let corpid = this.userinfo.corpid;
      this.fetch({ corpid: corpid, fair_id: _id });
      this.details({id:_id})
    }
  },
  computed: {
    ...mapState(['current','corp_info']),
    ...mapGetters(['userinfo']),
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
i {
  width: 20%;
  display: block;
  text-align-last: justify;
}
em {
  display: block;
  margin-left: 10%;
}
.box-card {
  width: 80%;
  margin: 2em;
}
.btn {
  padding: 3px 8px;
}
.btn0 {
  padding: 3px 0;
  margin-top: 2em;
  margin-left: 10%;
  display: block;
  text-align: left;
}
.xq {
  margin-left: 0;
}
pre {
  font-size: 0.8em;
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