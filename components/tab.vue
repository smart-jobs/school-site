<template>
  <div class="box">
    <div class="header fj">
      <div class="btnbox fd1">
        <div class="btn" :class="{btnx:on1}" @mouseenter="btnshow('1')">招聘信息</div>
        <div class="btn" :class="{btnx:on2}" @mouseenter="btnshow('2')">招聘会</div>
        <div class="btn" :class="{btnx:on3}" @mouseenter="btnshow('3')">校内宣讲会</div>
        <div class="btn" :class="{btnx:on4}" @mouseenter="btnshow('4')">校外宣讲会</div>
      </div>
      <div class="all fd2">
        <img src="../assets/z1.jpg" class="icon fd2">
        <span class="fd2">MORE</span>
      </div>
    </div>
    <div class="main" :style="{height:this.he+'px'}" v-if="sxshow">
      <div class="mbox fd1 fj" v-for="(item,index) in list" :key="index">
        <div class="imgbox fd1">
          <img :src="item.imgurl" class="bj" v-if="show1">
          <div class="setdate" v-else>
            <div class="y">{{item.y}}月</div>
            <div class="m">{{item.m}}</div>
          </div>
        </div>
        <div class="txtbox fd1">
          <p class="title">{{item.title}}</p>
          <p class="txt">{{item.txt}}</p>
        </div>
        <div class="data fd2">
          <span>{{item.date}}</span>
        </div>
      </div>
    </div>
    <div class="main" :style="{height:this.he+'px'}" v-else>
      <div class="m2box" v-for="(item,index) in list2" :key="index">
        <div class="txtbox2 fd1">
          <p class="txt2">招聘会</p>
        </div>
        <div class="fd1 titlebox">
          <div class="title title2">{{item.title}}</div>
          <p class="p">主办方：{{item.Company}}</p>
          <p class="p">{{item.address}}</p>
          <p class="p">参与企业{{item.num}}家</p>
        </div>
        <div class="fd1 right2">{{item.date}}</div>
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
          imgurl: require('../assets/logox.jpg'),
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: require('../assets/logox.jpg'),
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: require('../assets/logox.jpg'),
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: require('../assets/logox.jpg'),
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: require('../assets/logox.jpg'),
          title: '共耀未来 · 海有你——海普瑞药业2018届校园招聘启动啦！',
          txt: '需求岗位：2018届校招生,应届毕业生，实习生。',
          date: '2017-05-18',
          y: '11',
          m: '25'
        },
        {
          imgurl: require('../assets/logox.jpg'),
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
    let ha = Number(document.getElementsByClassName('header')[0].clientHeight)
    this.he = 328 - ha
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 841px;
  margin-left: 17px;
  height: 325px;
  border-top: 5px solid #60b0f4;
  border-bottom: 1px dashed #ddd;
}
.header {
  width: 100%;
}
.btnbox {
  width: 60%;
  border-left: 1px solid #ddd;
  display: flex;
}
.btn {
  width: 25%;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 2.5em;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.all {
  width: 39.85%;
  color: #60b0f4;
  line-height: 2.5em;
  border-bottom: 1px solid #ddd;
  font-size: 1.2em;
}
.icon {
  margin-top: 4%;
  margin-left: 3%;
  margin-right: 5%;
}
.btnx {
  border-bottom: 1px solid #fff;
  color: #60b0f4;
}
.main {
  width: 100%;
  border-left: 1px solid #ddd;
}
.mbox {
  width: 48%;
  height: 30%;
  margin: 0.5% 1%;
  border-bottom: 1px dashed #ddd;
  cursor: pointer;
}
.imgbox {
  width: 19%;
  height: 90%;
  border: 1px solid #ddd;
}
.bj {
  width: 90%;
  height: 90%;
  margin: 5% auto;
}
.txtbox {
  width: 40%;
  margin: 0 5%;
  height: 100%;
}
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title {
  font-size: 1.2em;
  color: #1e649f;
}
.txt {
  line-height: 3em;
}
.data {
  width: 20%;
  height: 100%;
  text-align: right;
  font-size: 0.8em;
  color: #999;
}
.title:hover {
  text-decoration: underline;
}
.setdate {
  width: 100%;
  height: 100%;
}
.y {
  width: 100%;
  height: 30%;
  color: #fff;
  background: #1e649f;
  text-align: center;
  line-height: 1.8em;
}
.m {
  width: 100%;
  height: 60%;
  line-height: 2em;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
}

.m2box {
  width: 100%;
  height: 50%;
  border-bottom: 1px dashed #ddd;
}
.txtbox2 {
  width: 10%;
  border: 1px solid #ddd;
  line-height: 4.5em;
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  margin: 4% 0 0 2%;
}
.titlebox {
  width: 60%;
  margin: 0 3%;
  height: 100%;
}
.p {
  line-height: 1.8em;
}
.title2 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 3em;
}
.right2 {
  color: #ff0000;
  text-align: center;
  width: 20%;
  height: 100%;
  line-height: 3.5em;
}
</style>
