<template>
  <div class="data fd2">
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="fd1">{{ currents && currents.corpname }}</span>
        <el-button class="fd2 btn" type="text" v-if="currents && currents.status == 1" @click="handleUpdate(currents._id)">更改</el-button>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">招聘职位:</i> <em class="fd1">{{ currents && currents.title }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">招聘人数:</i> <em class="fd1">{{ currents && currents.count }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">学历要求:</i> <em class="fd1">{{ currents | get('xlreqs.name') }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">专业要求:</i> <em class="fd1">{{ currents && currents.zyreqs }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">薪资待遇:</i> <em class="fd1">{{ currents | get('salary.name') }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">职位要求:</i> <em class="fd1">{{ currents | get('nature.name') }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">工作地点:</i> <em class="fd1">{{ currents | get('city.name') }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">招聘结束:</i> <em class="fd1">{{ currents && currents.expired }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">所属行业:</i> <em class="fd1">{{ currents | get('jobcat.name') }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">分站信息:</i> <em class="fd1">{{ currents && currents.unit }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">职位描述:</i> <em class="fd1">{{ currents && currents.jobdesc }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">详情介绍:</i> <em class="fd1">{{ currents && currents.content }}</em>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('corp_user/corp_jobinfo');
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['fetch']),
    handleUpdate(id) {
      this.$router.push({ path: '/corp_user/corp_jobinfo/updata', query: { id: id } });
    },
  },
  mounted() {
    let _id = this.$route.params.id;
    this.fetch({ id: _id });
  },
  computed: {
    ...mapState(['currents']),
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
  margin-left: 2em;
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