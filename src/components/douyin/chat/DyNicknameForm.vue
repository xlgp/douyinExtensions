<template>
  <el-form-item :label="label">
    <el-input v-model="filterNickname" />
  </el-form-item>
</template>
<script lang="ts" setup>
import { useChatStore } from "./store/Chat";
const label = "用户昵称";
const chatStore = useChatStore();
const { filterNickname } = storeToRefs(chatStore);

watch(
  () => chatStore.filterNickname,
  () => {
    chatStore.saveFilterNickname();
  }
);
</script>
