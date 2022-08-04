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
const video: HTMLVideoElement = (inject("video") as unknown) as HTMLVideoElement;
const form = reactive({
  scale: 1,
  rotate: 0,
  translateX: 0,
  translateY: 0,
});
const scaleSliderOptions = reactive({
  min: 0.4,
  max: 3,
  step: 0.05,
  marks: { 0.4: "0.4", 3: "3" },
});
const rotateSliderOptions = reactive({
  min: 0,
  max: 360,
  step: 1,
  marks: { 0: "0", 360: "360" },
});
const translateOptions = {
  min: -100,
  max: 100,
  step: 1,
  marks: { "-100": "-100", 100: "100" },
};

const translateXSliderOptions = reactive(Object.assign({}, translateOptions));
const translateYSliderOptions = reactive(Object.assign({}, translateOptions));

const transformText = computed(() => {
  return [
    "scale(" + form.scale + ")",
    "translate(" + form.translateX + "px," + form.translateY + "px)",
    "rotate(" + form.rotate + "deg)",
  ].join(" ");
});

watch(transformText, (transformText) => {
  video.style.transform = transformText;
});
</script>
<style scope>
.el-form-item {
  margin-bottom: 26px;
}
</style>
