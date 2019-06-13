<template>
  <div id="editInformation" style="margin-top: 2%; height: 700px;margin-left: 13%" align="left" v-loading="loading">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px">

      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="国家" prop="country">
        <el-input v-model="ruleForm.country" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio v-model="ruleForm.sex" label="1">女</el-radio>
        <el-radio v-model="ruleForm.sex" label="2">男</el-radio>
      </el-form-item>
      <el-form-item label="出生地" prop="region">
        <el-input v-model="ruleForm.region" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="5">
          <el-form-item prop="birth">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birth"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="联系方式" prop="contactWay" v-model="ruleForm.contactWay">
        <el-form-item label="微信号" style="margin-top: 30px">
          <el-input style="width: 300px" v-model="ruleForm.contactWay.weChat"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" style="margin-top: 20px">
          <el-input style="width: 300px" v-model="ruleForm.contactWay.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" style="margin-top: 20px">
          <el-input style="width: 300px" v-model="ruleForm.contactWay.Email"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item label="是否婚配">
        <el-radio v-model="ruleForm.married" label="false">否</el-radio>
        <el-radio v-model="ruleForm.married" label="true">是</el-radio>
      </el-form-item>
      <el-form-item label="工作地点">
        <el-input v-model="ruleForm.workPlace" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="工作职务">
        <el-input v-model="ruleForm.work" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="个人兴趣爱好">
        <el-input v-model="ruleForm.hobby" style="width: 200px"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="sub">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import AreaPicker from './AreaPicker'

export default {
  name: 'EditInformation',
  components: {AreaPicker},
  data () {
    return {
      loading: '',
      ruleForm: {
        name: '',
        nation: '',
        country: '',
        sex: '',
        region: '',
        political: '',
        birth: '',
        married: '',
        contactWay: {weChat: '', phoneNumber: '', Email: ''},
        education: '',
        workPlace: '',
        work: '',
        hobby: '',
        achievement: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入您的姓名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
        ],
        country: [
          {required: true, message: '国家乃根之所在，不能不填', trigger: 'blur'}
        ],
        nation: [
          {required: true, message: '五十六个民族，您是哪朵花，填一个', trigger: 'change'}
        ],
        region: [
          {required: true, message: '你从哪里来，我滴朋友', trigger: 'change'}
        ],
        sex: [
          {required: true, message: '请选择您的性别', trigger: 'change'}
        ],
        birth: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],
        married: [
          {required: true, message: '请选择婚配情况', trigger: 'change'}
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
    sub () {
      let that = this
      this.$ajax.post(
        'http://47.106.250.33:7002/api/editUserInfo',
        this.$qs.stringify({
          home_location: that.ruleForm.region,
          work: that.ruleForm.work,
          password: that.ruleForm.password,
          work_location: that.ruleForm.workPlace,
          tele: that.ruleForm.contactWay.phoneNumber,
          qq: that.ruleForm.contactWay.weChat,
          email: that.ruleForm.contactWay.Email,
          interest: that.ruleForm.hobby,
          // avatar: that.ruleForm.
          gender: that.ruleForm.sex,
          country: that.ruleForm.country,
          birthday: that.ruleForm.birth
        }, {
          headers: {
            'skey': that.GLOBAL.skey
          }
        }))
        .then(function (response) {
          console.log(response)
          if (response.data.code === 0) {
            alert('修改成功！')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
</style>
