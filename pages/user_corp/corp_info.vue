<template>
  <div class="data fd2">
     <div class="userbox">
      <div class="fj">
        <span class="fd1">公司名称</span>
        <em class="fd1">{{corp_info && corp_info.corpname}}</em>
      </div>
      <div class="fj">
        <span class="fd1">法人代表</span>
        <em class="fd1">{{corp_info | get('info.legalPerson')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">{{corp_info | topeof}}</span>
        <em class="fd1">{{corp_info | get('info.corpcode')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">单位性质</span>
        <em class="fd1">{{corp_info | get('info.nature.name')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">公司地址</span>
        <em class="fd1">{{corp_info | get('contact.address')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">所属行业</span>
        <em class="fd1">{{corp_info | get('info.industry.name')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">公司规模</span>
        <em class="fd1">{{corp_info | get('info.scale.name')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">注册资金</span>
        <em class="fd1">{{corp_info | get('info.registerMoney')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">创建时间</span>
        <em class="fd1">{{corp_info | get('info.registerTime')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">联系人</span>
        <em class="fd1">{{corp_info | get('contact.person')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">固定电话</span>
        <em class="fd1">{{corp_info | get('contact.phone')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">移动电话</span>
        <em class="fd1">{{corp_info | get('contact.mobile')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">邮政编码</span>
        <em class="fd1">{{corp_info | get('contact.postcode')}}</em>
      </div>
      <div class="fj">
        <span class="fd1">邮箱地址</span>
        <em class="fd1">{{corp_info | get('contact.email')}}</em>
      </div>
      <div class="fj none">
        <span class="fd1">公司网址</span>
        <em class="fd1">{{corp_info | get('contact.url')}}</em>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapGetters} = createNamespacedHelpers('user_corp/corp_info');
export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions(['corp_query']),
  },
  mounted() {
    if (this.userinfo) {
      this.corp_query({corpid:this.userinfo.corpid})
    }
  },
  computed: {
    ...mapState(['corp_info']),
    ...mapGetters(['userinfo'])
  },
  filters: {
    topeof: function (val) {
      if (val !== null) {
        let top = val.info.corptype
        if (top == 0) {
          return '社会信用代码'
        }else {
          return '组织机构代码'
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.userbox{width: 60%;margin: 10% auto;font-size: 1.2em;font-weight: 700;line-height: 2.5em;}
span{width: 30%;text-align-last: justify;border-right: 1px solid #999;text-indent: 1em;padding-right: 3%;}
em{margin-left: 5%}
.fj{border-bottom:1px solid #999;}
.none{border-bottom:none;}
</style>