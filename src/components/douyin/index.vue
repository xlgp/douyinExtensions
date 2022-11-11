<template>
  <div>
    <dy-video-css-dialog />
    <dy-chat />
    <zimu />
  </div>
</template>
<script setup lang="ts">
import useInitData from "./composable/useInitData";
import usePagePlugin from "./composable/usePagePlugin";
useInitData();
usePagePlugin();
</script>
