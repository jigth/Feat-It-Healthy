<template>
    <form class="form">
        <h2 class="form-title">SignUp</h2>
        
        <div class="form-field">
            <label>Email</label>
            <input type="email" name="user" v-model="email" />
        </div>

        <div class="form-field">
            <label>Password</label>
            <input type="password" name="password" v-model="password" />
        </div>
     
        <div class="form-button">
            <button @click.prevent="emailSignUp">Sign up user</button>
        </div>
    </form>
</template>

<script setup lang="ts">
const email = ref<string>('')
const password = ref<string>('')

const emailSignUp = async () => {
    try {
        await $fetch('/api/auth/signup', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value
            }
        });

        alert('User created')
    } catch (err: any) {
        console.log(err);
        alert('Could not sign up user')
    }
}
</script>

<style scoped lang="scss">
$formWidth: 250px;

.form {
    width: $formWidth;
    margin: auto;

    &-title {
        text-align: center;
        margin: 10px auto;
    }

    &-field {
        width: $formWidth;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
    }

    &-button {
        text-align: center;
        margin: 10px auto;
    }
}
</style>