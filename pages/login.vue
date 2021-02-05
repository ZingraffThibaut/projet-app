<template>
    <v-container>
        <v-row>
            <v-col
            cols="12"
            md="6"
            sm="12"
            style="height:0px"
            >
                <div class="background__left"></div>
            </v-col>
            <v-col
            cols="12"
            md="6"
            sm="12"
            class="connexion"
            >
                <v-row>
                    <v-col
                    cols="12"
                    offset-md="4"
                    offset-sm="2"
                    md="6"
                    sm="8"
                    >
                        <h1>Connexion</h1>
                    </v-col>
                </v-row>
                <form @submit.prevent="pressed">
                    <v-row>
                        <v-col
                        cols="12"
                        offset-md="4"
                        offset-sm="2"
                        md="6"
                        sm="8"
                        >
                            <v-text-field
                                v-model="email"
                                label="E-mail"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        offset-md="4"
                        offset-sm="2"
                        md="6"
                        sm="8"
                        >
                            <v-text-field
                                v-model="password"
                                label="Mot de passe"
                                required
                            ></v-text-field>
                        </v-col>      
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        offset-md="4"
                        offset-sm="2"
                        md="6"
                        sm="8">
                            <v-btn type="submit">
                                Login
                            </v-btn>
                        </v-col>
                    </v-row>
                    <div class="error" v-if="errors">{{errors}}</div>
                </form>
            </v-col>
        </v-row>
    </v-container>
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

<style scoped>
.container{
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
}
.rowbackground__left{
    height: 100px;
}
.background__left{
    margin: 0;
    padding: 0;
    position: relative;
    top: -64px;
    min-height: 100vh;
    background-color: aquamarine;
    min-width: 50vw;
}
h1{
    padding: 4rem;
}
input{
    color: white;
}
.connexion{
    max-height: 700px;
}
</style>