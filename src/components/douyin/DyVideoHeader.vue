<template>
  <el-switch
    v-model="modelValue"
    inline-prompt
    style="--el-switch-off-color: #979797"
    active-text="是"
    inactive-text="否"
    @change="handleSwitchChange"
  />
</template>
<script setup lang="ts">
const { modelValue } = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleSwitchChange = (value: any) => {
  emit("update:modelValue", value);
};
</script>
<style scoped>
:deep(.el-switch__action) {
  background-color: #161722;
}
</style>
