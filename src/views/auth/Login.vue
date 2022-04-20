<template>
    <div>
        <div class="container">
            <h1 class="text-center">Login</h1>

            <div class="row justify-content-md-center">
                <div class="card col-md-12">
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Usuário: *</label>
                                <input type="email" name="username" v-model="username" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Senha: *</label>
                                <input type="password" name="password" v-model="password" class="form-control">
                            </div>

                            <a href="#" class="card-link">Registre-se</a>

                            <div class="mt-3">
                                <button type="button" class="btn btn-success" @click="login">Acessar</button>
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
        name: 'Login',
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login() {
                if(this.username == "" || this.username == null) {
                    alert('Informe seu usuário.');
                    return false;
                }

                if(this.password == "" || this.password == null) {
                    alert('Informe sua senha.');
                    return false;
                }

                const data = {
                    username: this.username,
                    password: this.password
                }

                axios.post(url('/auth/login'), data)
                .then(response => {
                    localStorage.setItem('token', response.data.access_token);
                    this.$router.replace('/');
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