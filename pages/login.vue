<template>
    <div>
        Login
        <form @submit.prevent="authentification">
            <div class="login">
                <input type="text" placeholder="Identifiant/Mail" v-model="login">
            </div>
            <div class="password">
                <input type="password" name="password" id="password" v-model="password">
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="error" v-if="error">{{ error.message}}</div>
    </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
    data() {
        return {
            login: '',
            password: '',
            error: '',
        }
    },
    methods: {
        authentification(){
            console.log('authentification...');
            firebase.auth().signInWithEmailAndPassword(this.login, this.password).then(data => {
                console.log(data);
                this.$router.push('/account');
            }).cath(error => (this.error = error));
        }
    },
}
</script>

<style lang="scss" scoped>

</style>