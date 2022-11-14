<template>
  <el-tabs v-model="activeName" ref="tabsRef" class="zimu-wrapper">
    <el-tab-pane :label="tabPaneList[0].label" :name="tabPaneList[0].name"
      ><Changduan
    /></el-tab-pane>
    <el-tab-pane :label="tabPaneList[1].label" :name="tabPaneList[1].name"
      ><Changci
    /></el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import useZimu from "./composable/useZimu";

const { activeName, tabPaneList, tabsRef } = useZimu();
</script>
<style scoped>
.zimu-wrapper {
  position: fixed;
  right: 100px;
  top: 100px;
  width: 360px;
  transition: none;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
}
:deep(.el-tabs__header) {
  cursor: move;
  user-select: none;
}
</style>
