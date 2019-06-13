<template>
  <div>
    <el-form-item label="账号">
      <el-input v-model="id" style="width: 85%" readonly="readonly">{{id}}</el-input>
    </el-form-item>
    <el-form-item label="二者关系">
      <el-input v-model="relation" style="width: 85%" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width: 70%; margin-top:5%; margin-left:-30%" @click="getReview">获取审核信息</el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'show',
  props: ['id', 'relation'],
  methods: {
    getReview () {
      let url = 'http://47.106.250.33:7002/api/getReview'
      let data, relationship, id
      let info
      /* let data, relation
      let that = this */
      this.$ajax.get(
        url
      ).then(function (response) {
        console.log(response.data[0])
        if (response.data) {
          data = response.data[0]
          switch (data[0].relation) {
            case 1: relationship = '父子/母子'; break
            case 2: relationship = '兄弟姐妹'; break
          }
          id = data[0].passive_user_id
          info.id = id
          info.relationship = relationship
        }
      }).catch(function (error) {
        console.log(error)
      })
      /* xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            data = JSON.parse(xhr.responseText)
            console.log(data)
            if (data) {
              id = data[0].passive_user_id
              switch (data[0].relation) {
                case 1: relationship = '父子/母子'; break
                case 2: relationship = '兄弟姐妹'; break
              }
              info.id = id
              info.relationship = relationship
            }
          } else {
            console.log('error')
          }
        }
      }
      xhr.open('get', url, false)
      xhr.send() */
      this.$emit('showinfo', info)
    }
  }
}
</script>

<style scoped>

</style>
