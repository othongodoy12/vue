<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário <strong> {{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn()">Reiniciar nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'

export default {
    props: {
        nome: {
            //required: true,
            type: String,
            default: 'Anônimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const antigo = this.nome

            this.nome = 'Pedro',
            //this.$emit('nomeMudou', this.nome)
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo: this.antigo
            })
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
