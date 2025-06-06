<script setup lang="ts">
import store from './store/store';

// 这里是用来判断用户是否正在使用移动端设备来访问我们的页面
store.state.display.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import "./style.css";
</style>