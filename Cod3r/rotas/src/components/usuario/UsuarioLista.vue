<template>
    <div class="usuario-list">
        <h3>Lista de Usuários</h3>
        <ul class="lista">
            <router-link class="item-lista" 
                tag="li" to="/usuario/1">
                Usuário 1
            </router-link>
            <router-link class="item-lista" 
                tag="li" to="/usuario/2">
                Usuário 2
            </router-link>
            <router-link class="item-lista" 
                tag="li" to="/usuario/3">
                Usuário 3
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>