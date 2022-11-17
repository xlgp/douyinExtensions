<template>
  <el-form :model="form" label-width="100px" :disabled="disabled">
    <el-form-item label="缩放">
      <el-slider
        v-model="form.scale"
        :min="scaleSliderOptions.min"
        :max="scaleSliderOptions.max"
        :step="scaleSliderOptions.step"
        :marks="scaleSliderOptions.marks"
      />
    </el-form-item>
    <el-form-item label="旋转">
      <el-slider
        v-model="form.rotate"
        :min="rotateSliderOptions.min"
        :max="rotateSliderOptions.max"
        :step="rotateSliderOptions.step"
        :marks="rotateSliderOptions.marks"
      />
    </el-form-item>
    <el-form-item label="移动（左右）">
      <el-slider
        v-model="form.translateX"
        :min="translateSliderOptions.X.min"
        :max="translateSliderOptions.X.max"
        :step="translateSliderOptions.X.step"
        :marks="translateSliderOptions.X.marks"
      />
    </el-form-item>
    <el-form-item label="移动（上下）">
      <el-slider
        v-model="form.translateY"
        :min="translateSliderOptions.Y.min"
        :max="translateSliderOptions.Y.max"
        :step="translateSliderOptions.Y.step"
        :marks="translateSliderOptions.Y.marks"
      />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import useOptions from "./composable/useOptions";

const props = defineProps({
  disabled: {
    type: Boolean,
    required: true,
  },
});

const { disabled } = toRefs(props);

const {
  translateSliderOptions,
  scaleSliderOptions,
  rotateSliderOptions,
  form,
} = useOptions(disabled);
</script>
<style scoped>
:deep(.el-form-item) {
  margin-bottom: 26px;
}
:deep(.el-slider__button) {
  background-color: #161722;
}
:deep(.el-slider__runway) {
  background-color: #6c6c6c;
}
:deep(.el-slider__stop) {
  background-color: #848484;
}
:deep(.el-form-item__label) {
  color: #e5e5e5;
}

:deep(.el-slider__marks-text) {
  margin-top: 8px;
  color: #e5e5e5;
}
:deep(.el-slider__marks-text:last-child) {
  left: initial !important;
  right: 0;
  transform: translateX(50%);
}
</style>
