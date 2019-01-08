<template>
  <div class="box">
    <div class="txtbox">
      <div class="titlebox">
        <div class="title fj">
          <button class="fd1" :class="{a:a1}" @click="btn('1')">学生登录</button>
          <button class="fd2" :class="{a:a2}" @click="btn('2')">企业登录</button>
        </div>
      </div>
      <div class="buttonbox">
        <div v-if="qrcode">
          <img :src="qrimg" class="qrimg" @click="qrcode = false">
        </div>
        <div v-else>
          <input type="text" class="input" placeholder="请输入用户名">
          <input type="text" class="input" placeholder="请输入密码">
          <button type="button" class="btn">登录</button>
        </div>

        <div class="fj">
          <div class="fd1 ma">
            <img src="../assets/aa.png" class="bj" @click="qr">
          </div>
          <a class="fd2 zc" :href="href">{{txt}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'Journalism',
  data() {
    return {
      a1: true,
      a2: false,
      uri: '',
      href: '',
      txt: '学生注册',
      qrcode: false,
      qrimg: ''
    }
  },
  methods: {
    btn(index) {
      switch (index) {
        case '1':
          this.a1 = true
          this.a2 = false
          this.uri = ''
          this.txt = '学生注册'
          this.href = ''
          break

        case '2':
          this.a1 = false
          this.a2 = true
          this.uri = ''
          this.txt = '企业注册'
          this.href = ''
          break
      }
    },
    qr() {
      if (this.qrcode == true) {
        this.qrcode = false
      } else {
        this.qrcode = true
      }
      let tache = this
      QRCode.toDataURL('I am a pony!')
        .then(url => {
          tache.qrimg = url
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 340px;
  border: 1px solid rgb(196, 196, 196);
}
.txtbox {
  width: 90%;
  margin: 0 auto;
  line-height: 3em;
}
/* .titlebox{border-bottom: 1px solid #ddd} */
.title {
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  padding: 0 0 8px;
  font-weight: 700;
  text-align: center;
  width: 100%;
}
.txt {
  color: #1e649f;
  position: relative;
  line-height: 3em;
  height: 3em;
  top: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;
}
.buttonbox {
  width: 100%;
}
button {
  width: 50%;
  font-size: 1.2em;
  line-height: 2em;
  border: none;
  background: #999;
  color: #fff;
  margin: 5% 0;
}
.title .fd1 {
  border-right: 1px solid #ddd;
}
.a {
  background: #1e649f;
}
.input {
  width: 100%;
  border-radius: 8px;
  margin: 5% auto;
  line-height: 2rem;
  text-indent: 2em;
}
.btn {
  width: 100%;
  line-height: 2em;
  font-size: 1.2em;
  background: rgb(0, 190, 63);
}
.zc {
  color: #049cd8;
}
.ma {
  width: 10%;
  margin-top: 5%;
}
.bj {
  width: 100%;
}
.qrimg {
  width: 50%;
  margin: 0 auto;
}
</style>
