import stocks from '../../data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
            });
        }
    },
    actions: {
        buyStock({ commit }, order) {

            // comita a ação chamando uma mutation chamada 'buyStock'
            // essa ação é necessária pois houve a alteração no estado
            // do portfolio, já que a ação comprada é incorporada a ele
            commit('buyStock', order) 
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}