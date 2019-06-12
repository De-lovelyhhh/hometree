<template>
  <div id="editInformation"  style="margin-top: 50px; height: 700px;" align="left" v-loading="loading">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" >

  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="国家" prop="country">
    <el-input v-model="ruleForm.country" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="民族" prop="nation">
    <el-input v-model="ruleForm.nation" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="政治面貌" prop="political">
    <el-input v-model="ruleForm.political" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex" >
    <el-radio v-model="ruleForm.sex" label="female" >女</el-radio>
    <el-radio v-model="ruleForm.sex" label="male" >男</el-radio>
  </el-form-item>
  <el-form-item label="出生地" prop="region" >
    <AreaPicker style="width: fit-content"/>
  </el-form-item>
  <el-form-item label="出生日期">
    <el-col :span="5">
      <el-form-item prop="birth">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birth" style="width: 100%;"></el-date-picker>
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
  <el-form-item label="是否婚配" >
    <el-radio v-model="ruleForm.married" label="false" >否</el-radio>
    <el-radio v-model="ruleForm.married" label="true" >是</el-radio>
  </el-form-item>
  <el-form-item label="最高学历" >
    <el-select v-model="ruleForm.education" placeholder="请选择最高学历" style="width: 200px">
      <el-option label="小学及以下" value="primary" id="0"></el-option>
      <el-option label="初中" value="primary" id="1"></el-option>
      <el-option label="高中" value="primary" id="2"></el-option>
      <el-option label="大学本科" value="primary" id="3"></el-option>
      <el-option label="研究生" value="primary" id="4"></el-option>
      <el-option label="硕士" value="primary" id="5"></el-option>
      <el-option label="博士" value="primary" id="6"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="工作地点" >
    <el-input v-model="ruleForm.workPlace" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="工作职务" >
    <el-input v-model="ruleForm.work" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="个人兴趣爱好" >
    <el-input v-model="ruleForm.hobby" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="已有成就">
    <el-input v-model="ruleForm.achievement" style="width: 200px" aria-placeholder="说出自己已获得的令人骄傲的成就"></el-input>
  </el-form-item>
  <el-form-item label="个性签名">
    <el-input type="textarea" v-model="ruleForm.desc" placeholder="用一句话来形容你自己（20字够吗，不够也得够）"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
  </style>
