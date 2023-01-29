<template>
  <div class="tips-wrap">
    <span>共有 {{ items.length }} 项</span>
    <el-button @click="handleClear" text size="small" type="danger">清空</el-button>
  </div>
  <el-scrollbar ref="scrollbarRef" height="300px">
    <DyChatItem
      @vnode-mounted="handleChildMounted"
      v-for="(item, index) in items"
      :data="item"
    >
      <div v-if="showTips(index)" class="tips">最新信息</div>
    </DyChatItem>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { useChatStore } from "./store/Chat";

const scrollbarRef = ref();

const chatStore = useChatStore();
const items = chatStore.filterChatItems;

const showTips = (index: number) => {
  return chatStore.lastUnReadDyChatIndex == index;
};

const handleChildMounted = () => {
  let scrollHeight = scrollbarRef.value.wrapRef.scrollHeight;
  scrollbarRef.value.setScrollTop(scrollHeight);
};

const handleClear = () => {
  chatStore.clearFilterChatItems();
};
</script>
<style scoped>
.tips {
  text-align: center;
  font-size: 11px;
  margin: 10px 0px;
  color: var(--el-color-info-light-3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.tips:before,
.tips:after {
  content: "";
  height: 0px;
  border-bottom: 1px solid;
  flex: 1 1;
}

.tips:after {
  margin: 0 40px 0 20px;
}
.tips::before {
  margin: 0 20px 0 40px;
}
.tips-wrap {
  display: flex;
  margin-bottom: 10px;
}
.tips-wrap span {
  flex: auto;
  color: var(--el-color-info-light-5);
}
.tips-wrap .el-button.is-text:not(.is-disabled):focus,
.tips-wrap .el-button.is-text:not(.is-disabled):hover {
  background-color: #f5c0c052;
  color: #fff;
}
</style>
