<template>
  <el-scrollbar height="300px">
    <DyChatItem v-for="item in items" :data="item" />
  </el-scrollbar>
</template>
<script setup lang="ts">
import { useChatStore } from "./store/Chat";

const chatStore = useChatStore();
const items = chatStore.filterChatItems;
</script>
