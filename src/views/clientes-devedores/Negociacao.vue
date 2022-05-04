<template>
    <div>
        <Navbar/>

        <div class="container">
            <h1>Negociar débito</h1>
            <router-link to="/debitos" class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'chevron-left']"/> Voltar
            </router-link>
            <hr>

            <form class="row">
                <div class="col-md-6 mb-3">
                    <label class="form-label">Cliente: *</label>
                    <input type="text" name="cliente" class="form-control" v-model="cliente" disabled>
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label">Devedor: *</label>
                    <input type="text" name="devedor" class="form-control" v-model="devedor" disabled>
                </div>

                <div class="col-md-4 mb-3">
                    <label class="form-label">Parcelamento: *</label>
                    <select name="prazo_maximo_parcelamento" v-model="prazo_maximo_parcelamento" class="form-select">
                        <option v-for="pmp in prazoMaximoParcelamentos" :key="pmp" :value="pmp">{{ pmp }}</option>
                    </select>
                </div>

                <div class="col-md-4 mb-3">
                    <label class="form-label">Desconto acima de R$ 100.000,00: </label>
                    <input type="text" name="desconto_maximo_acima_100_mil" v-model="descontoMaximoAcima100Mil" class="form-control">
                    <div class="form-text">Desconto máximo é de {{ desconto_maximo_acima_100_mil }} %</div>
                </div>

                <div class="col-md-4 mb-3">
                    <label class="form-label">Desconto igual/abaixo de R$ 100.000,00: </label>
                    <input type="text" name="desconto_maximo_acima_100_mil" v-model="descontoMaximoAbaixoIgual100Mil" class="form-control">
                    <div class="form-text">Desconto máximo é de {{ desconto_maximo_abaixo_igual_100_mil }} %</div>
                </div>

                <!-- <div class="col-md-12">
                    <button type="button" class="btn btn-primary" @click="saveClienteDevedor">
                        <font-awesome-icon :icon="['fas', 'floppy-disk']"/> Cadastrar
                    </button>
                </div> -->
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
            clienteId: "",
            cliente: "",
            devedorId: "",
            devedor: "",
            prazoMaximoParcelamentos: [],
            prazo_maximo_parcelamento: 1,
            descontoMaximoAcima100Mil: 0,
            desconto_maximo_acima_100_mil: 0,
            descontoMaximoAbaixoIgual100Mil: 0,
            desconto_maximo_abaixo_igual_100_mil: 0,
            percentual_comissao: 0
        }
    },
    methods: {
        getDebito() {
            const headers = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.get(url('/clientes-devedores/' + this.$route.params.id), headers)
            .then(response => {
                this.clienteId = response.data.cliente.id;
                this.cliente = response.data.cliente.nome;
                this.devedorId = response.data.devedor.id;
                this.devedor = response.data.devedor.nome;
                this.desconto_maximo_acima_100_mil = response.data.cliente.desconto_maximo_acima_100_mil;
                this.desconto_maximo_abaixo_igual_100_mil = response.data.cliente.desconto_maximo_abaixo_igual_100_mil;
                this.percentual_comissao = response.data.cliente.percentual_comissao;

                this.prazoMaximoParcelamentos = [];
                for(var i = 1; i <= response.data.cliente.prazo_maximo_parcelamento; i++) {
                    this.prazoMaximoParcelamentos.push(i);
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        // saveClienteDevedor() {
        //     const data = {
        //         cliente: this.cliente,
        //         devedor: this.devedor,
        //         motivo_debito: this.motivo_debito,
        //         montante_original: this.montante_original,
        //         valor_atualizado: this.valor_atualizado
        //     }

        //     const headers = {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer ' + localStorage.getItem('token')
        //         }
        //     }

        //     axios.post(url('/clientes-devedores'), JSON.stringify(data), headers)
        //     .then(response => {
        //         if(response.data.status == 'success') {
        //             alert(response.data.message);
        //             this.$router.push('/debitos');
        //         }
        //         else {
        //             alert(response.data.message);
        //         }
        //     })
        //     .catch(error => {
        //         alert(error);
        //     })
        // }
    },
    mounted() {
        this.getDebito();
    }
}
</script>