<script>
export default {
  name: 'Global',
  data () {
    return {
      nodata: ['111'],
      number: [1]
    }
  },
  created () {
    this.getnotice()
  },
  methods: {
    startMove () {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0
        } else {
          this.number += 1
        }
        this.startMove()
      }, 2000) // 滚动不需要停顿则将2000改成动画持续时间
    },
    getnotice: function () {
      // let that = this
      let i, q
      this.$ajax.get(
        'http://47.106.250.33:7002/api/showPostTitle')
        .then(function (response) {
          console.log(response)
          if (response.data) {
            q = response.data
            for (i = 0; i < q.length; i++) {
              this.nodata.push(q[i].poster_title)
              this.number.push(q[i].poster_id)
            }
            // that.$router.push('/AfterLogin')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
