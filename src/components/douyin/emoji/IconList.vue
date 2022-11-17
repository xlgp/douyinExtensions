<template>
  <div class="box">
    <Icon v-for="name in icons" :name="name" :key="name" @click="handleClick(name)" />
  </div>
</template>
<script setup lang="ts">
type EmojiIconType = {
  name: string;
};

defineProps({
  icons: {
    type: Array<string>,
    reuqire: true,
    default: [] as EmojiIconType[],
  },
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleClick = (name: string) => {
  emit("update:modelValue", name);
};
</script>
<style scoped>
.box {
  display: inline-flex;
}
</style>
