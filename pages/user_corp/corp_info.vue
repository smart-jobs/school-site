<template>
  <div class="data fd2">
     {{corp_info}}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user_corp/corp_info');
export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions(['corp_query']),
  },
  mounted() {
    this.useinfo = JSON.parse(sessionStorage.getItem("user"))
    if (this.useinfo) {
      this.corp_query({corpid:this.useinfo.corpid})
    }
    console.log(this.corp_info)
  },
  computed: {
    ...mapState(['corp_info'])
  },
  watch: {
    corp_info: function (val) {
      console.log(val)
    }
  }
};
</script>

<style lang="less" scoped>

</style>