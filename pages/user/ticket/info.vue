<template>
  <div>
      <div class="item fj">
        <div class="text left fj"><i class="left">位置:</i> <em class="left"> {{item.address }}</em></div>
        <div class="text right fj"><i class="left">类型:</i> <em class="left">{{ item.type }}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">时间:</i> <em class="left">{{ item.date }} / {{ item.time }}</em></div>
        <div class="text right fj"><i class="left">举办地址:</i> <em class="left">{{ item.unit }}</em></div>
      </div>
  </div>
</template>

<script>
export default {
  props:['item'],
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