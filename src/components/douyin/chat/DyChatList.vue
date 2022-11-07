<template>
  <el-scrollbar height="300px">
    <DyChatItem v-for="item in items" :data="item" />
  </el-scrollbar>
</template>
<script setup lang="ts">
import useChatData from "./composable/useChatData";
const { items } = useChatData();
</script>
