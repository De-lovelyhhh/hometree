<template>
    <div>
      <TopTab/>
      <div class="img">
        <img src="../../timgb.jpg" style="width: 400px;height:700px">
      </div>
      <div class="signInfo">
        <p class="title">欢迎注册！！</p>
        <el-form :model="ruleForm" :rules="rules" method="post" ref="ruleForm" label-width="100px" class="demo-ruleForm" id="formid">
          <el-form-item label="姓名" prop="name" class="interval" style="display:inline-block;height:50px;width:100%">
            <el-input v-model="ruleForm.name" class="inputLeft"></el-input>
          </el-form-item>
          <el-form-item label="账号" prop="number" class="interval up" >
            <el-input v-model="ruleForm.number" class="inputLeft"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="interval up">
            <el-input v-model="ruleForm.password" class="inputLeft"></el-input>
          </el-form-item>
            <el-form-item label="密保问题" prop="problem" class="top interval up">
              <el-input v-model="ruleForm.problem" class="inputLeft"></el-input>
            </el-form-item>
            <el-form-item label="密保答案" prop="answer" class="top interval up">
              <el-input v-model="ruleForm.answer" class="inputLeft"></el-input>
            </el-form-item>
          <el-form-item label="联系方式" prop="phoneNumber" class="interval up">
            <el-input v-model="ruleForm.phoneNumber" class="inputLeft"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idNumber" class="interval up">
            <el-input v-model="ruleForm.idNumber" class="inputLeft"></el-input>
          </el-form-item>
            <el-form-item label="审核员账号" prop="checkNumber" class="top interval up">
              <el-input v-model="ruleForm.checkNumber" class="inputLeft"></el-input>
            </el-form-item>
          <el-form-item label="与审核员的关系" prop="relation">
            <el-radio-group v-model="ruleForm.relation">
              <el-radio label="1">父子/母子</el-radio>
              <el-radio label="2">兄弟姐妹</el-radio>
              <el-radio label="3">夫妻</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="sub" style="width: 100%">立即注册</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('ruleForm')" style="width: 100%">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>

import TopTab from './TopTab.vue'

export default {
  name: 'sign_page',
  components: {TopTab},
  data () {
    return {
      ruleForm: {
        name: '',
        number: '',
        problem: '',
        answer: '',
        password: '',
        phoneNumber: '',
        idNumber: '',
        checkName: '',
        checkNumber: '',
        relation: '1',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入你的姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        problem: [
          { required: true, message: '请输入密保问题', trigger: 'blur' }
        ],
        answer: [
          { required: true, message: '请输入答案', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        phoneNumber: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        idNumber: [
          { required: true, message: '请输入身份证号码', trigger: 'blur' }
        ],
        checkNumber: [
          { required: true, message: '请输入审核人的账号', trigger: 'blur' }
        ],
        relation: [
          { required: true, message: '请填写你与审核人的关系', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    sub: function () {
      let that = this
      this.$ajax.post(
        'https://www.easy-mock.com/mock/5b616dab0f34b755cbc58b91/dai/api/register',
        this.$qs.stringify({
          user_id: that.ruleForm.number,
          password: that.ruleForm.password,
          name: that.ruleForm.name,
          secure_q: that.ruleForm.problem,
          secure_a: that.ruleForm.answer,
          id_card: that.ruleForm.idNumber,
          verify_user_id: that.ruleForm.checkNumber,
          verify_user_relation: that.ruleForm.relation
        }))
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.signInfo{
  width: 22%;
  margin-left: 50%;
}
.top{
  margin-top:20px
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
    display:inline-block;height:50px;width:100%;margin-top: -7px
  }
</style>
