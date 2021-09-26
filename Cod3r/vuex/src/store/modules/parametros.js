export default {
    state: {        
        quantidade: 1,
        preco: 19.99
    },

    // setters
    // normalmente colocados dentro dos methods
    // devem ser usados sempre de maneira sincrona e apenas para alterar
    // o estado da aplicação
    mutations: {        
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },    
}