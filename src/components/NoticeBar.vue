<template>
  <div class="textBox" style="width:850px;border:1px solid #a3a3a3;border-radius: 30px">
    <transition name="slide">
      <p class="text" >{{nodata}}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NoticeBar',
  data () {
    return {
      nodata: this.GLOBAL.nodata,
      number: this.GLOBAL.number
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
