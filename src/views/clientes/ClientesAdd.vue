<template>
    <div>
        <Navbar/>

        <div class="container">
            <h1>Adicionar cliente</h1>
            <router-link to="/clientes" class="btn btn-success">Voltar</router-link>
            <hr>

            <form class="row">
                <div class="col-md-8 mb-3">
                    <label class="form-label">Nome: *</label>
                    <input type="text" name="nome" class="form-control" v-model="nome">
                </div>
                <div class="col-md-4 mb-3">
                    <label class="form-label">CNPJ: *</label>
                    <input type="text" name="cnpj" class="form-control" maxlength="14" v-model="cnpj">
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

                <div class="col-md-12 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Configurações do cliente</h4>
                            <hr>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Prazo máximo para parcelamento: *</label>
                                    <input type="text" name="prazo_maximo_parcelamento" class="form-control" v-model="prazo_maximo_parcelamento">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Desconto máximo acima de R$ 100.000,00: *</label>
                                    <input type="text" name="desconto_maximo_acima_100_mil" class="form-control" v-model="desconto_maximo_acima_100_mil">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Desconto máximo igual ou abaixo de R$ 100.000,00: *</label>
                                    <input type="text" name="desconto_maximo_abaixo_igual_100_mil" class="form-control" v-model="desconto_maximo_abaixo_igual_100_mil">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Percentual de comissão: *</label>
                                    <input type="text" name="percentual_comissao" class="form-control" v-model="percentual_comissao">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <button type="button" class="btn btn-primary" @click="saveClient">Cadastrar</button>
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
            cnpj: "",
            endereco: "",
            telefone: "",
            email: "",
            prazo_maximo_parcelamento: 0,
            desconto_maximo_acima_100_mil: 0,
            desconto_maximo_abaixo_igual_100_mil: 0,
            percentual_comissao: 0
        }
    },
    methods: {
        saveClient() {
            const data = {
                nome: this.nome,
                cnpj: this.cnpj,
                endereco: this.endereco,
                telefone: this.telefone,
                email: this.email,
                prazo_maximo_parcelamento: this.prazo_maximo_parcelamento,
                desconto_maximo_acima_100_mil: this.desconto_maximo_acima_100_mil,
                desconto_maximo_abaixo_igual_100_mil: this.desconto_maximo_abaixo_igual_100_mil,
                percentual_comissao: this.percentual_comissao
            }

            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.post(url('/clientes'), JSON.stringify(data), headers)
            .then(response => {
                if(response.data.status == 'success') {
                    alert(response.data.message);
                    this.$router.push('/clientes');
                }
                else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                alert(error);
            })
        }
    }
}
</script>