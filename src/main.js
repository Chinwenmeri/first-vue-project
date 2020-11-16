import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import './design/custom.scss';

const homepage = () =>
    import ('./components/mainpage');

const viewheroes = () =>
    import ('./components/showHeroes');

Vue.use(VueRouter)
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [{
        path: '/',
        component: homepage,
        name: 'homepage'
    },
    {
        path: '/showHeroes',
        component: viewheroes,
        name: 'viewheroes'
    }
]

Vue.config.productionTip = false

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')