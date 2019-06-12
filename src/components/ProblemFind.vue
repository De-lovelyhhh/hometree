<template>
    <div>
      <TopTab/>
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
      <div v-if="moveon===0">
        <el-steps :active="0" align-center class="top">
          <el-step title="选择找回密码的方式"></el-step>
          <el-step title="找回"></el-step>
          <el-step title="修改密码"></el-step>
        </el-steps>
        <el-row>
          <el-button type="primary" round class="button" @click="idNumber">身份证</el-button>
        </el-row>
      </div>
      <div v-else-if="choose===2&&moveon===1">
        <el-steps :active="1" align-center class="top">
          <el-step title="选择找回密码的方式"></el-step>
          <el-step title="通过身份证找回"></el-step>
          <el-step title="修改密码"></el-step>
        </el-steps>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="身份证号" prop="id" class="width">
            <el-input v-model="ruleForm.id"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-else-if="moveon===2">
        <el-steps :active="2" align-center class="top">
          <el-step title="选择找回密码的方式"></el-step>
          <el-step title="找回"></el-step>
          <el-step title="修改密码"></el-step>
        </el-steps>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="密码" prop="pass" class="width">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass" class="width">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>

import TopTab from './TopTab.vue'
import Check from './Check.vue'
import Personal from './Personal.vue'
import ProblemFind from './ProblemFind.vue'
import AfterLogin from './AfterLogin.vue'
import Notice from './Notice.vue'
export default {
  components: {TopTab, Check, Personal, ProblemFind, AfterLogin, Notice},
  name: 'ProblemFind',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      go: 0,
      choose: 0,
      moveon: 0,
      ruleForm: {
        answer: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        id: ''
      },
      rules: {
        answer: [
          { required: true, message: '请输入答案', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '请输入身份证号码', trigger: 'blur' }
        ]
      },
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.moveon++
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      this.go = 2
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    problem () {
      this.choose = 1
      this.moveon++
    },
    idNumber () {
      this.choose = 2
      this.moveon++
    }
  }
}
</script>

<style scoped>
.width{
  width:40%;
  margin-top:20px;
  margin-left:30%
}
  .top{
    margin-top:60px
  }
  .button{
    width: 150px;
    margin-top:30px;
    margin-bottom: 20px;
  }
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
