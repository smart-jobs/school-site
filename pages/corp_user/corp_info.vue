<template>
  <div class="data fd2">
    <el-card class="box-card">
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">公司名称：</i>
          <em class="fd1">{{corp_info && corp_info.corpname}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">法人代表：</i>
          <em class="fd1">{{corp_info | get('info.legalPerson')}}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">{{corp_info | topeof}}</i>
          <em class="fd1">{{corp_info | get('info.corpcode')}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">单位性质：</i>
          <em class="fd1">{{corp_info | get('info.nature.name')}}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">公司地址：</i>
          <em class="fd1">{{corp_info | get('contact.address')}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">所属行业：</i>
          <em class="fd1">{{corp_info | get('info.industry.name')}}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">公司规模：</i>
          <em class="fd1">{{corp_info | get('info.scale.name')}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">注册资金：</i>
          <em class="fd1">{{corp_info | get('info.registerMoney')}}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">创建时间：</i>
          <em class="fd1">{{corp_info | get('info.registerTime')}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">所属行业：</i>
          <em class="fd1">{{corp_info | get('info.industry.name')}}</em>
        </div>
      </div>

      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">固定电话：</i>
          <em class="fd1">{{corp_info | get('contact.phone')}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">所属行业：</i>
          <em class="fd1">{{corp_info | get('info.industry.name')}}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">邮政编码：</i>
          <em class="fd1">{{corp_info | get('contact.postcode')}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">移动电话：</i>
          <em class="fd1">{{corp_info | get('contact.mobile')}}</em>
        </div>
      </div>

      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">邮箱地址：</i>
          <em class="fd1">{{corp_info | get('contact.email')}}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">公司网址：</i>
          <em class="fd1">{{corp_info | get('contact.url')}}</em>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("corp_user/corp_info");
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["corp_query"])
  },
  mounted() {
    if (this.userinfo) {
      this.corp_query({ corpid: this.userinfo.corpid });
    }
  },
  computed: {
    ...mapState(["corp_info"]),
    ...mapGetters(["userinfo"])
  },
  filters: {
    topeof: function(val) {
      if (val !== null) {
        let top = val.info.corptype;
        if (top == 0) {
          return "社会信用代码";
        } else {
          return "组织机构代码";
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.box-card {
  width: 80%;
  margin-left: 5%;
}
.text {
  font-size: 14px;
  width: 50%;
}
.item {
  margin-bottom: 18px;
}
i {
  width: 25%;
  display: block;
  text-align:left;
}
em {
  display: block;
  margin-left: 10%;
}
</style>