<template>
  <div class="box">
    <Icon v-for="icon in icons" :text="icon.icon" :key="icon.text" @click="handleClick(icon)" />
  </div>
</template>
<script setup lang="ts">
import { insertToTextAreaElem } from '../chat/composable/useTextareaPlugin';
import { EmojiType } from './data';

defineProps({
  icons: {
    type: Array < EmojiType >,
    reuqire: true,
    default: [] as EmojiType[],
  }
});

const handleClick = (icon: EmojiType) => {
  insertToTextAreaElem("[" + icon.text + "]", true);
};
</script>
<style scoped>
.box {
  display: inline-flex;
}
</style>
