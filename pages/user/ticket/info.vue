<template>
  <div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">位置:</i> <em class="fd1"> {{currentlist && currentlist.address }}</em></div>
        <div class="text fd2 fj"><i class="fd1">类型:</i> <em class="fd1">{{ currentlist && currentlist.type }}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">时间:</i> <em class="fd1">{{ currentlist && currentlist.date }} / {{ currentlist && currentlist.time }}</em></div>
        <div class="text fd2 fj"><i class="fd1">举办地址:</i> <em class="fd1">{{ currentlist && currentlist.type }}</em></div>
      </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/ticket');
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['fetch'])
  },
  mounted() {
    console.log(this.id_list)
    this.fetch({id:this.id_list})
    console.log(this.currentlist)
  },
  computed: {
    ...mapState(['currentlist','id_list']),
  },
  watch: {
    id_list: function (vals) {
        console.log(vals)
        if (vals !== null) {
            console.log(val)
            // console.log(this.id_list)
            // for (let i = 0; i < this.id_list.length; i++) {
            this.fetch({id:vals})
            // }
        }
    }
  }
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
  width: 50%;
}

.item {
  margin-bottom: 18px;
}
i{
  width: 20%;
  display: block;
  text-align-last: justify;
}
em{
  display: block;
  margin-left: 10%
}
.box-card {
  width: 80%;
  margin: 2em auto
}
.btn{
  padding: 3px 8px;
}
.btn0{
  padding: 3px 0;
  margin-top: 2em;
  margin-left: 10%;
  display: block;
  text-align: left
}
.a1{color:#ff0033}
.a2{color: #d1e000}
.a3{color: #11ca00}
.xq{margin-left: 0;}
</style>