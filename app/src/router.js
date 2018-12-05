import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Guitarists from './components/Guitarists.vue';
import GuitaristDetail from './components/GuitaristDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/guitarists', component: Guitarists },
    { path: '/guitarists/:id', component: GuitaristDetail },
    { path: '*', redirect: '/' }
  ]
});