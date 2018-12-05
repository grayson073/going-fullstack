import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Superfoods from './components/superfoods/Superfoods.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/superfoods', component: Superfoods },
    { path: '*', redirect: '/' }
  ]
});