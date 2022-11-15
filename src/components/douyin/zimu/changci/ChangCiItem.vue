<template>
  <div class="changci-item" :class="{ 'is-active': isActive }">
    <span class="changci-text">{{ changci.content }}</span>
  </div>
</template>
<script setup lang="ts">
import { ChangCiType } from "../data";

defineProps({
  changci: {
    require: true,
    type: Object,
    default: {} as ChangCiType,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.changci-item {
  padding: 10px 0px;
  cursor: pointer;
  text-align: center;
}
.changci-item:hover .changci-text {
  color: var(--el-color-primary);
}
.changci-item.is-active .changci-text {
  color: var(--el-color-primary);
}
.changci-text {
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
}

:deep(.el-scrollbar__bar.is-vertical) {
  width: 2px;
}
</style>
