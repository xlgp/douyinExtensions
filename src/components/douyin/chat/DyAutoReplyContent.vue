<template>
  <el-form-item label="自动回复">
    <el-switch
      v-model="isAutoReply"
      inline-prompt
      active-text="是"
      inactive-text="否"
      style="--el-switch-off-color: #ff4949"
    />
  </el-form-item>
</template>
<script lang="ts" setup>
import { useChatStore } from "./store/Chat";
const { isAutoReply } = storeToRefs(useChatStore());
</script>
