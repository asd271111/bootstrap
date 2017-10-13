import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Play from '@/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Login', component: Login},
    {path: '/Welcome',name: 'Welcome', component: Welcome},
    {path: '/Main',name: 'Main', component: Main},
    {path: '/Play',name: 'Play', component: Play}
  ]
})
