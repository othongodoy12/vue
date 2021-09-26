import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    // scrollBehavior(to) {
    //     if (to.hash) {
    //         return { 
    //             selector: to.hash
    //         }
    //     }
    // },
    routes: [
        { 
            path: '/',
            // component: Inicio,
            components: {
                default: Inicio,
                menu: Menu
            },
            name: 'inicio'
        },
        { 
            path: '/usuario', 
            component: Usuario,
            children: [
                { path: '', component: UsuarioLista, name: 'usuarios' },
                { 
                    path: ':id', 
                    component: UsuarioDetalhe, 
                    props: true, 
                    name: 'usuariosDetalhes',
                    beforeEnter : (to, from, next) => {
                        console.log('antes da rota => usuario detalhe')
                        next()
                    } 
                },
                { path: ':id/editar', component: UsuarioEditar, props: true, name: 'usuarioEditar' },
            ] 
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas => global')
    next()
    
    // if (to.path !== '/usuario') {
    //     next('/usuario')
    // } else {
    //     next()
    // }
})

export default router
