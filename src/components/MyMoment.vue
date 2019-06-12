<template>
  <div>
        <div class="log" style="margin: 0 auto; width: 630px" >
          <div style="overflow:scroll; background-color: white; height: 800px ">
            <div class="family-forum" >
              <div class="post-text">
                <el-input
                  type="textarea"
                  autosize
                  placeholder="发布信息~~~"
                  v-model="textarea1">
                </el-input>
                <el-button round>发布</el-button>
              </div>
              <div class="passages-container" >
                <div class="passage-group" >
                  <div class="left-forum" >
                    <img class="user-img"  src="../assets/photo.jpg">
                  </div>
                  <div class="right-forum" >
                    <div class="user-and-delete" >
                      <a class="username" href="/">小文</a>
                      <el-button type="text">删除</el-button>
                    </div>
                    <div class="release-time">2019-06-01  12:00:00</div>
                    <div class="forum-content" >
                      没钱旅游！
                      没钱旅游！
                      没钱旅游！
                    </div>
                  </div>
                </div>
                <div class="comments-group" >
                  <div class="comments-detail">
                    <a class="reviewer-name" href="/" >小明</a>
                    <div class="comments-content" >：你说什么？我看不见？</div>
                  </div>
                  <div class="comment-box" >
                    <el-input
                      type="textarea"
                      autosize
                      placeholder="发表评论~~~"
                      v-model="textarea1">
                    </el-input>
                    <button class="send-btn">发送</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'MyMoment',
  data () {
    return {
      textarea1: '',
      textarea2: '',
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>

<style scoped>
  .log{
    background-color: #fff;
    text-align: left;
    padding: 10px;
    margin-bottom: 10px;
  }
  .photos-seemore a{
    text-decoration-line: none;
    color: black;

  }
  .photos-seemore a:hover{
    color: rgb(253, 152, 0)
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
  body {
    margin:0px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .family-forum{
    margin: 5px;
    width: auto;
  }
  .post-text{
    padding: 1px;
    border:3px solid rgba(245, 245, 220, 0.05);
  }
  .passages-container{
    margin-top: 15px;
  }
  .passage-group {
    margin: 1px;
    border:2px solid chartreuse;
    display: flex;
  }
  .left-forum{
    width: 40px;
  }
  .user-img{
    border:solid;
    weight:35px;
    height:35px;
    border-radius: 50%;
  }
  .release-time{
    font-size: 12px;
  }
  .comments-group{
    margin:0 auto;
    width: 80%;
    background-color: #f5f5dc;
  }
  .comments-detail{
    margin-top: 1px;
    display: flex;
  }
  .comment-box{
    border:1px solid #eeeeee;
    display: flex;
  }
  .send-btn{
  }
</style>
