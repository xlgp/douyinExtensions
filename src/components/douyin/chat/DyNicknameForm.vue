<template>
  <el-form :model="form" label-width="100px">
    <el-form-item :label="label">
      <el-input v-model="form.nickname" />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
const label = "用户昵称";
const form = reactive({
  nickname: "",
});
</script>
