<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="margin-top: -10px">
      <el-menu-item index="1" style="float:right">个人页面</el-menu-item>
      <el-submenu index="2" style="float:right">
        <template slot="title" >语言</template>
        <el-menu-item index="2-1">简体中文</el-menu-item>
        <el-menu-item index="2-2">繁体中文</el-menu-item>
        <el-menu-item index="2-3">English</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'top_tab',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
