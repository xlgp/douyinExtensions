<template>
  <div>
    <dy-video-css-dialog />
    <dy-chat />
  </div>
</template>
<script setup lang="ts">
import useInitData from "./composable/useInitData";

useInitData();
</script>
