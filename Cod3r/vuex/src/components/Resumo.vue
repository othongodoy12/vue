<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <!-- valorTotal é o nome do getter sem o alias -->
            <!-- <span>Total: <strong>{{ valorTotal | dinheiro }}</strong></span> -->
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('carrinho', {
            total: 'valorTotal'
        })
    }

    // computed: mapGetters(['valorTotal'])

    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
