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
                <div class="login-form-head" style="text-align: center;padding: 15px 0;background-color: #eff4fa;color:black" v-if="number===1">
                  要删除者信息
                </div>
                <div class="login-form-head" style="text-align: center;padding: 15px 0;background-color: #eff4fa;color:black" v-else-if="number===2">
                  死亡者信息
                </div>
                <div class="login-form-head" style="text-align: center;padding: 15px 0;background-color: #eff4fa;color:black" v-else-if="number===3">
                  注册者信息
                </div>
                <div>
                  <div style="margin:15px 0">
                    <el-form label-width="70px" style="padding-top: 30px">
                      <el-form-item label="账号">
                        <el-input v-model="id" style="width: 85%" readonly="readonly"></el-input>
                      </el-form-item>
                      <el-form-item label="姓名">
                        <el-input v-model="name" style="width: 85%" readonly="readonly"></el-input>
                      </el-form-item>
                      <el-form-item label="证明人">
                        <el-input v-model="person" style="width: 85%" readonly="readonly"></el-input>
                      </el-form-item>
                      <el-form-item label="与证明人的关系">
                        <el-input v-model="relationship" style="width: 85%" readonly="readonly"></el-input>
                      </el-form-item>
                      <el-form-item label="删除理由" v-if="number===1" style="margin-top: -15px">
                        <el-input v-model="reason" style="width: 85%;" readonly="readonly"></el-input>
                      </el-form-item>
                    </el-form>
                    <div><el-button type="primary" style="width: 80%;margin-left:37px;margin:20px; margin-top:-5px">审核通过</el-button></div>
                    <div><el-button type="primary" style="width: 80%;margin-left:37px;margin:20px; margin-top:-10px">不通过</el-button></div>
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
  name: 'Check',
  components: {TopTab, Footer},
  data () {
    return {
      number: 1,
      id: '123456',
      relationship: '兄弟',
      person: '大黄',
      name: '二黄',
      reason: '太烦了'
    }
  }
}
</script>

<style scoped>

</style>
