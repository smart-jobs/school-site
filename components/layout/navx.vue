<template>
  <div class="box">
    <div class="btn" :class="{a1:this.$store.state.b1}" @click="btn1('1')">首页</div>
    <div class="btn" :class="{a1:this.$store.state.b2}" @click="btn1('2')" @mouseenter="enter('1')" @mouseleave="leave">就业服务
      <div class="Submenu" v-show="this.$store.state.show1">
        <div :class="{a2:this.$store.state.b21}" @click="btn2('1')">就业指导</div>
        <div :class="{a2:this.$store.state.b22}" @click="btn2('2')">政策文件</div>
        <div :class="{a2:this.$store.state.b23}" @click="btn2('3')">常见问题</div>
      </div>
    </div>
    <div class="btn" :class="{a1:this.$store.state.b3}" @click="btn1('3')" @mouseenter="enter('2')" @mouseleave="leave">新闻公告
      <div class="Submenu" v-show="this.$store.state.show2">
        <div :class="{a2:this.$store.state.b31}" @click="btn2('4')">焦点新闻</div>
        <div :class="{a2:this.$store.state.b32}" @click="btn2('5')">就业快讯</div>
      </div>
    </div>
    <div class="btn" :class="{a1:this.$store.state.b4}" @click="btn1('4')" @mouseenter="enter('3')" @mouseleave="leave">招聘信息
      <div class="Submenu" v-show="this.$store.state.show3">
        <div :class="{a2:this.$store.state.b41}" @click="btn2('6')">校内宣讲</div>
        <div :class="{a2:this.$store.state.b42}" @click="btn2('7')">校外宣讲</div>
        <div :class="{a2:this.$store.state.b43}" @click="btn2('8')">招聘会</div>
        <div :class="{a2:this.$store.state.b44}" @click="btn2('9')">招聘信息</div>
      </div>
    </div>
    <div class="btn" :class="{a1:this.$store.state.b5}" @click="btn1('5')">联系我们</div>
    <div class="btn" :class="{a1:this.$store.state.b6}" @click="btn1('6')" v-show="this.$store.state.IsShow">我的</div>
  </div>
</template>

