<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :offset="4">
        <div class="info_edit">
          <el-row>
            <el-col :span="6" :offset="1">
              <el-progress type="circle" :percentage="25"></el-progress>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-white"></div></el-col>
            <el-col :span="12" style="margin-top:1%">
              个人资料完成度<span class="percent">25%</span>
              <div style="margin-top: 15px"><el-button type="primary" icon="el-icon-edit" size="small" style="margin-right: 10px"></el-button>去编辑个人信息</div>
            </el-col>
          </el-row>
        </div>
        <div class="photos">
          <div class="photos-header">
            相册
          </div>
          <div class="separate"></div>
          <div style="margin: 0 5px;">
            <div class="photos-pre">
              <img src="https://dummyimage.com/344x500/054/fff" alt="" style="width: 100%;height: 100%;">
            </div>
          </div>
          <div class="separate"></div>
          <div class="photos-seemore">
            <a href="#">查看更多 ></a>
          </div>
        </div>
      </el-col>
      <el-col :span="10" >
        <div class="log" >
          <div style="background-color: white">
            <div>
              <img src="../assets/photo.jpg" class="photo">
              <strong class="name">jiahan</strong>
              <p class="peragrph">aaa天哪树怎么画树怎么画树怎么画啊！！！！！！！！</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="10" >
        <div class="log" >
          <div style="background-color: white">
            <div>
              <img src="../assets/photo.jpg" class="photo">
              <strong class="name">jiahan</strong>
              <p class="peragrph">aaa天哪树怎么画树怎么画树怎么画啊！！！！！！！！</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MyMoment'
}
</script>

<style scoped>
  .log{
    background-color: #fff;
    text-align: left;
    padding: 10px;
    margin-bottom: 10px;
  }
  .photo{
    width: 50px;
    height: 50px;
    float: left;
    margin: 5px;
  }
  .name{
    font-size: 15px;
    margin-top: 15px;
  }
  .peragrph{
    margin-bottom: 10px;
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
  .separate{
    height: 1px;
    margin: 5px 0;
    border-top: 1px solid #ddd;
    text-align: center;
  }
  body {
    margin:0px;
  }
  .bg-white {
    background: white;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
