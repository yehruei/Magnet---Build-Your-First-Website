<script setup>
import {
    NConfigProvider,
} from 'naive-ui';
const themeOverrides = {
    common: {
        "primaryColor": "#4350FFFF", // 这里可以自定义主题色
        "primaryColorHover": "#747EFEFF",
        "primaryColorPressed": "#182084FF",
        "primaryColorSuppl": "#3B44BEFF",
    },
};
</script>

<template>
    <n-config-provider :theme-overrides="themeOverrides">
        <n-layout>
            <n-layout-content>
                <router-view />
            </n-layout-content>
        </n-layout>
    </n-config-provider>
</template>

<style lang='less' scoped></style>