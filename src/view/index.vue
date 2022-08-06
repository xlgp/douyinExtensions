<template>
  <el-config-provider :z-index="zIndex">
    <dy-video-css-dialog />
  </el-config-provider>
</template>
<script setup lang="ts">
const zIndex = ref(3000);
</script>
