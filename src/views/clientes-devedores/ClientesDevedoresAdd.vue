<template>
    <div>
        <Navbar/>

        <div class="container">
            <h1>Cadastrar débito</h1>
            <router-link to="/debitos" class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'chevron-left']"/> Voltar
            </router-link>
            <hr>

            <form class="row">
                <div class="col-md-6 mb-3">
                    <label class="form-label">Cliente: *</label>
                    <select name="cliente" v-model="cliente" class="form-select">
                        <option value="">Selecione o cliente</option>
                        <option v-for="c in clientes" :key="c.id" :value="c.id">{{ c.nome }}</option>
                    </select>
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label">Devedor: *</label>
                    <select name="cliente" v-model="devedor" class="form-select">
                        <option value="">Selecione o devedor</option>
                        <option v-for="d in devedores" :key="d.id" :value="d.id">{{ d.nome }}</option>
                    </select>
                </div>
                <div class="col-md-8 mb-3">
                    <label class="form-label">Motivo do débito: *</label>
                    <input type="text" name="motivo_debito" class="form-control" v-model="motivo_debito">
                </div>
                <div class="col-md-2 mb-3">
                    <label class="form-label">Montante original: *</label>
                    <input type="text" name="montante_original" class="form-control" v-model="montante_original">
                </div>
                <div class="col-md-2 mb-3">
                    <label class="form-label">Valor atualizado: *</label>
                    <input type="text" name="valor_atualizado" class="form-control" v-model="valor_atualizado">
                </div>

                <div class="col-md-12">
                    <button type="button" class="btn btn-primary" @click="saveClienteDevedor">
                        <font-awesome-icon :icon="['fas', 'floppy-disk']"/> Cadastrar
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
            clientes: null,
            devedores: null,
            cliente: "",
            devedor: "",
            motivo_debito: "",
            montante_original: 0,
            valor_atualizado: 0
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
        },

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

        saveClienteDevedor() {
            const data = {
                cliente: this.cliente,
                devedor: this.devedor,
                motivo_debito: this.motivo_debito,
                montante_original: this.montante_original,
                valor_atualizado: this.valor_atualizado
            }

            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.post(url('/clientes-devedores'), JSON.stringify(data), headers)
            .then(response => {
                if(response.data.status == 'success') {
                    alert(response.data.message);
                    this.$router.push('/debitos');
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
        this.getClientes();
        this.getDevedores();
    }
}
</script>