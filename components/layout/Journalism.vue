<template>
  <div class="zj_journalism_box">
    <div class="zj_journalism_txtbox">
      <div class="fj titlebox">
        <div class="fd1 zj_journalism_title">就业快讯</div>
        <div class="fd2 zj_journalism_txt">
          MORE
          <img src="/img/z1.jpg" class="zj_journalism_icon">
        </div>
      </div>
      <ul class="zj_journalism_ul">
        <li v-for="(item,index) in data" :key="index" class="fj">
          <span class="zj_journalism_time fd1">{{item.time}}</span>
          <a class="fd1 zj_journalism_txt2">{{item.txt}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Journalism',
  data() {
    return {
      data: [
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' },
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' },
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' },
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' },
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/total.less';
</style>>