// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI, { Cascader } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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
import Administrator from './components/Administrator'
import Delete from './components/Delete'
import AdministratorNew from './components/Administrator_New.vue'
import AdministratorRetired from './components/Administrator_Retired.vue'
import Global from './components/Global.vue'
import Gonggao from './components/Gonggao.vue'
import axios from 'axios'
import qs from 'qs'
axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
Vue.prototype.$router = VueRouter
Vue.prototype.GLOBAL = Global

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Cascader)

const routes = [
  {
    path: '/SignPage',
    name: 'SignPage',
    component: SignPage
  },
  {
    path: '/ProblemFind',
    name: 'ProblemFind',
    component: ProblemFind
  },
  {
    path: '/AfterLogin',
    name: 'AfterLogin',
    component: AfterLogin
  },
  {
    path: '/Check',
    name: 'Check',
    component: Check
  },
  {
    path: '/Notice/:id',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/Tree',
    name: 'Tree',
    component: Tree
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/EditInformation',
    name: 'EditInformation',
    component: EditInformation
  },
  {
    path: '/AreaPicker',
    name: 'AreaPicker',
    component: AreaPicker
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Delete',
    name: 'Delete',
    component: Delete
  },
  {
    path: '/Administrator',
    name: 'Administrator',
    component: Administrator
  },
  {
    path: '/Administrator_New',
    name: 'Administrator_New',
    component: AdministratorNew
  },
  {
    path: '/Administrator_Retired',
    name: 'Administrator_Retired',
    component: AdministratorRetired
  },
  {
    path: '/Global',
    name: 'Global',
    component: Global
  },
  {
    path: '/Gonggao',
    name: 'Gonggao',
    component: Gonggao
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
