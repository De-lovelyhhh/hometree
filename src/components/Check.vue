<template>
  <div>
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
    <el-main style="margin-top:15px;">
      <el-row>
        <el-col :span="10">
          <el-row style="left:90%;margin-top:20px;">
            <el-col :span="14" class="login-form" style="border-radius: 5px;border: 1px solid #b6b6b6">
              <div class="login-form-head" style="text-align: center;padding: 15px 0;background-color: #eff4fa;color:black" >
                注册者信息
              </div>
              <div>
                <div style="margin:15px 0">
                  <el-form label-width="70px" style="padding-top: 30px">
                    <show :id="id" @showinfo="getCheck" :relation="relationship"/>
                    <el-form-item>
                      <el-button type="primary" style="width: 70%; margin-top:5%; margin-left:-30%" @click="pass">通过</el-button>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 70%; margin-top: 5%; margin-left:-30%" >不通过</el-button>
                    </el-form-item>
                  </el-form>

                  <div></div>
                </div>
              </div>
            </el-col>
            <el-col :span="10">
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <el-footer height="90px" style="background-color: #eff4fa;">
      <Footer/>
    </el-footer>
  </div>
</template>

<script>
import TopTab from './TopTab.vue'
import Footer from './Footer.vue'
import Check from './Check.vue'
import Personal from './Personal.vue'
import ProblemFind from './ProblemFind.vue'
import Notice from './Notice.vue'
import show from './show.vue'
// import Vue from 'vue'

export default {
  name: 'Check',
  components: {TopTab, Footer, Check, Personal, ProblemFind, Notice, show},
  data: function () {
    return {
      id: '22',
      relationship: '55',
      relation: 1
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    pass () {
      let url = 'http://47.106.250.33:7002/api/reviewConfirm'
      let xhr = new XMLHttpRequest()
      let data
      /* let data, relation
      let that = this */
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            data = JSON.parse(xhr.responseText)
            console.log(data)
            if (data) {

            }
          } else {
            console.log('error')
          }
        }
      }
      xhr.open('get', url, false)
      xhr.send()
    },
    getCheck (info) {
      console.log(info)
      this.id = info.id
      this.relationship = info.relationship
      console.log(this.id)
    }
  },
  render: function (createElement) {
    var self = this
    return createElement('input', {
      domProps: {
        value: self.value
      },
      on: {
        input: function (event) {
          self.$emit('input', event.target.value)
        }
      }
    })
  },
  mounted () {
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
