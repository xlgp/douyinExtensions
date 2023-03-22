<template>
    <IconMenu @click="toggleDisplay" />
</template>
<script setup lang="ts">
import { useDouyinStore } from '../store/douyin';

const { toggleDisplay } = useDouyinStore();

</script>