<template>
  <div>
    <TopTab/>
    <div class="img">
      <img src="../../timgb.jpg" style="width: 400px;height:700px">
    </div>
    <div>
      <el-row>
        <el-col :span="10">
          <el-row style="left:90%;margin-top:10%;">
            <el-col :span="14" class="login-form" style="border-radius: 5px;border: 1px solid #b6b6b6">
              <div class="login-form-head" style="text-align: center;padding: 15px 0;background-color: #eff4fa;color:black">
                登录
              </div>
              <div>
                <div style="margin:15px 0">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px"  class="Login-ruleForm">
                    <el-form-item label="账号" prop="id" class="interval up" >
                      <el-input v-model="ruleForm.id" class="inputLeft"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" class="interval up">
                      <el-input v-model="ruleForm.password" class="inputLeft"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="sub" style="width: 80%">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                      <router-link to="/ProblemFind">忘记密码？点击找回</router-link>
                      <p></p>
                      <router-link to="/SignPage">还没账号？点击注册</router-link>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-col>
            <el-col :span="10">
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <!--<div class="Login" >
      <p class="title">欢迎登录！！</p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="id" class="interval up" >
          <el-input v-model="ruleForm.id" class="inputLeft"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="interval up">
          <el-input v-model="ruleForm.password" class="inputLeft"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%">登录</el-button>
        </el-form-item>

        <el-form-item>
          <router-link to="/ProblemFind">忘记密码？点击找回</router-link>
          <p></p>
          <router-link to="/SignPage">还没账号？点击注册</router-link>

        </el-form-item>

      </el-form>
    </div>-->
  </div>
</template>

<script>
import TopTab from './TopTab.vue'
import SignPage from './SignPage.vue'
import ProblemFind from './ProblemFind.vue'

export default {
  name: 'Login',
  components: {
    TopTab, SignPage, ProblemFind
  },
  data () {
    return {
      ruleForm: {
        id: '',
        password: ''
      },
      rules: {
        id: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    sub: function () {
      let that = this
      this.$ajax.post(
        'http://47.106.250.33:7002/api/register',
        this.$qs.stringify({
          user_id: that.ruleForm.id,
          password: that.ruleForm.password
        }))
        .then(function (response) {
          console.log(response)
          if (response.data.permission === 1) {
            that.$router.push('/AfterLogin')
            console.log('普通人登录')
          } else {
            that.$router.push('/AfterLogin')
            console.log('管理员登录')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .Login{
    width: 22%;
    margin-left: 50%;
  }
  .title{
    text-align: center;
    font-size:40px;
  }
  .interval{
    margin-top: 30px;
  }
  .inputLeft{
    float:right;
  }
  .img{
    position: fixed;
    float:left;
    height:600px;
    width: 400px;
  }
  .up{
    display:inline-block;height:50px;width:85%;margin-top: -7px
  }
</style>
