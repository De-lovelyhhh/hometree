<template>
  <div id="app">
    <p>
      <router-link to="/SignPage">登录界面</router-link>
      <router-link to="/ProblemFind">修改密码</router-link>
      <router-link to="/AfterLogin">登陆后</router-link>
      <router-link to="/Check">审核页面</router-link>
      <router-link to="/Notice">公告墙</router-link>
      <router-link to="/Tree">树</router-link>
      <router-link to="/Personal">个人页面</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import SignPage from './components/SignPage.vue'
import ProblemFind from './components/ProblemFind.vue'
import AfterLogin from './components/AfterLogin.vue'
import Check from './components/Check.vue'
import Notice from './components/Notice.vue'
import Tree from './components/Tree.vue'
import Personal from './components/Personal.vue'
export default {
  name: 'App',
  components: {
    SignPage, ProblemFind, AfterLogin, Check, Notice, Tree, Personal
  },
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
