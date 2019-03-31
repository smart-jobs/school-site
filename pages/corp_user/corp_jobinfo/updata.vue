<template>
  <div class="data right">
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="left">{{ userinfo && userinfo.corpname }}</span>
        <el-button class="right btn" type="text" v-if="id !== undefined" @click="handleUpdate()">确认更改</el-button>
        <el-button class="right btn" type="text" v-else @click="handleadd">确认新建</el-button>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">招聘职位:</i> <em class="left"><el-input v-model="dataForm.title"></el-input></em>
        </div>
        <div class="text right fj">
          <i class="left">招聘人数:</i> <em class="left"><el-input v-model="dataForm.count"></el-input></em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">学历要求:</i> <em class="left"><code-select v-model="dataForm.xlreqs" category="xlcc" mode="pair"></code-select></em>
        </div>
        <div class="text right fj">
          <i class="left">专业要求:</i> <em class="left"><el-input v-model="dataForm.zyreqs"></el-input></em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">薪资待遇:</i> <em class="left"><code-select v-model="dataForm.salary" category="xzdy" mode="pair"></code-select></em>
        </div>
        <div class="text right fj">
          <i class="left">职位要求:</i> <em class="left"><code-select v-model="dataForm.nature" category="gzxz" mode="pair"></code-select></em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">工作地点:</i> <em class="left"><code-select v-model="dataForm.city" category="xzqh" mode="pair"></code-select></em>
        </div>
        <div class="text right fj">
          <i class="left">招聘结束:</i> <em class="left"><el-input v-model="dataForm.expired"></el-input></em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">所属行业:</i> <em class="left"><code-select v-model="dataForm.jobcat" category="hylb" mode="pair"></code-select></em>
        </div>
        <div class="text right fj">
          <i class="left">分站信息:</i> <em class="left">{{userinfo && userinfo.unit}}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">职位描述:</i> <em class="left"><el-input type="textarea" :rows="3" v-model="dataForm.jobdesc"></el-input></em>
        </div>
        <div class="text right fj">
          <i class="left">详情介绍:</i> <em class="left"><el-input type="textarea" :rows="3" v-model="dataForm.content"></el-input></em>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from 'vuex';
import CodeSelect from '@/components/naf/code-select';

const { mapActions } = createNamespacedHelpers('corp_user/corp_jobinfo');

export default {
  components: {
    CodeSelect,
  },
  data() {
    return {
      id: null,
      dataForm:{
        city: null,
        content: null,
        count: null,
        expired: null,
        jobcat: null,
        jobdesc: null,
        nature: null,
        salary: null,
        title: null,
        xlreqs: null,
        zyreqs: null,
      }
    };
  },
  methods: {
    ...mapActions(['fetchs','updata','create']),
    async handleUpdate() {
      try {
        let dataForm = this.dataForm
        let corpid = this.userinfo.corpid;
        let id = this.id;
        if (this.dataForm.content!==''&&this.dataForm.count!==''&&this.dataForm.expired!==''&&this.dataForm.jobdesc!==''&&this.dataForm.title!==''&&this.dataForm.zyreqs!==''&&this.dataForm.city.name!==''&&this.dataForm.jobcat.name!==''&&this.dataForm.nature.name!==''&&this.dataForm.xlreqs.name!==''&&this.dataForm.salary.name!=='') {
          const res = await this.updata({
            corpid: corpid,
            id: id,
            dataForm
          });
          if (this.$checkRes(res, "更改成功")) {
            this.$router.push("/corp_user/corp_jobinfo/");
          }
        } else {
          this.$message({
            type: "error",
            message: "请填写完整信息",
            duration: 1000
          });
        }
      } catch (err) {
        this.$message({
          type: "error",
          message: err.message || "更改失败",
          duration: 1000
        });
        console.error(err);
      }
    },
    async handleadd () {
      try {
        let dataForm = this.dataForm
        let corpid = this.userinfo.corpid;
        if (this.dataForm.content!==''&&this.dataForm.count!==''&&this.dataForm.expired!==''&&this.dataForm.jobdesc!==''&&this.dataForm.title!==''&&this.dataForm.zyreqs!==''&&this.dataForm.city.name!==''&&this.dataForm.jobcat.name!==''&&this.dataForm.nature.name!==''&&this.dataForm.xlreqs.name!==''&&this.dataForm.salary.name!=='') {
          const res = await this.create({
            corpid: corpid,
            dataForm
          });
          if (this.$checkRes(res, "新建成功")) {
            this.$router.push("/corp_user/corp_jobinfo/");
          }
        } else {
          this.$message({
            type: "error",
            message: "请填写完整信息",
            duration: 1000
          });
        }
      } catch (err) {
        this.$message({
          type: "error",
          message: err.message || "新建失败",
          duration: 1000
        });
        console.error(err);
      }
    },
  },
  async mounted() {
    this.id = this.$route.query.id;
    if (this.id !== undefined) {
      const res = await this.fetchs({ id:this. id});
      if(this.$checkRes(res)){
        this.dataForm = res.data;
      }
    }
  },
  computed: {
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