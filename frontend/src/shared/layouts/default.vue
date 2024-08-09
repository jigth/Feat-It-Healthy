<script setup lang="ts">
import { ToastifyContainer } from 'vue3-toastify';
</script>

<template>
    <ToastifyContainer  />
    <p>Default layout</p>

    <ul>
        <li><NuxtLink to="/signup">Sign Up</NuxtLink></li>
        <li><NuxtLink to="/signin">Sign In</NuxtLink></li>
        <li><NuxtLink to="/signout">Sign Out</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>

    <slot></slot>
</template>
