<template>
  <div class="box">
    <Icon
      v-for="icon in icons"
      :text="icon.icon"
      :key="icon.text"
      @click="handleClick(icon)"
    />
  </div>
</template>
<script setup lang="ts">
import { EmojiType } from './data';
import { insertEmojiToTextAreaElem } from './useEmojiPlugin';

defineProps({
  icons: {
    type: Array<EmojiType>,
    reuqire: true,
    default: [] as EmojiType[],
  }
});

const handleClick = (icon: EmojiType) => {
  insertEmojiToTextAreaElem("[" + icon.text + "]", true);
};
</script>
<style scoped>
.box {
  display: inline-flex;
}
</style>
