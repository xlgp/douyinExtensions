<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    draggable
    @opened="handleOpened"
    ref="dialogRef"
    :modal="false"
    :append-to-body="true"
  >
    <el-tabs v-model="activeName" class="zimu-wrapper">
      <el-tab-pane :label="tabPaneList[0].label" :name="tabPaneList[0].name"
        >唱段</el-tab-pane
      >
      <el-tab-pane :label="tabPaneList[1].label" :name="tabPaneList[1].name"
        >唱词</el-tab-pane
      >
    </el-tabs>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
const tabPaneList = reactive([
  { label: "唱段", name: "changDuan" },
  { label: "唱词", name: "changCi" },
]);

const dialogRef = ref();

onMounted(() => {
  console.dir(dialogRef.value.$parent);
});

const handleOpened = () => {
  console.log(dialogRef.value, dialogRef.value.$el);
};

const dialogVisible = ref(true);

const activeName = ref(tabPaneList[0].name);
</script>
<style scoped></style>
