<template>
  <el-config-provider :z-index="zIndex">
    <douyin />
  </el-config-provider>
</template>
<script setup lang="ts">
const zIndex = ref(10240);
</script>
