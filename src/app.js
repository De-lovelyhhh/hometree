import REGION_DATA from 'china-area-data'

// code转汉字大对象
const CodeToText = {}
// 汉字转code大对象
const TextToCode = {}
const provinceObject = REGION_DATA['86'] // 省份对象
const regionData = []
CodeToText[''] = '全部'

// 计算省
for (const prop in provinceObject) {
  regionData.push({
    value: prop, // 省份code值
    label: provinceObject[prop] // 省份汉字
  })
  CodeToText[prop] = provinceObject[prop]
  TextToCode[provinceObject[prop]] = {
    code: prop
  }
  TextToCode[provinceObject[prop]]['全部'] = {
    code: ''
  }
}
// 计算市
for (let i = 0, len = regionData.length; i < len; i++) {
  const provinceCode = regionData[i].value
  const provinceText = regionData[i].label
  const provinceChildren = []
  for (const prop in REGION_DATA[provinceCode]) {
    provinceChildren.push({
      value: prop,
      label: REGION_DATA[provinceCode][prop]
    })
    CodeToText[prop] = REGION_DATA[provinceCode][prop]
    TextToCode[provinceText][REGION_DATA[provinceCode][prop]] = {
      code: prop
    }
    TextToCode[provinceText][REGION_DATA[provinceCode][prop]]['全部'] = {
      code: ''
    }
  }
  if (provinceChildren.length) {
    regionData[i].children = provinceChildren
  }
}

// 计算区
for (let i = 0, len = regionData.length; i < len; i++) {
  const province = regionData[i].children
  const provinceText = regionData[i].label
  if (province) {
    for (let j = 0, len = province.length; j < len; j++) {
      const cityCode = province[j].value
      const cityText = province[j].label
      const cityChildren = []
      for (const prop in REGION_DATA[cityCode]) {
        cityChildren.push({
          value: prop,
          label: REGION_DATA[cityCode][prop]
        })
        CodeToText[prop] = REGION_DATA[cityCode][prop]
        TextToCode[provinceText][cityText][REGION_DATA[cityCode][prop]] = {
          code: prop
        }
      }
      if (cityChildren.length) {
        province[j].children = cityChildren
      }
    }
  }
}
export { regionData, CodeToText, TextToCode }
