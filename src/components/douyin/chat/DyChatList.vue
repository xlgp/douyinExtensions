<template>
  <div class="tips-wrap">
    <span>共有 {{ items.length }} 项</span>
    <el-button @click="handleClear" text plain size="small" type="danger">清空</el-button>
  </div>
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

const handleClear = () => {
  chatStore.clearFilterChatItems();
};
</script>
<style scoped>
.tips-wrap {
  display: flex;
  margin-bottom: 10px;
}
.tips-wrap span {
  flex: auto;
  color: var(--el-color-info-light-5);
}
</style>
