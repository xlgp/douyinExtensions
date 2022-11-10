<template>
  <div>
    <dy-video-css-dialog />
    <dy-chat />
  </div>
</template>
<script setup lang="ts">
import usePagePlugin from "./composable/usePagePlugin";

usePagePlugin();
</script>
