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
      <icon-chat @click="handleClick" />
    </template>
    <div style="padding: 10px">
      <dy-nickname-form />
      <dy-chat-list />
    </div>
  </el-popover>
</template>
<script setup lang="ts">
import usechatOptions from "./composable/usedychatOptions";
import useDonyinPlugin from "./composable/useDouyinPlugin";
import { chatProvideKey, ChatProvideType } from "./constant";

const { chatOptions } = usechatOptions();
useDonyinPlugin();

const visible = ref(false);

const close = () => {
  visible.value = false;
};

const handleClick = () => {
  visible.value = !visible.value;
};
provide<ChatProvideType>(chatProvideKey, { close });
</script>
<style>
.el-popover.dy-el-popover {
  background-color: #1e1e1ed1;
  padding: 0;
  border-color: #64646442;
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
