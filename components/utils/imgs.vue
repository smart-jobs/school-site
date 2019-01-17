<template>
  <div class="zj_imgs_box">
    <div class="fj zj_imgs_titlebox">
      <div class="fd1 zj_imgs_title">焦点新闻</div>
      <div class="fd2 zj_imgs_txt">
        MORE
        <img src="/img/z1.jpg" class="zj_imgs_icon">
      </div>
    </div>
    <ul>
      <li :style="{top:top}" class="fd1" v-for="(item,index) in list" :key="index">
        <img :src="item.uri" class="zj_imgs_bj zj_imgs_img">
        <!-- <span>{{item.title}}</span> -->
      </li>
      <div class="fj zj_imgs_number">
        <em class="fd1" :class="{zj_imgs_active: idx == index + 1}" v-for="(item,index) in list" :key="index" @click="btn(index+1)">{{index+1}}</em>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'imgs',
  data() {
    return {
      idx: 1,
      top: '',
      list: [
        {
          uri: '/img/push_1.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助1'
        },
        {
          uri: '/img/push_2.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助2'
        },
        {
          uri: '/img/push_3.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助3'
        },
        {
          uri: '/img/push_4.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助4'
        },
        {
          uri: '/img/push_5.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助5'
        }
      ]
    }
  },
  methods: {
    set() {
      if (this.idx == 5) {
        this.idx = 1
      } else {
        this.idx++
      }
      let he = document.getElementsByClassName('zj_imgs_img')[0].height
      this.top = -(this.idx - 1) * he + 'px'
    },
    btn(index) {
      this.idx = index - 1
      this.set()
    }
  },
  mounted() {
    this.$store.state.val = setInterval(this.set, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/total.less';
</style>
