<template>
  <div class="box">
    <div class="btn" :class="{a1:b1}" @click="btn1('1')">首页</div>
    <div
      class="btn"
      :class="{a1:b2}"
      @click="btn1('2')"
      @mouseenter="enter('1')"
      @mouseleave="leave"
    >就业服务
      <div class="Submenu" v-show="show1">
        <div :class="{a2:b21}" @click="btn2('1')">就业指导</div>
        <div :class="{a2:b22}" @click="btn2('2')">政策文件</div>
        <div :class="{a2:b23}" @click="btn2('3')">常见问题</div>
      </div>
    </div>
    <div
      class="btn"
      :class="{a1:b3}"
      @click="btn1('3')"
      @mouseenter="enter('2')"
      @mouseleave="leave"
    >新闻公告
      <div class="Submenu" v-show="show2">
        <div :class="{a2:b31}" @click="btn2('4')">焦点新闻</div>
        <div :class="{a2:b32}" @click="btn2('5')">就业快讯</div>
      </div>
    </div>
    <div
      class="btn"
      :class="{a1:b4}"
      @click="btn1('4')"
      @mouseenter="enter('3')"
      @mouseleave="leave"
    >招聘信息
      <div class="Submenu" v-show="show3">
        <div :class="{a2:b41}" @click="btn2('6')">校内宣讲</div>
        <div :class="{a2:b42}" @click="btn2('7')">校外宣讲</div>
        <div :class="{a2:b43}" @click="btn2('8')">招聘会</div>
        <div :class="{a2:b44}" @click="btn2('9')">招聘信息</div>
      </div>
    </div>
    <div class="btn" :class="{a1:b5}" @click="btn1('5')">联系我们</div>
    <div class="btn" :class="{a1:b6}" @click="btn1('6')" v-show="this.$store.state.IsShow">我的</div>
  </div>
</template>

<script>
export default {
  name: 'navx',
  data() {
    return {
      // 导航移入样式
      b1: true,
      b2: false,
      b3: false,
      b4: false,
      b5: false,
      b6: false,
      // 二级菜单显示
      show1: false,
      show2: false,
      show3: false,
      // 子菜单点击样式
      b21: false,
      b22: false,
      b23: false,
      b24: false,
      b31: false,
      b32: false,
      b41: false,
      b42: false,
      b43: false,
      b44: false
    }
  },
  methods: {
    // 一级菜单点击
    btn1(index) {
      switch (index) {
        case '1':
          this.b1 = true
          this.b2 = false
          this.b3 = false
          this.b4 = false
          this.b5 = false
          this.b6 = false
          break

        case '2':
          this.b1 = false
          this.b2 = true
          this.b3 = false
          this.b4 = false
          this.b5 = false
          this.b6 = false
          break

        case '3':
          this.b1 = false
          this.b2 = false
          this.b3 = true
          this.b4 = false
          this.b5 = false
          this.b6 = false
          break

        case '4':
          this.b1 = false
          this.b2 = false
          this.b3 = false
          this.b4 = true
          this.b5 = false
          this.b6 = false
          break

        case '5':
          this.b1 = false
          this.b2 = false
          this.b3 = false
          this.b4 = false
          this.b5 = true
          this.b6 = false
          break

        case '6':
          this.b1 = false
          this.b2 = false
          this.b3 = false
          this.b4 = false
          this.b5 = false
          this.b6 = true
          break
      }
    },
    // 移入
    enter(index) {
      switch (index) {
        case '1':
          this.show1 = true
          break

        case '2':
          this.show2 = true
          break

        case '3':
          this.show3 = true
          break
      }
    },
    // 移出
    leave() {
      this.show3 = false
      this.show2 = false
      this.show1 = false
    },
    // 二级菜单点击
    btn2(index) {
      switch (index) {
        case '1': // 就业指导
          this.b21 = true
          this.b22 = false
          this.b23 = false
          this.b24 = false
          this.b31 = false
          this.b32 = false
          this.b41 = false
          this.b42 = false
          this.b43 = false
          this.b44 = false
          break

        case '2': // 政策文件
          this.b21 = false
          this.b22 = true
          this.b23 = false
          this.b24 = false
          this.b31 = false
          this.b32 = false
          this.b41 = false
          this.b42 = false
          this.b43 = false
          this.b44 = false
          break

        case '3': // 常见问题
          this.b21 = false
          this.b22 = false
          this.b23 = true
          this.b24 = false
          this.b31 = false
          this.b32 = false
          this.b41 = false
          this.b42 = false
          this.b43 = false
          this.b44 = false
          break

        case '4': // 焦点新闻
          this.b21 = false
          this.b22 = false
          this.b23 = false
          this.b24 = false
          this.b31 = true
          this.b32 = false
          this.b41 = false
          this.b42 = false
          this.b43 = false
          this.b44 = false
          break

        case '5': // 就业快讯
          this.b21 = false
          this.b22 = false
          this.b23 = false
          this.b24 = false
          this.b31 = false
          this.b32 = true
          this.b41 = false
          this.b42 = false
          this.b43 = false
          this.b44 = false
          break

        case '6': // 校内宣讲
          this.b21 = false
          this.b22 = false
          this.b23 = false
          this.b24 = false
          this.b31 = false
          this.b32 = false
          this.b41 = true
          this.b42 = false
          this.b43 = false
          this.b44 = false
          break

        case '7': //校外宣讲
          this.b21 = false
          this.b22 = false
          this.b23 = false
          this.b24 = false
          this.b31 = false
          this.b32 = false
          this.b41 = false
          this.b42 = true
          this.b43 = false
          this.b44 = false
          break

        case '8': // 招聘会
          this.b21 = false
          this.b22 = false
          this.b23 = false
          this.b24 = false
          this.b31 = false
          this.b32 = false
          this.b41 = false
          this.b42 = false
          this.b43 = true
          this.b44 = false
          break

        case '9': // 招聘信息
          this.b21 = false
          this.b22 = false
          this.b23 = false
          this.b24 = false
          this.b31 = false
          this.b32 = false
          this.b41 = false
          this.b42 = false
          this.b43 = false
          this.b44 = true
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: relative;
  display: flex;
  background: #1e649f;
  width: 1200px;
  color: #fff;
  margin: 0 auto;
  z-index: 9;
}
.box .btn {
  min-width: 109px;
  text-align: center;
  line-height: 2.5em;
  font-size: 1.2em;
  cursor: pointer;
  position: relative;
}
.box .btn:hover {
  background: #60b0f4;
}
.a1 {
  background: #60b0f4;
}
.Submenu {
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  background: #60b0f4;
}
.Submenu div:hover {
  background: #1e649f;
}
.a2 {
  background: #1e649f;
}
</style>
