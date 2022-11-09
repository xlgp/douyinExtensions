<template>
  <el-form-item :label="label">
    <el-select
      class="dy-filter-select"
      v-model="filterFields"
      filterable
      allow-create
      multiple
      popper-class="dy-filter-select-popper"
      default-first-option
    >
      <el-option
        v-for="item in filterFieldList"
        :key="item.value"
        :label="item.value"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>
<script setup lang="ts">
import useFilterSelect from "./composable/useFilterSelect";
import { useChatStore } from "./store/Chat";

const chatStore = useChatStore();

const { label } = useFilterSelect();

const { filterFieldList } = storeToRefs(chatStore);

const filterFields = ref(filterFieldList.value.map((item) => item.value));

</script>
<style>
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
}
.dy-filter-select-popper
  .el-select-dropdown.is-multiple
  .el-select-dropdown__item.selected,
.dy-filter-select-popper .el-select-dropdown.is-multiple .el-select-dropdown__item.hover {
  background-color: #0e0e1c26;
}
.dy-filter-select-popper.el-select__popper {
  background-color: #161722f7;
  border-color: #262626;
}
.dy-filter-select-popper.el-popper .el-popper__arrow::before {
  border-color: #262626;
  background-color: #161722f7;
}
</style>
