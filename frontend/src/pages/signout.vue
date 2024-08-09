<template>
  <div>
    <h3 style="text-align: center">Signing you out, please wait</h3>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

async function logout() {
  await $fetch("/api/auth/signout", {
    method: "POST",
    useCredentials: true,
  });
}

onMounted(async () => {
  try {
    console.log("logging out from component");
    await logout();
    console.log("done");
    navigateTo("/");
  } catch (err: any) {
    console.log(`Error while logging out ${err.message}`);
  }
});
</script>
