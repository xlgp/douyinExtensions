<template>
  <div v-for="item in data" class="reply-box">
    <span class="time">{{ formatDate(item.createdAt) }}</span>
    {{ item.content }}
  </div>
</template>
<script setup lang="ts">
import { formatDate } from '../../../utils';
import { AutoReplyChatItem } from './constant';

const props = defineProps({
  data: {
    type: Array<AutoReplyChatItem>
  },
});
const { data } = toRefs(props);
</script>
<style scoped>
.reply-box {
  margin: 2px 0px 2px 30px;
  border: 1px dashed var(--el-text-color-regular);
  padding: 2px;
  border-radius: 4px;
}
.time {
  color: var(--el-color-info-light-5);
  font-size: 0.8em;
  margin-right: 4px;
}
</style>
