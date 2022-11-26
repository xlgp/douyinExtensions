<template>
    <el-dropdown
        class="dy-dropdown"
        @command="handleCommand"
        split-button
        size="small"
        @click="$emit('reply')"
    >
        {{ btnText }}
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="text in replyList" :key="text" :command="text">{{ text }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script setup lang="ts">
import { useChatStore } from "./store/Chat";
const emit = defineEmits(['reply'])

const { replyList } = useChatStore();
const btnText = ref("回复");

const handleClick = () => {
    console.log('button click')
}
const handleCommand = (command: string) => {
    emit("reply", command);
}
</script>
<style>
.dy-dropdown .el-button {
    background-color: #1617221f;
    color: var(--el-color-info-light-5);
}
.dy-dropdown .el-button:first-child {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.dy-dropdown .el-button + .el-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0px;
}
</style>