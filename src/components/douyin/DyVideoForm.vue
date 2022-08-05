<template>
  <el-form :model="form" label-width="100px">
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
        :min="translateXSliderOptions.min"
        :max="translateXSliderOptions.max"
        :step="translateXSliderOptions.step"
        :marks="translateXSliderOptions.marks"
      />
    </el-form-item>
    <el-form-item label="移动（上下）">
      <el-slider
        v-model="form.translateY"
        :min="translateYSliderOptions.min"
        :max="translateYSliderOptions.max"
        :step="translateYSliderOptions.step"
        :marks="translateYSliderOptions.marks"
      />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import useOptions from "./composable/useOptions";

const video: HTMLVideoElement = (inject("video") as unknown) as HTMLVideoElement;

const {
  transformText,
  translateOptions,
  translateXSliderOptions,
  translateYSliderOptions,
  scaleSliderOptions,
  rotateSliderOptions,
  form,
} = useOptions;

watch(transformText, (transformText) => {
  video.style.transform = transformText;
});
</script>
<style scoped>
.el-form-item {
  margin-bottom: 26px;
}
</style>
