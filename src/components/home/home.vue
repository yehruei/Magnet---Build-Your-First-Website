<script setup>
import { ref } from 'vue'
import {
    NButton
} from 'naive-ui';

const count = ref(0)
</script>

<template>
    <h1>Hello!</h1>
    <div>
        <n-button type="primary" @click="count++">count is {{ count }}</n-button>
    </div>
</template>

<style scoped></style>
