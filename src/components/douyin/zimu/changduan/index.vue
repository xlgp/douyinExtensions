<template>
  <ChangDuanItem v-for="data in datalist" :key="data.name" :data="data" />
</template>
<script setup lang="ts">
import useInitData from "../composable/useInitData";
import { ChangDuanDetailType } from "../data.d";
const { getChangDuanDetail } = useInitData();

const datalist: ChangDuanDetailType[] = reactive([getChangDuanDetail()]);
</script>
