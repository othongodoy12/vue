export default {
    namespaced: true,
    
    state: {
        produtos: [],        
    },

    // normalmente colocados dentro de propriedades computadas
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },

    // setters
    // normalmente colocados dentro dos methods
    // devem ser usados sempre de maneira sincrona e apenas para alterar
    // o estado da aplicação
    mutations: {
        adicionarProduto(state, payload) { // paylod == produto
            state.produtos.push(payload)
        },
    },

    // funcionam como se fossem controllers, em que é possível impor
    // regras antes de efetivamente alterar o estado da aplicação    
    // local ideal para trabalhar com assincronismo e requisições ao
    // servidor por meio de async e awaits
    actions: {
        // adicionarProduto(context, payload) {
        //     setTimeout(() => {
                
        //         // nesse contexto o 'adicionarProduto' que está dentro 
        //         // do commit é a mutation 'adicionarProduto'
        //         // action 'adicionarProduto' chama a mutation 'adicionarProduto'
        //         context.commit('adicionarProduto', payload)
        //     }, 1000)
        // }

        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                
                // nesse contexto o 'adicionarProduto' que está dentro 
                // do commit é a mutation 'adicionarProduto'
                // action 'adicionarProduto' chama a mutation 'adicionarProduto'
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}