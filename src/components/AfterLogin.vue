<template>
  <div>
    <el-header style="background-color: #eff4fa;">
      <TopTab/>
    </el-header>
    <div class="tapbar">
      <el-row class="tac">
        <el-col :span="12" style="width: 100%">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo left out"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="/Check">审核页面</router-link></span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><router-link to="/AfterLogin">树</router-link></span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title"><router-link to="/Personal">个人页面</router-link></span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title"><router-link to="/ProblemFind">修改密码</router-link></span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="/Notice">公告墙</router-link></span>
            </el-menu-item>
          </el-menu>
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
    <Tree />
  </div>
</template>

<script>
import TopTab from './TopTab.vue'
import Tree from './Tree.vue'
import Check from './Check.vue'
import Personal from './Personal.vue'
import ProblemFind from './ProblemFind.vue'
import Notice from './Notice.vue'
window.onload = function () {
  let url = 'https://www.easy-mock.com/mock/5b616dab0f34b755cbc58b91/dai/api/getReview'
  let xhr = new XMLHttpRequest()
  var data
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        data = JSON.parse(xhr.responseText)
        console.log(data)
        if (data.length > 0) {
          console.log('true')
        }
      } else {
        console.log('error')
      }
    }
  }
  xhr.open('get', url, false)
  xhr.send()
}
export default {
  components: {TopTab, Tree, Check, Personal, ProblemFind, Notice},
  name: 'AfterLogin',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.left{
  width: 150px;
  height: 100%;
  float: left;
  color: #666666;
  background-color: #eeeeee;
}
  .tac{
    float:left;
    top:10%;
    width: 10%;
  }
  .tapbar{
    display: inline;
    left: 2%;
  }
</style>
