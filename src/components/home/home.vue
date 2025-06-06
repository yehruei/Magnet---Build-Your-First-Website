<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div class="content">
        <h1>Hello!</h1>
        <p>This is your Home page.</p>
        <div>
            <n-button type="primary" @click="count++">Click here to give a like 👍 {{ count }}</n-button>
        </div>
        <p>
            <n-image width="120" src="./Magnet---Build-Your-First-Website/hello.gif"></n-image>
        </p>
    </div>
</template>

<style scoped>
.content {
    text-align: center;
    padding: 2vw;
}
</style>