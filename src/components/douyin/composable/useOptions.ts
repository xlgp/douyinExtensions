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
  marks: { 0.4: "0.4", [form.scale]: form.scale + "", 3: "3" },
});
const rotateSliderOptions = reactive({
  min: 0,
  max: 360,
  step: 1,
  marks: { 0: "0", 90: "90", 180: "180", 270: "270", 360: "360" },
});
const translateOptions = {
  min: -100,
  max: 100,
  step: 1,
  marks: { "-100": "-100", 100: "100" },
};

const translateXSliderOptions = reactive({
  min: -100,
  max: 100,
  step: 1,
  marks: {
    "-100": "-100",
    [form.translateX]: form.translateX + "",
    100: "100",
  },
});
const translateYSliderOptions = reactive({
  min: -100,
  max: 100,
  step: 1,
  marks: {
    "-100": "-100",
    [form.translateY]: form.translateY + "",
    100: "100",
  },
});

const transformText = computed(() => {
  return [
    "scale(" + form.scale + ")",
    "translate(" + form.translateX + "px," + form.translateY + "px)",
    "rotate(" + form.rotate + "deg)",
  ].join(" ");
});

export default {
  transformText,
  translateOptions,
  translateXSliderOptions,
  translateYSliderOptions,
  form,
  rotateSliderOptions,
  scaleSliderOptions,
};
