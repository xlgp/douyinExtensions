<template>
  <el-form-item label="快捷回复">
    <el-input
      v-model="inputValue"
      @keyup.enter="handleAddTag"
      placeholder="输入标签"
      class="input"
    >
      <template #append>
        <el-button class="icon-btn" :icon="Plus" @click="handleAddTag" />
      </template>
    </el-input>
  </el-form-item>
  <el-tag
    v-for="tag in replyList"
    :key="tag"
    class="mx-1"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </el-tag>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { useChatStore } from "./store/Chat";

const store = useChatStore();
const { replyList } = storeToRefs(store);
const inputValue = ref("");

const handleClose = (tag: string) => {
  replyList.value.splice(replyList.value.indexOf(tag), 1);
};

watch(
  () => store.replyList,
  () => {
    store.saveReplyList();
  },
  { deep: true }
);

const handleAddTag = () => {
  if (inputValue.value) {
    replyList.value.push(inputValue.value);
    inputValue.value = "";
  }
};
</script>

<style scoped>
.el-input-group__append button.icon-btn {
  background-color: #060716d1;
}

.mx-1 {
  margin: 0.15rem;
}

.input {
  margin-bottom: 15px;
}

.el-tag {
  background-color: #1617226e;
  color: var(--el-color-info-light-5);
  outline: 1px dashed;
  border: none;
}
</style>