<script>
export default {
  name: 'navx',
  data() {
    return {}
  },
  methods: {
    // 一级菜单点击
    btn1(index) {
      switch (index) {
        case '1':
          this.$store.state.b1 = true
          this.$store.state.b2 = false
          this.$store.state.b3 = false
          this.$store.state.b4 = false
          this.$store.state.b5 = false
          this.$store.state.b6 = false
          // 重置子菜单
          this.$store.state.b21 = false
          this.$store.state.b22 = false
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = false
          this.$store.state.b41 = false
          this.$store.state.b42 = false
          this.$store.state.b43 = false
          this.$store.state.b44 = false
          this.$router.push('/')
          break

        case '2':
          this.$router.push('/guidance')
          this.$store.state.b1 = false
          this.$store.state.b2 = true
          this.$store.state.b3 = false
          this.$store.state.b4 = false
          this.$store.state.b5 = false
          this.$store.state.b6 = false
          clearInterval(this.$store.state.val)
          break

        case '3':
          this.$router.push('/news/')
          this.$store.state.b1 = false
          this.$store.state.b2 = false
          this.$store.state.b3 = true
          this.$store.state.b4 = false
          this.$store.state.b5 = false
          this.$store.state.b6 = false
          clearInterval(this.$store.state.val)
          break

        case '4':
          this.$router.push('/jobs/')
          this.$store.state.b1 = false
          this.$store.state.b2 = false
          this.$store.state.b3 = false
          this.$store.state.b4 = true
          this.$store.state.b5 = false
          this.$store.state.b6 = false
          clearInterval(this.$store.state.val)
          break

        case '5':
          this.$store.state.b1 = false
          this.$store.state.b2 = false
          this.$store.state.b3 = false
          this.$store.state.b4 = false
          this.$store.state.b5 = true
          this.$store.state.b6 = false
          break

        case '6':
          this.$store.state.b1 = false
          this.$store.state.b2 = false
          this.$store.state.b3 = false
          this.$store.state.b4 = false
          this.$store.state.b5 = false
          this.$store.state.b6 = true
          break
      }
    },
    // 移入
    enter(index) {
      switch (index) {
        case '1':
          this.$store.state.show1 = true
          break

        case '2':
          this.$store.state.show2 = true
          break

        case '3':
          this.$store.state.show3 = true
          break
      }
    },
    // 移出
    leave() {
      this.$store.state.show3 = false
      this.$store.state.show2 = false
      this.$store.state.show1 = false
    },
    // 二级菜单点击
    btn2(index) {
      switch (index) {
        case '1': // 就业指导
          this.$store.state.b21 = true
          this.$store.state.b22 = false
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = false
          this.$store.state.b41 = false
          this.$store.state.b42 = false
          this.$store.state.b43 = false
          this.$store.state.b44 = false
          // this.$router.push('/guidance')
          this.$router.push({
            path: '/guidance',
            query: {
              name: '1'
            }
          })
          break

        case '2': // 政策文件
          this.$store.state.b21 = false
          this.$store.state.b22 = true
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = false
          this.$store.state.b41 = false
          this.$store.state.b42 = false
          this.$store.state.b43 = false
          this.$store.state.b44 = false
          // this.$router.push('/guidance')
          this.$router.push({
            path: '/guidance',
            query: {
              name: index
            }
          })
          break

        case '3': // 常见问题
          this.$store.state.b21 = false
          this.$store.state.b22 = false
          this.$store.state.b23 = true
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = false
          this.$store.state.b41 = false
          this.$store.state.b42 = false
          this.$store.state.b43 = false
          this.$store.state.b44 = false
          // this.$router.push('/guidance')
          this.$router.push({
            path: '/guidance',
            query: {
              name: index
            }
          })
          break

        case '4': // 焦点新闻
          this.$store.state.b21 = false
          this.$store.state.b22 = false
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = true
          this.$store.state.b32 = false
          this.$store.state.b41 = false
          this.$store.state.b42 = false
          this.$store.state.b43 = false
          this.$store.state.b44 = false
          // this.$router.push('/Notice')
          this.$router.push({
            path: '/news/',
            query: {
              name: index
            }
          })
          break

        case '5': // 就业快讯
          this.$store.state.b21 = false
          this.$store.state.b22 = false
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = true
          this.$store.state.b41 = false
          this.$store.state.b42 = false
          this.$store.state.b43 = false
          this.$store.state.b44 = false
          // this.$router.push('/Notice')
          this.$router.push({
            path: '/news/',
            query: {
              name: index
            }
          })
          break

        case '6': // 校内宣讲
          this.$store.state.b21 = false
          this.$store.state.b22 = false
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = false
          this.$store.state.b41 = true
          this.$store.state.b42 = false
          this.$store.state.b43 = false
          this.$store.state.b44 = false
          this.$router.push({
            path: '/jobs/',
            query: {
              name: index
            }
          })
          break

        case '7': //校外宣讲
          this.$store.state.b21 = false
          this.$store.state.b22 = false
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = false
          this.$store.state.b41 = false
          this.$store.state.b42 = true
          this.$store.state.b43 = false
          this.$store.state.b44 = false
          // this.$router.push('/recruit')
          this.$router.push({
            path: '/jobs/',
            query: {
              name: index
            }
          })
          break

        case '8': // 招聘会
          this.$store.state.b21 = false
          this.$store.state.b22 = false
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = false
          this.$store.state.b41 = false
          this.$store.state.b42 = false
          this.$store.state.b43 = true
          this.$store.state.b44 = false
          // this.$router.push('/recruit')
          this.$router.push({
            path: '/jobs/',
            query: {
              name: index
            }
          })
          break

        case '9': // 招聘信息
          this.$store.state.b21 = false
          this.$store.state.b22 = false
          this.$store.state.b23 = false
          this.$store.state.b24 = false
          this.$store.state.b31 = false
          this.$store.state.b32 = false
          this.$store.state.b41 = false
          this.$store.state.b42 = false
          this.$store.state.b43 = false
          this.$store.state.b44 = true
          // this.$router.push('/recruit')
          this.$router.push({
            path: '/jobs/',
            query: {
              name: index
            }
          })
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
  min-width: 140px;
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
