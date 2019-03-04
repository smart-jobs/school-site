<template>
  <div class="data fd2">
    <el-button class="fd1 btn0" type="text" @click="handleAdd">添加职位</el-button>
    <br />
    <el-card class="box-card" v-for="(item, index) in currents && currents.jobs" :key="index">
      <div slot="header" class="fj">
        <span class="fd1">{{ currents && currents.corpname }}</span>
        <el-button class="fd2 btn" type="text" v-if="item.status == 1" @click="handleUpdate(item)">更改</el-button>
        <el-button class="fd2 btn" type="text" v-if="item.status == 1" @click="handleDelete(item)">删除</el-button>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">宣讲会:</i> <em class="fd1">{{ currents && currents.subject }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">分站信息:</i> <em class="fd1">{{ currents && currents.unit }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">举办企业:</i> <em class="fd1">{{ currents && currents.corpname }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">开始时间:</i> <em class="fd1">{{ currents && currents.date }} {{ currents && currents.time }}</em>
        </div>
      </div>
       <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">联系方式:</i> <em class="fd1">{{ currents && currents.contact }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">联系邮箱:</i> <em class="fd1">{{ currents && currents.email }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">招聘职位:</i> <em class="fd1">{{ item && item.name }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">招聘人数:</i> <em class="fd1">{{ item && item.count }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">应聘要求:</i> <em class="fd1">{{ item && item.requirement }}</em>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('corp_user/corp_campus');
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['fetch', 'delete','details']),
    handleDelete(item) {
    //   let corpid = this.userinfo.corpid;
    //   let job_id = item._id;
    //   const res = await this.delete({
    //     corpid: corpid,
    //     job_id: job_id,
    //   });
    //   this.$checkRes(res, '删除成功', '删除失败');
    },
    handleUpdate(itme) {
      this.$router.push({ path: '/corp_user/corp_campus/update', query: { index: index } });
    },
    handleAdd() {
      let fair_id = this.current.fair_id;
      this.$router.push({ path: '/corp_user/corp_campus/update', query: { fair_id: fair_id } });
    },
  },
  mounted() {
    let id = this.$route.params.id;
    if (id) {
      this.fetch({ id:id});
    }
  },
  computed: {
    ...mapState(['currents','corp_info']),
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
  margin: 2em auto;
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
</style>