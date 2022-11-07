<template>
  <div class="wrap">
    <div>
      <small>{{ data.nickname }}</small>
    </div>
    <div>{{ data.content }}</div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = toRefs(props);
</script>
<style scoped>
.wrap {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid var(--el-text-color-regular);
  margin-bottom: 6px;
  color: #e5e5e5;
}
</style>
