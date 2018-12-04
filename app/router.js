import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Singers from './components/singers/Singers.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/singers', component: Singers },
    { path: '*', redirect: '/' }
  ]
});