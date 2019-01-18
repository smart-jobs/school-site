<template>
  <div>
    <div class="main" :style="{height:this.he+'px'}">
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
    this.query('campus','6')
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
