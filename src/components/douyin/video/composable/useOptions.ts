import { Ref } from "vue";

export default (transformDisabled: Ref<boolean>) => {

  let video = document.getElementsByTagName("video")[0] as HTMLVideoElement;

  let clientRect = video.getBoundingClientRect();
  let videoStyleTransform = video.style.transform;

  const form = reactive({
    scale: 1,
    rotate: 0,
    translateX: 0,
    translateY: 0,
  });
  const scaleSliderOptions = reactive({
    min: 0.8,
    max: 4,
    step: 0.05,
    marks: { 0.8: "0.8", [form.scale]: form.scale + "", 4: "4" },
  });
  const rotateSliderOptions = reactive({
    min: 0,
    max: 360,
    step: 1,
    marks: { 0: "0°", 90: "90°", 180: "180°", 270: "270°", 360: "360°" },
  });

  const translateSliderOptions = computed(() => {
    let rect = video.getBoundingClientRect();
    let width = clientRect.width;
    let height = clientRect.height;
    if (form.scale >= 1) {
      width = (rect.width - clientRect.width) / 4;
      height = (rect.height - clientRect.height) / 4;
    } else {
      width = (clientRect.width - rect.width) / 4;
      height = (clientRect.height - rect.height) / 4;
    }

    width = Math.floor(width);
    height = Math.floor(height);

    let X = {
      min: -width,
      max: width,
      step: 1,
      marks: { ["-" + width]: width + "", 0: "0", [form.translateX]: form.translateX + "", [width]: width + "" }
    };
    let Y = {
      min: -height,
      max: height,
      step: 1,
      marks: { ["-" + height]: height + "", 0: "0", [form.translateY]: form.translateY + "", [height]: height + "" }
    };
    return { X, Y };
  });

  const transformText = computed(() => {
    return [
      "scale(" + form.scale + ")",
      "translate(" + form.translateX + "px," + form.translateY + "px)",
      "rotate(" + form.rotate + "deg)",
    ].join(" ");
  });

  const changeVideoStyleTransform = (transformText: string) => {
    video.style.transform = transformText;
  }

  watch(transformText, changeVideoStyleTransform);
  watch(transformDisabled, (disabled) => {
    let text = videoStyleTransform;
    if (disabled == false) {
      text = transformText.value;
    }
    changeVideoStyleTransform(text)
  });

  return {
    transformText,
    translateSliderOptions,
    form,
    rotateSliderOptions,
    scaleSliderOptions
  }
}
