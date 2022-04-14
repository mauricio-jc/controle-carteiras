<template>
    <div>
        <div class="container">
            <h1>Login</h1>

            <div class="card">
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Usuário: *</label>
                            <input type="email" name="username" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Senha: *</label>
                            <input type="password" name="password" class="form-control">
                        </div>

                        <a href="#" class="card-link">Registre-se</a>

                        <div class="mt-3">
                            <button type="button" class="btn btn-success">Acessar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        methods: {

        },
        beforeCreate() {
            document.querySelector('html').setAttribute('style', 'height: 100%; background-color: #a90127;')
            document.querySelector('body').setAttribute('style', 'height: 100%; background-color: #a90127;')
        }
    }
</script>

<style scoped>
    .container {
        padding-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: #fff;
        margin-bottom: 40px;
    }

    .card {
        width: 50%;
    }
</style>