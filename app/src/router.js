import VueRouter from 'vue-router';
import Home from './components/Home/Home';
import Characters from './components/Characters';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/characters', component: Characters },
        { path: '*', redirect: '/' }
    ],
});