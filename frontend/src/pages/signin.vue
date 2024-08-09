<template>
  <div>
    <SignInForm />
  </div>
</template>

<script setup lang="ts">
import SignInForm from "../shared/modules/auth/infrastructure/components/SignInForm.vue";
import { useMainStore } from "../shared/store";
import { notify } from "../shared/utils/notification";
import { onMounted } from "vue";

function handleSignoutMessage() {
    const store = useMainStore()
    
    if (store.notification.msg) {
      notify(store.notification.status, store.notification.msg);
      store.clearNotificationMessage();
    }
}

onMounted(() => {
    handleSignoutMessage();
})
</script>

<style scoped></style>
