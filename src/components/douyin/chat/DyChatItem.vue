<template>
  <div>
    <slot name="header"></slot>
    <div class="box">
      <div class="wrap">
        <div class="item">
          <div class="nickname">{{ showTime }} {{ nickname }}</div>
          <div v-html="data.content"></div>
        </div>
        <dy-chat-dropdown @reply="handleReply" class="item-dropdown" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { formatDate } from "../../../utils";
import { getAtNickname, insertNicknameToTextAreaElem } from "./composable/useChatUtil";
import useTextareaPlugin from "./composable/useTextareaPlugin";
import { chatProvideKey, ChatProvideType } from "./constant";

const { sendReply } = useTextareaPlugin();

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

const showTime = computed(() => formatDate(data.value.createdAt));

const handleReply = (value: string | null) => {
  close();
  if (value) {
    sendReply(getAtNickname(data.value.nickname) + value);
  } else {
    insertNicknameToTextAreaElem(data.value.nickname, true);
  }
};
</script>
<style scoped>
.box {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid var(--el-text-color-regular);
  margin-bottom: 6px;
  color: #e5e5e5;
  background-color: #60626626;
}
.wrap {
  display: flex;
  align-items: center;
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
