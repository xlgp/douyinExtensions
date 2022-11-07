<template>
  <div>
    <icon-css3 @click="dialogVisible = true" />
    <el-dialog
      class="dy-dialog"
      v-model="dialogVisible"
      :modal="dialogOptions.modal"
      :close-on-click-modal="dialogOptions['close-on-click-modal']"
      :width="dialogOptions.width"
      draggable
    >
      <template #header="{ titleId, titleClass }">
        <span :id="titleId" :class="titleClass">{{ dialogOptions.title }}</span>
        <dy-video-header v-model="transformEnable" />
      </template>
      <dy-video-form :disabled="!transformEnable" />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
const dialogVisible = ref(false);
const transformEnable = ref(true);
const dialogOptions = reactive({
  title: "自定义视频区样式",
  modal: false,
  "close-on-click-modal": false,
  width: "500px",
});
</script>
<style scoped>
:deep(.el-dialog) {
  background-color: #1617228f;
}
:deep(.el-dialog__title) {
  color: #e5e5e5;
}
</style>
