<template>
  <div>
    <el-header style="background-color: #eff4fa;">
      <TopTab/>
    </el-header>
    <div class="tapbar">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo left out"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <Tree />
  </div>
</template>

<script>
import TopTab from './TopTab.vue'
import Tree from './Tree.vue'
export default {
  components: {TopTab, Tree},
  name: 'AfterLogin',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.left{
  width: 150px;
  height: 100%;
  background-color: #eeeeee;
}
  .tac{
    float:left;
    top:10%;
  }
  .tapbar{
    display: inline;
    left: 2%;
  }
</style>
