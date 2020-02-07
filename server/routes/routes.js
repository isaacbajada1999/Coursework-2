import Vue from 'vue'
import App from '/client/src/App'
import VueRouter from 'vue-router'
import postComponent from '/client/src/components/postComponent';
import userComponent from '/client/src/components/userComponent';


vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
    {
        path: '/postcomponent',
        name: 'postcomp',
        component: postComponent
    },
    {
        path: '/usercomponent',
        name: 'usercomp',
        component: userComponent
    },
];

new Vue({
    routes,
    render: h => h(App),
}).$mount('#app')
