<template>
  <div class="icon-list-box">
    <IconList :icons="bottomIcons" v-model="icon" />
    <IconList :icons="icons" v-model="icon" />
  </div>
</template>
<script setup lang="ts">
import { insertEmojiToTextAreaElem } from "./useEmojiPlugin";

const icons = reactive(["zan", "666"]);
const bottomIcons = reactive(["ciya", "wulian"]);
const icon = ref("");
watch(icon, (value) => {
  insertEmojiToTextAreaElem("[" + value + "]", true);
});
</script>
<style scoped>
.icon-list-box {
  display: flex;
  max-height: 24px;
  flex-direction: column-reverse;
  overflow: hidden;
  transition: 0.2s;
}
.icon-list-box:hover {
  max-height: 300px;
}
</style>
