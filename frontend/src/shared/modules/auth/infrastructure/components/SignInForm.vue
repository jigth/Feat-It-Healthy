<template>
  <form class="signin-form">
    <h1 class="signin-form__title">SignIn</h1>

    <div class="signin-form__field">
      <label>Email</label>
      <input type="email" name="user" v-model="email" />
    </div>

    <div class="signin-form__field">
      <label>Password</label>
      <input type="password" name="password" v-model="password" />
    </div>

    <div class="signin-form__button">
      <button @click.prevent="emailSignIn">Sign in user</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { notify } from "../../../../../shared/utils/notification";

const email = ref<string>("");
const password = ref<string>("");

const router = useRouter()

const emailSignIn = async () => {
  try {
    const user = await $fetch("/api/auth/signin", {
      method: "POST",
      // credentials: 'include',
      body: {
        email: email.value,
        password: password.value,
      },
    });

    if (!user) {
      console.log("Error: Couldn't sign in user. User is undefined");
      notify("error", "Couldn't sign in user. Please contact dev support");
      return;
    }

    // await navigateTo('/')
    router.push('/')

    notify("success", "Signed in succesfully");
  } catch (err: any) {
    const msg = "Could not sign in user"
    console.log("msg", err);
    notify("error", msg)
  }
};
</script>

<style scoped lang="scss">
$formWidth: 250px;

.signin-form {
  width: $formWidth;
  margin: auto;

  &__title {
    text-align: center;
    margin: 10px auto;
  }

  &__field {
    width: $formWidth;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  &__button {
    text-align: center;
    margin: 10px auto;
  }
}
</style>
