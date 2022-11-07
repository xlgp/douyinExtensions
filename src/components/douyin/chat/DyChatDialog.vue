<template>
  <div>
    <icon-chat @click="dialogVisible = true" />
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
      </template>
      <dy-nickname-form />
      <dy-chat-list />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import usedialogOptions from "./composable/usedialogOptions";

const { chatWidth } = usedialogOptions();

const dialogVisible = ref(false);

const dialogOptions = reactive({
  title: "Chat组件",
  modal: false,
  "close-on-click-modal": false,
  width: chatWidth + "px",
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
