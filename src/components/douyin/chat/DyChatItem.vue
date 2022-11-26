<template>
  <div>
    <slot></slot>
    <div class="wrap">
      <div class="item">
        <div class="nickname">{{ showTime }} {{ nickname }}</div>
        <div v-html="data.content"></div>
      </div>
      <dy-chat-dropdown @reply="handleReply" class="item-dropdown" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { insertNicknameToTextAreaElem } from "./composable/useChatUtil";
import { sendReply } from "./composable/useTextareaPlugin";
import { chatProvideKey, ChatProvideType } from "./constant";

const { close } = inject<ChatProvideType>(chatProvideKey, {} as ChatProvideType);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = toRefs(props);
const nickname = computed(() => {
  return "@" + data.value.nickname + ":";
});

const showTime = computed(() => {
  let date: Date = data.value.createdAt;
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  return (
    ((h < 10 && "0" + h) || h) +
    ":" +
    ((m < 10 && "0" + m) || m) +
    ":" +
    ((s < 10 && "0" + s) || s)
  );
});

const handleReply = (value: string | null) => {
  close();
  if (value) {
    sendReply(nickname.value + " " + value);
  } else {
    insertNicknameToTextAreaElem(nickname.value, true);
  }
};
</script>
<style scoped>
.wrap {
  display: flex;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid var(--el-text-color-regular);
  margin-bottom: 6px;
  color: #e5e5e5;
  align-items: center;
  background-color: #60626626;
}
.nickname {
  color: var(--el-color-info-light-5);
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item {
  flex: auto;
  display: grid;
}
.item-dropdown {
  flex: none;
  margin-left: 6px;
}
</style>
