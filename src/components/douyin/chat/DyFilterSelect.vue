<template>
  <el-form-item :label="label" style="margin-bottom: 10px">
    <el-select
      class="dy-filter-select"
      v-model="filterFieldList"
      filterable
      allow-create
      collapse-tags
      :no-data-text="noDataText"
      multiple
      popper-class="dy-filter-select-popper"
      default-first-option
    >
      <el-option
        v-for="item in filterFieldList"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </el-form-item>
</template>
<script setup lang="ts">
import useFilterSelect from "./composable/useFilterSelect";
import { useChatStore } from "./store/Chat";

const chatStore = useChatStore();

const { label, noDataText } = useFilterSelect();

const { filterFieldList } = storeToRefs(chatStore);

watch(
  () => chatStore.filterFieldList,
  () => {
    chatStore.saveFilterFieldList();
  }
);
</script>
<style>
.dy-filter-select {
  width: 100%;
}
.dy-filter-select .el-select__tags .el-tag--info {
  background-color: #1617226e;
  color: var(--el-color-info-light-5);
  outline: 1px dashed;
}
.dy-filter-select .el-select__input {
  color: var(--el-fill-color);
}

.dy-filter-select-popper .el-select-dropdown__item {
  color: var(--el-color-info-light-5);
  display: inherit;
}
.dy-filter-select-popper
  .el-select-dropdown.is-multiple
  .el-select-dropdown__item.selected,
.dy-filter-select-popper .el-select-dropdown.is-multiple .el-select-dropdown__item.hover {
  background-color: #0e0e1c26;
}
.dy-filter-select-popper.el-select__popper[role="tooltip"] {
  background-color: #161722f7;
  border-color: #262626;
}
.dy-filter-select-popper.el-popper[role="tooltip"] .el-popper__arrow::before {
  border-color: #262626;
  background-color: #161722f7;
}
</style>
