<!--suppress ALL -->
<template>
    <div>
    <AfterLogin />
      <img src="../../b87387394884.jpg" style="width:75%;height: 600px" >
      <div class="notice">{{ massage }}</div>
      <el-footer height="90px" style="background-color: #eff4fa;">
        <Footer/>
      </el-footer>
    </div>
</template>

<script>
import TopTab from './TopTab.vue'
import Footer from './Footer.vue'
import AfterLogin from './AfterLogin.vue'
export default {
  name: 'Notice',
  components: {TopTab, Footer, AfterLogin},
  data () {
    return {
      massage: '我们使用vue-cli来搭建整个项目，vue-cli就是一个脚手架，步骤很简单，输入几个命令之后就会生成整个项目，里面包括了webpack、ESLint、babel很多配置等等，省了很多事。根据小高之前给的要求以及结合DSS项目中的经验，我们今天搭建的项目结构组成为：\n' +
        '\n' +
        'Vue+ ESLint + webpack + iview+ES6\n' +
        '\n' +
        'Vue: 主要框架\n' +
        '\n' +
        'ESLint: 帮助我们检查Javascript编程时的语法错误，这样在一个项目中多人开发，能达到一致的语法\n' +
        '\n' +
        'Webpack: 设置代理、插件和loader处理各种文件和相关功能、打包等功能。整个项目中核心配置\n' +
        '\n' +
        'iview: 是基于vue的一套样式框架，里面有很多封装好的组件样式\n' +
        '\n' +
        'ES6: 紧跟时代潮流，使用ES6语法，利用babel处理。'
    }
  }
}

</script>

<style scoped>
.notice{
  position:absolute;
  width: 60%;
  left: 25%;
  top: 35%;
  font-family: 华文行楷;
  font-size: 25px;
  color: #7a7a7a;
}
</style>
