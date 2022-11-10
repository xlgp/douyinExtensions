<template>
  <el-popover
    popper-class="dy-el-popover"
    placement="left-end"
    effect="dark"
    :show-arrow="false"
    :offset="5"
    :visible="visible"
    :title="chatOptions.title"
    :width="chatOptions.width"
    :hide-after="100"
    :persistent="false"
  >
    <template #reference>
      <el-badge :value="chatStore.unreadChatItemCount" :hidden="badgeHidden">
        <icon-chat @click="handleClick" />
      </el-badge>
    </template>
    <div style="padding: 10px">
      <dy-filter-select />
      <dy-chat-list />
    </div>
  </el-popover>
</template>
<script setup lang="ts">
import usechatOptions from "./composable/usedychatOptions";
import { chatProvideKey, ChatProvideType } from "./constant";
import useDonyinPlugin from "./composable/useDouyinPlugin";
import useChatStyle from "./composable/useChatStyle";
import { useChatStore } from "./store/Chat";

const chatStore = useChatStore();
const { chatOptions } = usechatOptions();
useDonyinPlugin();
useChatStyle();

const visible = ref(false);

const badgeHidden = computed(() => {
  return visible.value || chatStore.unreadChatItemCount == 0;
});

const close = () => {
  visible.value = false;
};

const handleClick = () => {
  visible.value = !visible.value;
};

watch(visible, () => {
  chatStore.setLastVisitDyChatTime();
});

provide<ChatProvideType>(chatProvideKey, { close });
</script>
<style scoped>
:deep(.el-badge__content.is-fixed) {
  top: 0;
  right: initial;
  transform: translateY(-30%) translateX(-50%);
}
</style>
<style>
.el-popover.dy-el-popover {
  background-color: #060716d1;
  padding: 0;
  border-color: #060716d1;
}
.el-popover.dy-el-popover .el-popover__title {
  color: var(--el-color-info-light-9);
  padding: 10px 0;
  text-indent: 10px;
}
.el-popover.dy-el-popover .el-form-item__label {
  color: var(--el-color-info-light-3);
}
.dy-el-popover .el-input__wrapper {
  background-color: #60626640;
}
.dy-el-popover .el-input__inner {
  color: var(--el-fill-color);
}
</style>
