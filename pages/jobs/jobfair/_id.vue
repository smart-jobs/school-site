<template>
  <div class="details">
    <p class="title">{{current && current.subject}}</p>
    <p class="text">企业名称：{{current && current.corpname}}</p>
    <p class="text">分校信息：{{current && current.unit}}</p>
    <p class="text">举办时间：{{current && current.date+ ' '+current.time}}</p>
    <p class="text">举办城市：{{current | get('city.name')}}</p>
    <p class="text">举办地址：{{current && current.address}}</p>
    <p class="text3">温馨提示：为防讯息临时变动,参会前可联系招聘会举办方确认。</p>
    <p class="title">招聘会详情</p>
    <pre class="text2">{{current && current.content}}</pre>
    <p class="title">参展企业</p>
    <div class="box">
      <span v-for="(item,index) in enterprise" :key="index" @click="btn(item)">{{item && item.corpname}}</span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('jobs/jobfair');

export default {
  name: 'JobinfoDetail',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['fetch','ets']),
    btn (item) {
      let _id = item.corpid;
      let unit = this.current.unit
      this.$router.push({path:'/enterprise/'+_id,query:{tenant:unit}})
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id });
    this.ets({ id });
  },
  computed: {
    ...mapState(['current','enterprise']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title {
  font-size: 1.2em;
  font-weight: 600;
  line-height: 3em;
}
.text {
  line-height: 2.5rem;
  border-bottom: 1px solid #dbdbdb;
}
.text2 {
  line-height: 2rem;
}
.text3{color: #ff9913;line-height: 5em}
.box{display: flex}
span{width: 25%;text-align:center;line-height: 2rem;cursor: pointer;}
span:hover{color: cornflowerblue}
</style>
