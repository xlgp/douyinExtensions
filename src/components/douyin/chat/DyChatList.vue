<template>
  <el-scrollbar ref="scrollbarRef" height="300px">
    <DyChatItem @vnode-mounted="handleChildMounted" v-for="item in items" :data="item" />
  </el-scrollbar>
</template>
<script setup lang="ts">
import { useChatStore } from "./store/Chat";

const scrollbarRef = ref();

const chatStore = useChatStore();
const items = chatStore.filterChatItems;

const handleChildMounted = () => {
  let scrollHeight = scrollbarRef.value.wrap$.scrollHeight;
  scrollbarRef.value.setScrollTop(scrollHeight);
};

onMounted(() => {});
</script>
