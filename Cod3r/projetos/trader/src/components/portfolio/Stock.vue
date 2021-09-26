<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }} 
                    <small>
                        (Preço: {{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(stock.price) }} | Qtde: {{ stock.quantity }})
                    </small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field 
                    label="Quantidade" 
                    type="number" 
                    :error="insufficientQuantity"
                    v-model.number="quantity"/>

                <v-btn 
                    class="blue darken-3 white--text" 
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)" 
                    @click="sellStock">{{ insufficientQuantity ? 'Insuficiente' : 'Vender' }}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {        
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
             
            // dispatch -> dispara uma action
            // nesse caso o Vue irá procurar uma action nos modulos
            // importados no meu store que se chame 'sellStock'
            this.$store.dispatch('sellStock', order)
            this.quantity = 0
        }
    }
}
</script>

<style scoped>

</style>