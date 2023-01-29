<template>
  <el-switch v-model="value" inline-prompt style="--el-switch-off-color: #979797" active-text="是" inactive-text="否" />
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed<boolean>({
  set(value) {
    emit("update:modelValue", value);
  },
  get() {
    return props.modelValue;
  }
});
</script>
<style scoped>
:deep(.el-switch__action) {
  background-color: #161722;
}
</style>
