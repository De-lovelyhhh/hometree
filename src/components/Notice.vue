<template>
  <div>
    <!--公告墙-->
    <div class="annwall"
         style="overflow:scroll;margin-top:20px;margin-bottom: 20px;width:1000px;height: 1000px; border-radius: 20px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);background-color: #eeeeee">
      <p style="text-align: center;;font-family: 'PingFang SC';font-weight: 700;font-size:40px;">
        {{ '公告墙' }}
      </p>
      <div style="padding-left:5px;margin:0 auto;width:85%;">
        <div style="text-align: left; font-family:'Hiragino Sans GB' ;font-size:28px;">{{title}}</div>
        <div style="text-align: left; font-family:'Hiragino Sans GB' ;font-size:20px;margin-top: 20px">{{content}}</div>
        <div style="margin-right:30px;text-align:right; font-size: 15px;margin-top: 45px">{{announcer_name}}</div>
        <div style="margin-right:30px;text-align:right; font-size: 15px;margin-top: 5px">{{time}}</div>
      </div>
    </div>
    <el-footer height="90px" style="background-color: #eff4fa;">
      <Footer/>
    </el-footer>

  </div>

</template>

<script>
import TopTab from './TopTab.vue'
import Footer from './Footer.vue'
import AfterLogin from './AfterLogin.vue'
import Notice from './Notice.vue'

export default {
  name: 'Notice',
  components: {TopTab, Footer, AfterLogin, Notice},
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '今天(now)',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      valuedate: '',
      //  自动滚动的公告内容
      textArr: [
        '1 第一条公告',
        '2 第二条公告第二条公告',
        '3 第三条公告第三条公告第三条公告'
      ],
      // 换行符替换
      // str = str1.replace(/\\n/gm,"<br/>"),
      show: true,
      lastext: '',
      ann: '',
      getStr: '',
      number: 0,
      title: '',
      content: '',
      time: ''
    }
  },
  created: function () {
    // the created hook is called after the instance is created
    let that = this
    let data
    this.$ajax.get(
      'http://47.106.250.33:7002/api/getPostDetails',
      {
        params: {
          poster_id: that.$route.params.id
        },
        headers: {
          'skey': that.GLOBAL.skey
        }
      })
      .then(function (response) {
        if (response.data) {
          console.log(response.data)
          data = response.data
          that.title = data.poster_title
          that.content = data.poster_content
          that.time = data.created_at
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  mounted () {
    this.startMove()
  },
  methods: {

    // 滚动公告条
    startMove () {
      // eslint-disable-next-line
        let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0
        } else {
          this.number += 1
        }
        this.startMove()
      }, 2000) // 滚动不需要停顿则将2000改成动画持续时间
    },
    Edit () {
      this.$prompt('编辑公告（施工中）', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({value}) => {
        // console.log( this.ann);
        // this.getStr = this.ann;
        this.getStr = value

        this.$message({
          type: 'success'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },

    // 公告编辑栏的智能浮动(待实现)

    // 获取input
    submitAnn () {
      // console.log( this.ann);
      // this.getStr = this.ann;
      let arr = []
      this.ann.split('\n').forEach(item => arr.push(`<p>${item.trim()}</p>`))
      this.getStr += arr.join('')
      if (this.valuedate) {
        this.getStr += '————' + this.valuedate
      } else {
        this.getStr += '———— 日期未设置'
      }

      this.ann = ''
    },

    // 返回修改 待改进
    // btnReturn: function() {
    //     this.getStr = this.lastext;
    // },

    // 清空
    delcfm () {
      this.$confirm('将清空当前公告墙, 确定吗?', '提示', {
        cancelButtonText: '算了',
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        this.getStr = ''
        this.ann = ''

        this.$message({
          type: 'success',
          message: '清空成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}

</script>

<style scoped>

  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

  .annwall {
    /*width:80%;*/
    height: 800px;
    margin: 0 auto;
    color: #7a7a7a;
  }

  .notice {
    position: absolute;
    width: 60%;
    right: 20px;
    top: 35%;
    font-family: "Arial Black";
    font-size: 25px;
    color: #7a7a7a;
  }

  h2 {
    padding: 20px 0
  }

  .textBox {
    width: 100%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }

  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }

  .slide-enter {
    transform: translateY(20px) scale(1);
    opacity: 1;
  }

  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }

  /* WebKit browsers */
  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #bebdbd;

  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #bebdbd;

  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #bebdbd;

  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #bebdbd;

  }

  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #aab2bd;
    /* placeholder字体大小  */
    font-size: 12px;
    /* placeholder位置  */
    text-align: center;
  }

  input {
    border: 1px solid black;
  }
</style>
