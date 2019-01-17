<template>
  <div class="zj_tab_box">
    <div class="zj_tab_header fj">
      <div class="zj_tab_btnbox fd1">
        <div class="zj_tab_btn" :class="{zj_tab_btnx:on1}" @mouseenter="btnshow('1')">招聘信息</div>
        <div class="zj_tab_btn" :class="{zj_tab_btnx:on2}" @mouseenter="btnshow('2')">招聘会</div>
        <div class="zj_tab_btn" :class="{zj_tab_btnx:on3}" @mouseenter="btnshow('3')">校内宣讲会</div>
        <div class="zj_tab_btn" :class="{zj_tab_btnx:on4}" @mouseenter="btnshow('4')">校外宣讲会</div>
      </div>
      <div class="zj_tab_all fd2">
        <img src="/img/z1.jpg" class="zj_tab_icon fd2">
        <span class="fd2">MORE</span>
      </div>
    </div>
    <div class="zj_tab_main" :style="{height:this.he+'px'}" v-if="sxshow">
      <div class="zj_tab_mbox fd1 fj" v-for="(item,index) in list" :key="index">
        <div class="zj_tab_imgbox fd1">
          <img :src="item.imgurl" class="zj_tab_bj" v-if="show1">
          <div class="zj_tab_setdate" v-else>
            <div class="zj_tab_y">{{item.y}}月</div>
            <div class="zj_tab_m">{{item.m}}</div>
          </div>
        </div>
        <div class="zj_tab_txtbox fd1">
          <p class="zj_tab_title">{{item.title}}</p>
          <p class="zj_tab_txt">{{item.txt}}</p>
        </div>
        <div class="zj_tab_data fd2">
          <span>{{item.date}}</span>
        </div>
      </div>
    </div>
    <div class="zj_tab_main" :style="{height:this.he+'px'}" v-else>
      <div class="zj_tab_m2box" v-for="(item,index) in list2" :key="index">
        <div class="zj_tab_txtbox2 fd1">
          <p class="zj_tab_txt2">招聘会</p>
        </div>
        <div class="fd1 zj_tab_titlebox">
          <div class="zj_tab_title zj_tab_title2">{{item.title}}</div>
          <p class="zj_tab_p">主办方：{{item.Company}}</p>
          <p class="zj_tab_p">{{item.address}}</p>
          <p class="zj_tab_p">参与企业{{item.num}}家</p>
        </div>
        <div class="fd1 zj_tab_right2">{{item.date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      on1: true,
      on2: false,
      on3: false,
      on4: false,
      he: '',
      show1: true,
      sxshow: true,
      list: [
        // 招聘  宣讲 数据
        {
          imgurl: '/img/logox.jpg',
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: '/img/logox.jpg',
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: '/img/logox.jpg',
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: '/img/logox.jpg',
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: '/img/logox.jpg',
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: '/img/logox.jpg',
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '1',
          m: '2'
        }
      ],
      list2: [
        {
          title:
            '【12月28日】暨南大学2019届毕业生校董校友校市合作单位综合类专场招聘会',
          Company: '暨南大学',
          address: '金陵文化广场',
          num: '100',
          date: '2017-05-18/09:00'
        },
        {
          title:
            '【12月28日】暨南大学2019届毕业生校董校友校市合作单位综合类专场招聘会',
          Company: '暨南大学',
          address: '金陵文化广场',
          num: '100',
          date: '2017-05-18/09:00'
        }
      ]
    }
  },
  methods: {
    btnshow(index) {
      switch (index) {
        case '1':
          this.on1 = true
          this.on2 = false
          this.on3 = false
          this.on4 = false
          this.show1 = true
          this.sxshow = true
          break

        case '2':
          this.on2 = true
          this.on1 = false
          this.on3 = false
          this.on4 = false
          this.sxshow = false
          break

        case '3':
          this.on3 = true
          this.on2 = false
          this.on1 = false
          this.on4 = false
          this.show1 = false
          this.sxshow = true
          break

        case '4':
          this.on4 = true
          this.on2 = false
          this.on3 = false
          this.on1 = false
          this.show1 = false
          this.sxshow = true
          break
      }
    }
  },
  mounted() {
    let ha = Number(document.getElementsByClassName('zj_tab_header')[0].clientHeight)
    this.he = 368 - ha
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/total.less';
</style>
