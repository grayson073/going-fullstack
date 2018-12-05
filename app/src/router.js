import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Animals from './components/animals/Animals.vue';
import AnimalDetail from './components/animals/AnimalDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/animals', component: Animals },
    { path: '/animals/:id', component: AnimalDetail },
    { path: '*', redirect: '/' }
  ]
});