import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignPage from '@/components/SignPage.vue'
import ProblemFind from '@/components/ProblemFind.vue'
import AfterLogin from '@/components/AfterLogin.vue'
import Check from '@/components/Check.vue'
import Notice from '@/components/Notice.vue'
import Tree from '@/components/Tree.vue'
import Personal from '@/components/Personal.vue'
import EditInformation from '@/components/EditInformation.vue'
import AreaPicker from '@/components/AreaPicker.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  bash: '/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
})
