<template>
  <div>
    <div class="main" :style="{height:this.he+'px'}">
      <div class="m2box" v-for="(item,index) in list" :key="index">
        <div class="txtbox2 fd1">
          <p class="txt2">招聘会</p>
        </div>
        <div class="fd1 titlebox">
          <div class="title title2">{{item.subject}}</div>
          <p class="p">参与企业{{item.unit}}家</p>
        </div>
        <div class="fd1 right2">{{item.meta.createdAt | capitalize}}</div>
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
      he: '',
      show1: '/img/logo1.jpg',
      list: []
    }
  },
  methods: {
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
            tache.list = res.data.data
          }
          
        }).catch((err) => {
          console.log(err)
        });
    }
  },
  mounted() {
    let ha = Number(document.getElementsByClassName('header')[0].clientHeight)
    this.he = 368 - ha
    this.query('jobfair','2')
  },
  filters: {
    capitalize: function (value) {
      return value.slice(0,10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/widget.less';
</style>
