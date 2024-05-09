<template>
    <h1>{{ welcomeMessage }}</h1>
    <Hello />
</template>

<script setup lang="ts">
import Hello from "../shared/components/Hello.vue"
const welcomeMessage: string = "Welcome to Feat It";
</script>

<style scoped lang="scss">
h1 {
    color: blue;
}
</style>
