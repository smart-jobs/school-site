<template>
  <div class="box">
    <div class="txtbox">
      <div class="titlebox">
        <div class="title a">
          微信登录
        </div>
      </div>
      <div class="buttonbox">
        <div>
          <img :src="qrimg" class="qrimg">
        </div>
        <span class="txt">请使用微信扫码登录</span>
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
      qrimg: ''
    }
  },
  methods: {
    qr() {
      let tache = this
      QRCode.toDataURL('I am a pony!')
        .then(url => {
          tache.qrimg = url
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  mounted () {
    this.qr()
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
  width: 100%;
}
/* .titlebox{border-bottom: 1px solid #ddd} */
.title {
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  font-weight: 700;
  text-align: center;
  width: 100%;
  background: #1e649f;
  color: #fff;
  line-height: 2.5em
}
.txt {
  color: #1e649f;
  line-height: 3em;
  width: 100%;
  text-align: center
}
.buttonbox {
  width: 100%;
}
.qrimg {
  width: 70%;
  margin: 0 auto;
}
</style>
