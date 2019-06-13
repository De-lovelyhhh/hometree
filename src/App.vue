<template>
  <div id="app">
    <router-link to="/Administrator"></router-link>
    <router-view></router-view>
    <!--<div v-if="existCookie.indexOf('skey')===-1">
      <SignPage />
    </div>
    <div v-else>
      <AfterLogin />
    </div>
    <p>
      <router-link to="/SignPage">注册界面</router-link>
      <router-link to="/ProblemFind">修改密码</router-link>
      <router-link to="/AfterLogin">登陆后</router-link>
      <router-link to="/Check">审核页面</router-link>
      <router-link to="/Notice">公告墙</router-link>
      <router-link to="/Tree">树</router-link>
      <router-link to="/Personal">个人页面</router-link>
    </p>
    <router-view></router-view>-->
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
import Login from './components/Login.vue'
import Delete from './components/Delete.vue'
import Administrator from './components/Administrator.vue'
import Gonggao from './components/Gonggao.vue'
// import Administrator_New from './components/Administrator_New.vue'

/* window.onload = function () {
  let exist = document.cookie
  if (exist.indexOf('skey') === -1) {
    router.push({path: '/SignPage'})
  } else {
    router.push({path: '/AfterLogin'})
  }
} */
export default {
  name: 'App',
  data () {
    return {
      existCookie: document.cookie,
      nodata: [],
      number: []
    }
  },
  components: {
    SignPage, ProblemFind, AfterLogin, Check, Notice, Tree, Personal, EditInformation, AreaPicker, Administrator, Delete, Login, Gonggao
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
    to () {
      this.$router.push('/SignPage')
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    getnotice: function () {
      let i, q
      let that = this
      this.$ajax.get(
        'http://47.106.250.33:7002/api/showPostTitle',
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
              that.number.push(q[i].poster_id)
            }
            // that.$router.push('/AfterLogin')
            that.GLOBAL.nodata = that.nodata
            that.GLOBAL.number = that.number
            console.log(that.GLOBAL.nodata)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    this.getnotice()
  },
  mounted () {
    let that = this
    window.onload = function () {
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].split('=')
        if (c[0] === 'skey') {
          that.GLOBAL.skey = c[1]
        } else if (c[0] === 'permission') {
          that.GLOBAL.permission = c[1]
        }
        console.log('\n' + c)
      }
      let exist = document.cookie
      if (exist.indexOf('skey') === -1) {
        that.$router.push('/SignPage')
      } else {
        that.$router.push('/AfterLogin')
      }
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
