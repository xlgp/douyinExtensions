<template>{{ time }}</template>
<script setup lang="ts">

function getTimeText() {
    let date = new Date;
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

const time = ref(getTimeText());

setInterval(() => time.value = getTimeText(), 900);
</script>