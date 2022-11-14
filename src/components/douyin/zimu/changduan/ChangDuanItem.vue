<template>
  <div>{{ data?.name }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    require: true,
  },
});
const { data } = toRefs(props);
</script>
