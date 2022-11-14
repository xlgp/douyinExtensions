<template>
  <div class="changci-item" v-for="(changci, index) in changCiList" :key="index">
    <div class="changci-text">{{ changci.content }}</div>
  </div>
</template>
<script setup lang="ts">import useInitData from "../composable/useInitData";

const { getChangCiList } = useInitData();
const changCiList = reactive(getChangCiList());
</script>
<style scoped>
.changci-text {
  white-space: nowrap;
  overflow: hidden;
}
</style>
