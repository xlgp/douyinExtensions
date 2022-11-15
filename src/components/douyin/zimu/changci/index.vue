<template>
  <ChangCiItem
    v-for="(changci, index) in changCiList"
    :key="index"
    :changci="changci"
    :is-active="false"
  />
</template>
<script setup lang="ts">
import { useZimuStore } from "../store/Zimu";

const { activatedChangDuan } = useZimuStore();

const changCiList = reactive(activatedChangDuan.changCiList);
</script>
