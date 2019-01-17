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
        <img src="/img/z1.jpg" class="icon fd2">
        <span class="fd2">MORE</span>
      </div>
    </div>
    <div class="main" :style="{height:this.he+'px'}" v-if="sxshow">
      <div class="mbox fd1 fj" v-for="(item,index) in list" :key="index">
        <div class="imgbox fd1">
          <img :src="show1" class="bj">
        </div>
        <div class="txtbox fd1">
          <p class="title">{{item.title || item.subject}}</p>
          <p class="txt">{{item.corpname}}</p>
        </div>
        <div class="data fd2">
          <span>{{item.meta.createdAt | capitalize}}</span>
        </div>
      </div>
    </div>
    <div class="main" :style="{height:this.he+'px'}" v-else>
      <div class="m2box" v-for="(item,index) in list2" :key="index">
        <div class="txtbox2 fd1">
          <p class="txt2">招聘会</p>
        </div>
        <div class="fd1 titlebox">
          <div class="title title2">{{item.subject}}</div>
          <p class="p">参与企业{{item.unit}}家</p>
        </div>
        <div class="fd1 right2">{{item.meta.createdAt | capitalize2}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      on1: true,
      on2: false,
      on3: false,
      on4: false,
      he: '',
      show1: '/img/logox.jpg',
      sxshow: true,
      list: [],
      list2: []
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
          this.query('jobinfo','6')
          this.show1 = '/img/logox.jpg'
          break

        case '2':
          this.on2 = true
          this.on1 = false
          this.on3 = false
          this.on4 = false
          this.sxshow = false
          this.query('jobfair','2')
          break

        case '3':
          this.on3 = true
          this.on2 = false
          this.on1 = false
          this.on4 = false
          this.show1 = false
          this.sxshow = true
          this.query('campus','6')
          this.show1 = '/img/logo1.jpg'
          break

        case '4':
          this.on4 = true
          this.on2 = false
          this.on3 = false
          this.on1 = false
          this.show1 = false
          this.sxshow = true
          this.query('campus','6')
          this.show1 = '/img/logo2.jpg'
          break
      }
    },
    query (uri,arr) {
      let tache = this
      axios.get('/www/api/jobs/'+uri+'/simple',{
        params:{
          skip: 0,
          limit: arr,
        }
      })
        .then((res) => {
          if (res.status == 200) {
            if (arr == '6') {
              tache.list = res.data.data
            }else {
              tache.list2 = res.data.data
            }
          }
          
        }).catch((err) => {
          console.log(err)
        });
    }
  },
  mounted() {
    let ha = Number(document.getElementsByClassName('header')[0].clientHeight)
    this.he = 368 - ha
    this.query('jobinfo','6')
  },
  filters: {
    capitalize: function (value) {
      return value.slice(0,10)
    },
    capitalize2: function (val) {
      return val.slice(0,10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 841px;
  margin-left: 17px;
  height: 370px;
  border-top: 5px solid #60b0f4;
  border-bottom: 5px solid #60b0f4;
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
  /* line-height: 1.8em; */
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
