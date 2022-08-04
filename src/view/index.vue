<template>
  <el-config-provider :z-index="zIndex">
    <div @click="dialogVisible = true" class="dy-ext-btn">
      <ccs3 />
    </div>
    <el-dialog
      class="dy-dialog"
      v-model="dialogVisible"
      :title="dialogOptions.title"
      :modal="dialogOptions.modal"
      :close-on-click-modal="dialogOptions['close-on-click-modal']"
      :width="dialogOptions.width"
      draggable
    >
      <layout />
    </el-dialog>
  </el-config-provider>
</template>
<script setup lang="ts">
const zIndex = ref(3000);
const dialogVisible = ref(false);
const dialogOptions = reactive({
  title: "视频区样式",
  modal: false,
  "close-on-click-modal": false,
  width: "500px",
});
</script>
<style scope>
.el-dialog {
  background-color: #1617228f;
}
.el-slider__button {
  background-color: #161722;
}
.el-slider__runway {
  background-color: #6c6c6c;
}
.el-slider__stop {
  background-color: #848484;
}
.el-form-item__label,
.el-slider__marks-text,
.el-dialog__title {
  color: #e5e5e5;
}

.el-slider__marks-text {
  margin-top: 8px;
}
.el-slider__marks-text:last-child {
  left: initial !important;
  right: 0;
  transform: translateX(50%);
}
</style>
