<template>
  <div class="area" >
      <el-cascader
        class="long"
        size="large"
        :options="regionData"
        v-model="selectedOptions2"
        @change="handleChange">
      </el-cascader>
    <!--<div class="bind">-->
      <!--<div>绑定值：{{selectedOptions2}}</div>-->
      <!--<div>区域码转汉字：{{CodeToText[selectedOptions2[0]]}},{{CodeToText[selectedOptions2[1]]}},{{CodeToText[selectedOptions2[2]]}}</div>-->
      <!--<div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions2[0]], CodeToText[selectedOptions2[1]], CodeToText[selectedOptions2[2]])}}</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import {
  regionData,
  CodeToText,
  TextToCode
} from '../../dist/app.js'

export default {
  data () {
    return {
      CodeToText,
      TextToCode,
      BeiJing: CodeToText['110000'],
      regionData,
      selectedOptions2: ['120000', '120100', '120101']
    }
  },

  methods: {
    handleChange (value) {
      console.log(value)
    },
    convertTextToCode (provinceText, cityText, regionText) {
      let code = ''
      if (provinceText && this.TextToCode[provinceText]) {
        const province = this.TextToCode[provinceText]
        code += province.code + ', '
        if (cityText && province[cityText]) {
          const city = province[cityText]
          code += city.code + ', '
          if (regionText && city[regionText]) {
            code += city[regionText].code
          }
        }
      }
      return code
    }
  },

  mounted () {
    console.log(this.TextToCode['北京市'].code)
    console.log(this.TextToCode['北京市']['市辖区'].code)
    console.log(this.TextToCode['北京市']['市辖区']['朝阳区'].code)
  }
}
</script>

<style>

</style>
