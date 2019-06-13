<template>
  <div class="textBox" style="width:850px;border:1px solid #a3a3a3;border-radius: 30px">
    <transition name="slide">
      <p class="text" :key="text.id" @click="detail(text.id)">{{text.val}}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NoticeBar',
  data () {
    return {
      nodata: [],
      number: 0
    }
  },
  beforeCreate () {
    let i, q
    let that = this
    this.$ajax.get(
      'https://www.easy-mock.com/mock/5b616dab0f34b755cbc58b91/dai/api/showPostTitle',
      {
        headers: {
          'skey': that.GLOBAL.skey
        }
      })
      .then(function (response) {
        if (response.data) {
          q = response.data
          for (i = 0; i < q.length; i++) {
            that.nodata.push(q[i].poster_title)
            // that.number.push(q[i].poster_id)
          }
          // that.$router.push('/AfterLogin')
          that.GLOBAL.nodata = that.nodata
          // that.GLOBAL.number = that.number
          console.log(that.nodata)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    this.nodata = this.GLOBAL.nodata
    // console.log(this.GLOBAL.nodata)
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.nodata[this.number]
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
    detail (id) {
      // let that = this
      this.$router.push('/Notice/' + id)
      /* this.$ajax.get(
        'https://www.easy-mock.com/mock/5b616dab0f34b755cbc58b91/dai/api/getPostDetails',
        {
          params: {
            poster_id: id
          },
          headers: {
            'skey': that.GLOBAL.skey
          }
        })
        .then(function (response) {
          if (response.data) {
            console.log()
          }
        })
        .catch(function (error) {
          console.log(error)
        }) */
    }
  }
}
</script>

<style scoped>
  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
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

  .annwall{
    /*width:80%;*/
    height:800px;
    margin: 0 auto;
    color: #7a7a7a;
  }

  .notice{
    position:absolute;
    width: 60%;
    right: 20px;
    top: 35%;
    font-family: "Arial Black";
    font-size: 25px;
    color: #7a7a7a;
  }
  .textBox {
    width: 100%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
</style>
