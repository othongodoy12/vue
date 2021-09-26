<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './Stock'

export default {
    components: { Stock },
    computed: {

        // irá desestruturar os getters do meu store, procurando
        // nos módulos importados por aquele que se chama 'stockPortfolio'
        ...mapGetters({
            stocks: 'stockPortfolio' 
        })
    }
}
</script>

<style scoped>

</style>