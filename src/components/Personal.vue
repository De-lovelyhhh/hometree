<template>
    <div id="personal">
      <!--主模块-->
      <el-main style="margin-top:15px;">
        <!--名片-->
        <el-row>
          <el-col :span="16" :offset="4">
            <div class="profile">
              <div class="avatar">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div class="user_name">
                username
              </div>
              <div class="description">
                编辑你的个人资料
              </div>
            </div>
          </el-col>
        </el-row>
          <EditInformation/>
      </el-main>
      <!--页脚-->
      <el-footer height="90px" style="background-color: #eff4fa;">
        <div style="margin-left:405px;display:inline-block;position: relative;top:40px" >
          <el-breadcrumb separator="|">
            <el-breadcrumb-item><a href="/">关于我们</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">用户条约</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">帮助中心</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">隐私政策</a></el-breadcrumb-item>
            <el-breadcrumb-item>2018 STU version:1.0.0 / all rights reserved </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-footer>
    </div>
</template>

<script>
import MyMoment from './MyMoment.vue'
import EditInformation from './EditInformation.vue'
export default {
  name: 'Personal',
  components: {MyMoment, EditInformation},
  data () {
    return {
      activeName: 'first',
      activeIndex: '1',
      imageUrl: 'https://dummyimage.com/100x100/00f/fff',
      massage: '有新消息啦~~~'
    }
  },
  methods: {
    open () {
      this.$alert(this.massage, '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
      console.log('aaaaa')
    },
    handleClick (tab, event) {

    },
    handleSelect () {

    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === './assets/bg.jpg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
  #personal {
    background-image: url(../assets/bg3.jpg);
    background-attachment: fixed;
    background-size: 100% 100%;
  }.option {
     background: white;
   }
  .photos-seemore{
    text-align: center;
    padding: 10px;
  }
  .photos-seemore a{
    text-decoration-line: none;
    color: black;

  }
  .photos-seemore a:hover{
    color: rgb(253, 152, 0)
  }
  .el-row{
    margin-bottom:0 !important;
  }
  .user_name{
    margin: 20px 0;
  }
  .info_edit {
    padding: 10px 0;
    background-color: white;
    border-radius: 5px;
  }
  .photos{
    margin:10px 0;
    background-color: white;
    border-radius: 5px;
  }
  .photos-header{
    padding-top:10px;
    margin-left: 10px;
    font-weight: 700;

  }
  .info_edit .percent {
    color: rgb(0, 174, 255);
    font-size: 30px;
  }
  div.avatar{
    padding-top:35px;
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }

  div.avatar *{
    width: 100px;
    height: 100px;
    border: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .profile *{
    color: white;
    text-align: center;
  }
  .profile{
    background-image: url(https://dummyimage.com/997x300/000/fff);
    width:997px;
    height:300px;
  }
  .separate{
    height: 1px;
    margin: 5px 0;
    border-top: 1px solid #ddd;
    text-align: center;
  }
  body {
    margin:0px;
  }

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-white {
    background: white;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
