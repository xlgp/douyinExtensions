<template>
  <el-config-provider :z-index="zIndex">
    <dy-video-css-dialog />
    <dy-chat />
  </el-config-provider>
</template>
<script setup lang="ts">
const zIndex = ref(10240);
</script>
