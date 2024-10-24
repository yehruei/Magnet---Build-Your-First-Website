<script setup lang='ts'>
import { ref } from 'vue'
import {
    NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter
} from 'naive-ui'
</script>

<template>
    <n-layout class="container">
        <n-layout-header>
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
            <router-view />
        </n-layout-content>
    </n-layout>
</template>

<style lang='less' scoped>
.container {
    min-height: 100vh;
}
</style>