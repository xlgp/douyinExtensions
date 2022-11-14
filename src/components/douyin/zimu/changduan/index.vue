<template>
  <ChangDuanItem v-for="data in datalist" :key="data.name" :data="data" />
</template>
<script setup lang="ts">
import useInitData from "../composable/useInitData";
import { ChangDuanItemType } from "../data.d";
const { getChangduanItem } = useInitData();

const datalist: ChangDuanItemType[] = reactive(getChangduanItem());
</script>
