<template>
  <div>
    <dy-video-css-dialog />
    <dymenu />
    <dy-chat />
  </div>
</template>
<script setup lang="ts">
import useInitData from "./composable/useInitData";
import usePagePlugin from "./composable/usePagePlugin";
import { useDouyinStore } from "./store/douyin";

const store = useDouyinStore();

const { pageCompDisplay } = storeToRefs(store);

useInitData();

const { init, toggle } = usePagePlugin();
init();
toggle(pageCompDisplay.value);
watch(pageCompDisplay, (val) => toggle(val));

</script>
