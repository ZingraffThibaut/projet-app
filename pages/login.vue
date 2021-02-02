<template>
  <div class="login">
      <form @submit.prevent="pressed">

        <input type="email" class="email" v-model="email">
        <input type="password" name="password" id="password" v-model="password">

        <button type="submit">Login</button>
      </form>
      
      <div class="error" v-if="errors">{{errors}}</div>
      
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            errors: '',
        }
    },
    methods: {
        pressed(){
            console.log(this.email);
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                .then((user) => {
                    console.log(user);
                   this.$router.push('/account');
                })
                .catch((error) => {
                   this.errors = error;
                });
        },
    },
}
</script>

<style>
input{
    color: white;
}
</style>