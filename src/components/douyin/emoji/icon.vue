<template>
  <i class="emoji-icon">{{ text }}</i>
</template>
<script setup lang="ts">
defineProps({
  text: String,
});
</script>
<style scoped>
.emoji-icon {
  width: 24px;
  height: 24px;
  display: flex;
  background-size: contain;
  cursor: pointer;
  margin: 4px;
  font-style: normal;
  font-size: 20px;
  justify-content: center;
  align-items: center;
}
</style>
