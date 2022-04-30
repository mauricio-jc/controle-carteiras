<template>
    <div>
        <Navbar/>

        <div class="container">
            <h1>Adicionar devedor</h1>
            <router-link to="/devedores" class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'chevron-left']"/> Voltar
            </router-link>
            <hr>

            <form class="row">
                <div class="col-md-8 mb-3">
                    <label class="form-label">Nome: *</label>
                    <input type="text" name="nome" class="form-control" v-model="nome">
                </div>
                <div class="col-md-4 mb-3">
                    <label class="form-label">CPF/CNPJ: *</label>
                    <input type="text" name="cpf_cnpj" class="form-control" maxlength="14" v-model="cpf_cnpj">
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label">Telefone: *</label>
                    <input type="text" name="telefone" class="form-control" v-model="telefone">
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label">E-mail: *</label>
                    <input type="email" name="email" class="form-control" v-model="email">
                </div>
                <div class="col-md-12 mb-3">
                    <label class="form-label">Endereço: *</label>
                    <input type="text" name="endereco" class="form-control" v-model="endereco">
                </div>

                <div class="col-md-12">
                    <button type="button" class="btn btn-primary" @click="updateDevedor">
                        <font-awesome-icon :icon="['fas', 'refresh']"/> Atualizar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { url } from '@/enviroments/url';

export default {
    name: 'ClientesAdd',
    components: {
        Navbar
    },
    data() {
        return {
            nome: "",
            cpf_cnpj: "",
            endereco: "",
            telefone: "",
            email: ""
        }
    },
    methods: {
        getDevedor() {
            const headers = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.get(url('/devedores/' + this.$route.params.id), headers)
            .then(response => {
                this.nome = response.data.nome;
                this.cpf_cnpj = response.data.cpf_cnpj;
                this.endereco = response.data.endereco;
                this.telefone = response.data.telefone;
                this.email = response.data.email;
            })
            .catch(error => {
                alert(error);
            })
        },

        updateDevedor() {
            const data = {
                nome: this.nome,
                cpf_cnpj: this.cpf_cnpj,
                endereco: this.endereco,
                telefone: this.telefone,
                email: this.email
            }

            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.put(url('/devedores/' + this.$route.params.id), JSON.stringify(data), headers)
            .then(response => {
                if(response.data.status == 'success') {
                    alert(response.data.message);
                }
                else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                alert(error);
            })
        }
    },
    mounted() {
        this.getDevedor();
    }
}
</script>