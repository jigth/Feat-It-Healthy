<template>
    <form class="signin-form">
        <h2 class="signin-form__title">SignIn</h2>
        
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
const email = ref<string>('')
const password = ref<string>('')

const emailSignIn = async () => {
    try {
        await $fetch('/api/auth/signin', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value
            }
        });

        alert('Signed in succesfully')
    } catch (err: any) {
        console.log(err);
        alert('Could not sign in user')
    }
}
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