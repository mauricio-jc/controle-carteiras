<template>
    <div>
        <Navbar/>

        <div class="container">
            <h1>Débitos</h1>
            <router-link to="/debito/add" class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'plus']"/> Cadastrar débito
            </router-link>
            <hr>

            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Devedor</th>
                        <th scope="col">Motivo do débito</th>
                        <th scope="col">Montante original</th>
                        <th scope="col">Valor atualizado</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="clienteDevedor in clientesDevedores" :key="clienteDevedor.id">
                        <th scope="row">{{ clienteDevedor.id }}</th>
                        <td>{{ clienteDevedor.cliente.nome }}</td>
                        <td>{{ clienteDevedor.devedor.nome }}</td>
                        <td>{{ clienteDevedor.motivo_debito }}</td>
                        <td>{{ clienteDevedor.montante_original }}</td>
                        <td>{{ clienteDevedor.valor_atualizado }}</td>
                        <td>{{ clienteDevedor.situacao }}</td>
                        <td>
                            <router-link :to="{ name: 'debitonegociar', params: { id: clienteDevedor.id  }}" class="btn btn-success me-3">
                                <font-awesome-icon :icon="['fas', 'handshake-simple']"/> Negociar
                            </router-link>
                            <router-link :to="{ name: 'debitoedit', params: { id: clienteDevedor.id  }}" class="btn btn-primary me-3">
                                <font-awesome-icon :icon="['fas', 'pen']"/> Editar
                            </router-link>
                            <button class="btn btn-danger" @click="deleteClienteDevedor(clienteDevedor.id)">
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
    name: 'ClientesIndex',
    components: {
        Navbar
    },
    data() {
        return {
            clientesDevedores: []
        }
    },
    methods: {
        getClientesDevedores() {
            const headers = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.get(url('/clientes-devedores'), headers)
            .then(response => {
                this.clientesDevedores = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },

        deleteClienteDevedor(id) {
            if(confirm("Deseja excluir este débito?")) {
                const headers = {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }

                axios.delete(url('/clientes-devedores/' + id), headers)
                .then(response => {
                    if(response.data.status == 'success') {
                        alert(response.data.message);
                        this.getClientesDevedores();
                    }
                    else {
                        alert(response.data.message);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    },
    mounted() {
        this.getClientesDevedores();
    }
}
</script>