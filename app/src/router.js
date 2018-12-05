import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Superheroes from './components/superheroes/Superheroes.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/superheroes', component: Superheroes },
    { path: '*', redirect: '/' },
  ]
});