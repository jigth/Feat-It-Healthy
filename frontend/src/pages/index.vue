<template>
    <h1 class="page-title">{{ welcomeMessage }}</h1>
    <SignUpForm />
    <SignInForm />
</template>

<script setup lang="ts">
import SignInForm from "../shared/modules/auth/infrastructure/components/SignInForm.vue"
import SignUpForm from "../shared/modules/auth/infrastructure/components/SignUpForm.vue"
const welcomeMessage: string = "Welcome to Feat It";
</script>

<style scoped lang="scss">
.page-title {
    text-align: center;
}
</style>
