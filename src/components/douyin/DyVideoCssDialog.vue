<template>
  <div>
    <icon-css3 @click="dialogVisible = true" />
    <el-dialog
      class="dy-dialog"
      v-model="dialogVisible"
      :title="dialogOptions.title"
      :modal="dialogOptions.modal"
      :close-on-click-modal="dialogOptions['close-on-click-modal']"
      :width="dialogOptions.width"
      draggable
    >
      <dy-video-form />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
const dialogVisible = ref(false);
const dialogOptions = reactive({
  title: "视频区样式",
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
