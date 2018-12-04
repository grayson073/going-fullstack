import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Animals from './components/animals/Animals.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/animals', component: Animals },
    { path: '*', redirect: '/' }
  ]
});