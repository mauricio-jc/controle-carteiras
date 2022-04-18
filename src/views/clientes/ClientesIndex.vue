<template>
    <div>
        <Navbar/>

        <div class="container">
            <h1>Clientes</h1>
            <router-link to="/cliente/add" class="btn btn-success">Cadastrar novo cliente</router-link>
            <hr>

            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in clientes" :key="cliente.id">
                        <th scope="row">{{ cliente.id }}</th>
                        <td>{{ cliente.nome }}</td>
                        <td>{{ cliente.cnpj }}</td>
                        <td>{{ cliente.telefone }}</td>
                        <td>{{ cliente.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { url } from '@/enviroments/url';

export default {
    name: 'ClientesIndex',
    components: {
        Navbar
    },
    data() {
        return {
            clientes: []
        }
    },
    methods: {
        getClientes() {
            const headers = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.get(url('/clientes'), headers)
            .then(response => {
                this.clientes = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.getClientes();
    }
}
</script>