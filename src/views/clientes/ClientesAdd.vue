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
                    <input type="text" name="nome" class="form-control">
                </div>
                <div class="col-md-4 mb-3">
                    <label class="form-label">CNPJ: *</label>
                    <input type="text" name="cnpj" class="form-control" maxlength="14">
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label">Telefone: *</label>
                    <input type="text" name="telefone" class="form-control">
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label">E-mail: *</label>
                    <input type="email" name="email" class="form-control">
                </div>
                <div class="col-md-12 mb-3">
                    <label class="form-label">Endereço: *</label>
                    <input type="text" name="endereco" class="form-control">
                </div>
                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

            <!-- 
            "prazo_maximo_parcelamento": 10,
            "desconto_maximo_acima_100_mil": 10,
            "desconto_maximo_abaixo_igual_100_mil": 5,
            "percentual_comissao": 2 -->
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
            
        }
    },
}
</script>