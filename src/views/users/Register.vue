<template>
    <div>
        <div class="container">
            <h1 class="text-center">Registrar</h1>

            <div class="row justify-content-md-center">
                <div class="card col-md-12">
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Nome: *</label>
                                <input type="text" name="name" v-model="name" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Usuário: *</label>
                                <input type="email" name="username" v-model="username" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">E-mail: *</label>
                                <input type="email" name="email" v-model="email" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Senha: *</label>
                                <input type="password" name="password" v-model="password" class="form-control">
                            </div>

                            <div class="mt-3">
                                <button type="button" class="btn btn-success" @click="register">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { url } from '@/enviroments/url.js';

    export default {
        name: 'Register',
        data() {
            return {
                name: "",
                username: "",
                email: "",
                password: ""
            }
        },
        methods: {
            register() {
                if(this.name == "" || this.name == null) {
                    alert('Informe seu nome.');
                    return false;
                }

                if(this.username == "" || this.username == null) {
                    alert('Informe seu usuário.');
                    return false;
                }

                if(this.email == "" || this.email == null) {
                    alert('Informe seu e-mail.');
                    return false;
                }

                if(this.password == "" || this.password == null) {
                    alert('Informe sua senha.');
                    return false;
                }

                const data = {
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    password: this.password
                }

                axios.post(url('/users'), data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    alert('Problemas ao acessar o sistema. Usuário ou senha incorretos.');
                });
            }
        }
    }
</script>

<style scoped>
    .container {
        padding-top: 150px;
    }

    h1 {
        margin-bottom: 40px;
    }

    .card {
        width: 50%;
    }
</style>