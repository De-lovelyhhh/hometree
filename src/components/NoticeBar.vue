<template>
  <div class="textBox" style="width:850px;border:1px solid #a3a3a3;border-radius: 30px">
    <transition name="slide">
      <p class="text" :key="text.id">{{text.val}}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NoticeBar',
  data () {
    return {
      nodata: this.GLOBAL.nodata,
      number: 0
    }
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
  .textBox {
    width: 100%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
</style>
