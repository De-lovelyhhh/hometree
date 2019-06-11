<template>
  <div id="app">
    <div v-if="existCookie.indexOf('skey')===-1">
      <SignPage />
    </div>
    <div v-else>
      <AfterLogin />
    </div>
    <!--<p>
      <router-link to="/SignPage">注册界面</router-link>
      <router-link to="/ProblemFind">修改密码</router-link>
      <router-link to="/AfterLogin">登陆后</router-link>
      <router-link to="/Check">审核页面</router-link>
      <router-link to="/Notice">公告墙</router-link>
      <router-link to="/Tree">树</router-link>
      <router-link to="/Personal">个人页面</router-link>
    </p>-->
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
import EditInformation from './components/EditInformation.vue'
import AreaPicker from './components/AreaPicker.vue'
let exist = document.cookie
console.log(exist)
export default {
  name: 'App',
  data () {
    return {
      existCookie: document.cookie
    }
  },
  components: {
    SignPage, ProblemFind, AfterLogin, Check, Notice, Tree, Personal, EditInformation, AreaPicker
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
    },
    getCookie: function (cname) {
      var name = cname + '='
      var ca = document.cookie.split(';')
      console.log('获取cookie,现在循环')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        console.log(c)
        while (c.charAt(0) === ' ') c = c.substring(1)
        if (c.indexOf(name) !== -1) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
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
