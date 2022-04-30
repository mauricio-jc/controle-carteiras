<template>
    <div>
        <Navbar/>

        <div class="container">
            <h1>Devedores</h1>
            <router-link to="/devedor/add" class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'plus']"/> Cadastrar novo devedor
            </router-link>
            <hr>

            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF/CNPJ</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="devedor in devedores" :key="devedor.id">
                        <th scope="row">{{ devedor.id }}</th>
                        <td>{{ devedor.nome }}</td>
                        <td>{{ devedor.cpf_cnpj }}</td>
                        <td>{{ devedor.telefone }}</td>
                        <td>{{ devedor.email }}</td>
                        <td>
                            <router-link :to="{ name: 'devedoredit', params: { id: devedor.id  }}" class="btn btn-primary me-3">
                                <font-awesome-icon :icon="['fas', 'pen']"/> Editar
                            </router-link>
                            <button class="btn btn-danger" @click="deleteDevedor(devedor.id)">
                                <font-awesome-icon :icon="['fas', 'trash-can']"/> Excluir
                            </button>
                        </td>
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
    name: 'DevedoresIndex',
    components: {
        Navbar
    },
    data() {
        return {
            devedores: []
        }
    },
    methods: {
        getDevedores() {
            const headers = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.get(url('/devedores'), headers)
            .then(response => {
                this.devedores = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        deleteDevedor(id) {
            if(confirm("Deseja excluir este devedor?")) {
                const headers = {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }

                axios.delete(url('/devedores/' + id), headers)
                .then(response => {
                    if(response.data.status == 'success') {
                        alert(response.data.message);
                        this.getDevedores();
                    }
                    else {
                        alert(response.data.message);
                    }
                })
                .catch(error => {
                    alert(error);
                });
            }
        }
    },
    mounted() {
        this.getDevedores();
    }
}
</script>