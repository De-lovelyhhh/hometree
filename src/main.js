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
import Axios from 'axios'
Vue.prototype.$axios = Axios

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
    path: '/Notice',
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
