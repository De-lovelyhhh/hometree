<template>
    <div>
      <el-row>
        <el-col :span="10">
          <el-row style="left:90%;margin-top:20px;">
            <el-col :span="14" class="login-form" style="border-radius: 5px;border: 1px solid #b6b6b6">
              <div class="login-form-head" style="text-align: center;padding: 15px 0;background-color: #eff4fa;color:black">
                被删除者信息
              </div>
              <div>
                <div style="margin:15px ">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" style="padding-top: 3%" class="new_ruleForm">
                    <el-form-item label="账号" prop="id">
                      <el-input v-model="ruleForm.id" style="width: 85%"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name" class="top">
                      <el-input v-model="ruleForm.name" style="width: 85%"></el-input>
                    </el-form-item>
                    <el-form-item style="margin-top: 15%;">
                      <el-button type="primary" @click="sub" style="width:80%">删除</el-button>
                    </el-form-item>
                    <el-form-item>
                      <el-button @click="resetForm('ruleForm')" style="width: 80%">取消</el-button>
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
        ]
      }
    }
  },
  methods: {
    sub () {
      let that = this
      this.$ajax.get(
        'http://47.106.250.33:7002/api/deleteByAdmin',
        {params: {
          delete_user_id: that.ruleForm.id
        },
        headers: {
          'skey': that.GLOBAL.skey,
          'permission': 2
        }})
        .then(function (response) {
          console.log(response)
          if (response.data === 0) {
            alert('删除成功！')
            that.$router.push('/AfterLogin')
          }
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
  .interval{
    margin-top: 30px;
  }
</style>
