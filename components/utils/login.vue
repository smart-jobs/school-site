<template>
  <div class="zj_login_box">
    <div class="zj_login_txtbox">
      <div class="zj_login_titlebox">
        <div class="zj_login_title fj">
          <button class="fd1 zj_login_button" :class="{zj_login_a:a1}" @click="btn('1')">学生登录</button>
          <button class="fd2 zj_login_button" :class="{zj_login_a:a2}" @click="btn('2')">企业登录</button>
        </div>
      </div>
      <div class="zj_login_buttonbox">
        <div v-if="qrcode">
          <img :src="qrimg" class="zj_login_qrimg" @click="qrcode = false">
        </div>
        <div v-else>
          <input type="text" class="zj_login_input" placeholder="请输入用户名">
          <input type="text" class="zj_login_input" placeholder="请输入密码">
          <button type="button" class="zj_login_btn">登录</button>
        </div>

        <div class="fj">
          <div class="fd1 zj_login_ma">
            <img src="/img/aa.png" class="zj_login_bj" @click="qr">
          </div>
          <a class="fd2 zj_login_zc" :href="href">{{txt}}</a>
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
<style lang="less" scoped>
@import '~@/assets/total.less';
</style>
