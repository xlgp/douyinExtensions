<template>
  <i class="emoji-icon">{{ name }}</i>
</template>
<script setup lang="ts">
defineProps({
  name: String,
});
</script>
<style scoped>
.emoji-icon {
  width: 24px;
  height: 24px;
  display: flex;
  background-size: contain;
  margin-right: 4px;
  cursor: pointer;
  color: #e8e8e9;
  margin: 4px;
}

i.emoji-icon:last-child {
  margin-right: 0;
}
</style>
