<template>
    <div>
        <Navbar/>

        <div class="container">
            <h1>Bem vindo!</h1>
            <hr>

            <div class="row">
                <div class="col-md-4">
                    <router-link to="/">
                        <div class="card">
                            <div class="card-body text-center">
                                <font-awesome-icon :icon="['fas', 'users']" size="5x" class="text-primary"/>
                                <h3 class="card-title text-primary">Clientes</h3>
                            </div>
                        </div>
                    </router-link>
                </div>
                
                <div class="col-md-4">
                    <router-link to="/about">
                        <div class="card">
                            <div class="card-body text-center">
                                <font-awesome-icon :icon="['fas', 'wallet']" size="5x" class="text-primary"/>
                                <h3 class="card-title text-primary">Devedores</h3>
                            </div>
                        </div>
                    </router-link>
                </div>
                
                <div class="col-md-4" @click="logout" style="cursor: pointer;">
                    <div class="card">
                        <div class="card-body text-center">
                            <font-awesome-icon :icon="['fas', 'sign-out']" size="5x" class="text-primary"/>
                            <h3 class="card-title text-primary">Sair</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'HomeView',
    components: {
        Navbar
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    a:hover {
        color: #0d6efd;
    }

    h3 {
        margin-top: 20px;
    }
</style>
