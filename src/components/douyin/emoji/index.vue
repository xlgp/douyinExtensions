<template>
  <div class="icon-list-box">
    <IconList :icons="bottomIcons" />
    <IconList :icons="icons" />
  </div>
</template>
<script setup lang="ts">
import { EmojiType } from "./data";

const icons: EmojiType[] = reactive([{ text: "赞", icon: "👍" }]);
const bottomIcons: EmojiType[] = reactive([
  { text: "呲牙", icon: "😁" },
  { text: "捂脸", icon: "😂" },
]);
</script>
<style scoped>
.icon-list-box {
  display: flex;
  max-height: 32px;
  flex-direction: column-reverse;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 6px;
  background-color: rgba(6, 7, 22, 0.66);
}
.icon-list-box:hover {
  max-height: 300px;
}
</style>
