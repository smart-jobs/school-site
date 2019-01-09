<template>
  <div>
      <banner/>
      <navx/>
      <div class="boxone fj">
        <div class="fd1 tab">
          <div :class="{a1:on1}" @click="btn('1')">校内宣讲</div>
          <div :class="{a1:on2}" @click="btn('2')">校外宣讲</div>
          <div :class="{a1:on3}" @click="btn('3')">招聘会</div>
          <div :class="{a1:on4}" @click="btn('4')">招聘信息</div>
        </div>
        <div class="fd2 data">
          <ul>
            <li class="fj" v-for="(item,index) in list" :key="index">
              <div class="fd1 fj txtbox">
                  <img :src="item.imgurl" class="img fd1">
                  <div class="fd1 titbox">
                      <a @click="Obtain(index)">{{item.title}}</a>
                      <p>{{item.txt1}}</p>
                      <p>{{item.txt2}}</p>
                  </div>
              </div>
              <span class="fd2 spandata">{{item.data}}</span>
            </li>
          </ul>
          <el-pagination class="pv"
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-size="pagesize"
            layout="prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
      <br>
      <feet/>
  </div>
</template>

<script>
import banner from '~/components/layout/banner'
import navx from '~/components/layout/navx'
import feet from '~/components/layout/feet'
export default {
  name: 'home',
  data () {
    return {
      type: '', // 选项卡类型
      page: 1, // 页数
      pagesize: 10, // 条数
      total: 100, // 总数
      on1: true, // 选项卡样式1
      on2: false, // 选项卡样式2
      on3: false, // 选项卡样式3
      on4: false, // 选项卡样式4
      list: [ // 数据
        {title:'网上创业能复制吗？给大学生创业的6点建议',data:'2016-04-10',id:'1',imgurl:'/img/logox.jpg',txt1:'华南理工大学',txt2:'五山校区就业指导中心一号报告厅（1101室）'},
        {title:'网上创业能复制吗？给大学生创业的6点建议',data:'2016-04-10',id:'2',imgurl:'/img/logox.jpg',txt1:'华南理工大学',txt2:'五山校区就业指导中心一号报告厅（1101室）'},
        {title:'网上创业能复制吗？给大学生创业的6点建议',data:'2016-04-10',id:'3',imgurl:'/img/logox.jpg',txt1:'华南理工大学',txt2:'五山校区就业指导中心一号报告厅（1101室）'},
        {title:'网上创业能复制吗？给大学生创业的6点建议',data:'2016-04-10',id:'4',imgurl:'/img/logox.jpg',txt1:'华南理工大学',txt2:'五山校区就业指导中心一号报告厅（1101室）'}
      ]
    }
  },
  methods: {
    btn (index) { // 选项卡点击
      switch (index) {
        case '1':
          this.on1 = true
          this.on2 = false
          this.on3 = false
          this.on4 = false
          this.type = 1
          break;

        case '2':
          this.on1 = false
          this.on2 = true
          this.on3 = false
          this.on4 = false
          this.type = 2
          break;

        case '3':
          this.on1 = false
          this.on2 = false
          this.on3 = true
          this.on4 = false
          this.type = 3
          break;
         
        case '4':
          this.on1 = false
          this.on2 = false
          this.on3 = false
          this.on4 = true
          this.type = 4
          break;
      }
    },
    handleCurrentChange (val) {
      console.log('当前是'+val+'页')
    },
    Obtain (index) { // li点击取id
      let id = this.list[index].id
      console.log(id)
    }
  },
  mounted () {
    switch (this.$route.query.id) {
      case '6':
        this.on1 = true
        this.on2 = false
        this.on3 = false
        this.on4 = false
        break;

      case '7':
        this.on1 = false
        this.on2 = true
        this.on3 = false
        this.on4 = false
        break;

      case '8':
        this.on1 = false
        this.on2 = false
        this.on3 = true
        this.on4 = false
        break;

      case '9':
        this.on1 = false
        this.on2 = false
        this.on3 = false
        this.on4 = true
        break;
    }
  },
  components: {
    banner,
    navx,
    feet
  }
} // l轮播图宽度为424
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxone{width: 1200px;margin: 0 auto;position: relative;margin-top: 2rem}
.tab{width: 20%;background: rgb(240, 240, 240);line-height: 2.5em;color: #000;}
.tab div{border-bottom: 1px solid #333;text-indent: 1em;cursor: pointer;}
.data{width: 75%}
.a1{color: #1e649f;border-left: 3px solid #1e649f;}
ul{width: 100%;}
li{width: 100%;line-height: 2.5em;border-bottom: 1px dashed #999;text-indent: 2em;cursor: pointer;margin-top: 1em}
a{width: 80%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
a:hover{color: #1e649f}
.spandata{margin-right: 3%;color: red}
.data{background: rgb(243, 243, 243);}
.pv{margin-top: 2rem;}



.img{width: 10%;border: 1px solid #ddd;margin-bottom: 1em}
.txtbox{width: 80%;}
p{font-size: 0.8em;line-height: 1.8em}
p{width: 80%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.titbox{width: 90%}
</style>
