<template>
    <div>
      <el-header style="background-color: #eff4fa;">
        <TopTab/>
      </el-header>
      <el-main style="margin-top:15px;">
        <el-row>
          <el-col :span="10">
            <el-row style="left:90%;margin-top:20px;">
              <el-col :span="14" class="login-form" style="border-radius: 5px;border: 1px solid #b6b6b6">
                <div class="login-form-head" style="text-align: center;padding: 15px 0;background-color: #eff4fa;color:black">
                  要删除者信息
                </div>
                <div>
                  <div style="margin:15px 0">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px"  class="Delete-ruleForm">
                      <el-form-item label="账号" prop="id" class="interval">
                        <el-input v-model="ruleForm.id" style="width: 85%" ></el-input>
                      </el-form-item>
                      <el-form-item label="姓名" prop="name" class="interval">
                        <el-input v-model="ruleForm.name" style="width: 85%" ></el-input>
                      </el-form-item>
                      <el-form-item label="删除理由" prop="reason" class="interval" >
                        <el-input v-model="ruleForm.reason" style="width: 85%;"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" style="width:35%">删除</el-button>
                        <el-button @click="resetForm('ruleForm')" style="width: 35%">取消</el-button>
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
      </el-main>
      <el-footer height="90px" style="background-color: #eff4fa;">
        <Footer/>
      </el-footer>
    </div>
</template>

<script>
import TopTab from './TopTab.vue'
import Footer from './Footer.vue'
export default {
  name: 'Delete',
  components: {TopTab, Footer},
  data () {
    return {
      ruleForm: {
        id: '',
        name: '',
        reason: ''
      },
      rules: {
        id: [
          { required: true, message: '请输入被删除者的账号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入被删除者的姓名', trigger: 'blur' }
        ],
        reason: [
          { required: true, message: '请输入删除原因', trigger: 'blur' }
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

<style scoped>
  .interval{
    margin-top: 30px;
  }
</style>
