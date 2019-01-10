<template>
  <div>
    <div class="boxone fj">
      <div class="fd1 tab">
        <div :class="{ a1: on1 }" @click="btn('1')">焦点新闻</div>
        <div :class="{ a1: on2 }" @click="btn('2')">就业快讯</div>
      </div>
      <div class="fd2 data">
        <ul>
          <li v-for="(item, index) in list" :key="index" class="fj">
            <a class="fd1" @click="Obtain(index)"> {{ item.txt }} </a>
            <span class="fd2 spandata"> {{ item.data }}
            </span>
          </li>
        </ul>
        <el-pagination class="pv" :current-page.sync="page" :page-size="pagesize" layout="prev, pager, next, jumper"
                       :total="total" @current-change="handleCurrentChange" />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      type: '', // 选项卡类型
      page: 1, // 页数
      pagesize: 10, // 条数
      total: 100, // 总数
      on1: true, // 选项卡样式1
      on2: false, // 选项卡样式2
      list: [
        // 数据
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '1',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '2',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '3',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '4',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '5',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '6',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '7',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '8',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '9',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '10',
        },
      ],
    };
  },
  mounted() {
    switch (this.$route.query.id) {
      case '4':
        this.on1 = true;
        this.on2 = false;
        break;

      case '5':
        this.on1 = false;
        this.on2 = true;
        break;
    }
  },
  methods: {
    btn(index) {
      // 选项卡点击
      switch (index) {
        case '1':
          this.on1 = true;
          this.on2 = false;
          this.on3 = false;
          this.type = 1;
          break;

        case '2':
          this.on1 = false;
          this.on2 = true;
          this.on3 = false;
          this.type = 2;
          break;
      }
    },
    handleCurrentChange(val) {
      console.log('当前是' + val + '页');
    },
    Obtain(index) {
      // li点击取id
      let id = this.list[index].id;
      console.log(id);
    },
  },
}; // l轮播图宽度为424
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxone {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;
}
.tab {
  width: 20%;
  background: rgb(240, 240, 240);
  line-height: 2.5em;
  color: #000;
}
.tab div {
  border-bottom: 1px solid #333;
  text-indent: 1em;
  cursor: pointer;
}
.data {
  width: 75%;
}
.a1 {
  color: #1e649f;
  border-left: 3px solid #1e649f;
}
ul {
  width: 100%;
}
li {
  width: 100%;
  line-height: 2.5em;
  border-bottom: 1px dashed #999;
  text-indent: 2em;
  cursor: pointer;
}
a {
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
a:hover {
  color: #1e649f;
}
.spandata {
  margin-right: 3%;
}
.data {
  background: rgb(243, 243, 243);
}
.pv {
  margin-top: 2rem;
}
</style>
