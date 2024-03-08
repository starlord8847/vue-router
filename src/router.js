import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = ()=>{
   return import(/* webpackChunkName: "about" */ './views/About.vue')
}

const Users = ()=>{
    return import(/* webpackChunkName: "Users" */ './views/Users.vue')
}
const Users_detail = ()=>{
    return import(/* webpackChunkName: "Users" */ './views/Users_detail.vue')
}

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
            children:[
                {
                    path: ':id',
                    name: 'users_detail',
                    component: Users_detail,
                }
            ]
        }
    ]
})
