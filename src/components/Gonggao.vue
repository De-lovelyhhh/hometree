<template>
  <!--公告编辑-->
  <div class="Edit_container" style="margin: 0 auto;width: 60%;background-color: rgb(239, 244, 250);padding: 10px;border-radius: 10px;">
    <!--<el-button @click="Edit"  disabled>编辑公告(施工中)</el-button>-->
    <!--<el-button  @click="delcfm" style="position: center;right:17%;">清空</el-button>-->
    <p style="font-size: 35px;">公告发布</p>
    <div style="width: 30%; margin-left:5px;">
      <p style="width: 80px;">公告标题：</p>
      <el-input
              size="medium"
              placeholder="请输入公告标题"
              suffix-icon="el-icon-date"
              v-model="textarea_title">
      </el-input>
    </div>
    <div style="width: 70%;margin-left:5px ">
      <p style="width: 80px;">公告内容：</p>
      <el-input
              type="textarea"
              :autosize="{ minRows: 15, maxRows:50}"
              placeholder="请输入公告内容"
              v-model="textarea_content">
      </el-input>
    </div>
    <div style="width: 30px; margin-left: 5px; margin-top:5px">
      <el-button type="primary" @click="Send">发布<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
  </div>
</template>
<style>
</style>
<script>
export default {
  data () {
    return {
      textarea_title: '',
      textarea_content: ''
    }
  },
  methods: {
    Send () {
      let that = this
      this.$ajax.post(
        'http://47.106.250.33:7002/api/addPost',
        this.$qs.stringify({
          poster_title: this.textarea_title,
          poster_content: this.textarea_content
        }, {
          headers: {
            'skey': that.GLOBAL.skey,
            'permission': 2
          }
        }))
        .then(function (response) {
          console.log(response)
          if (response.data === 0) {
            alert('发布成功！')
            that.$router.push('/AfterLogin')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
