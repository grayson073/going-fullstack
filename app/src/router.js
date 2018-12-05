import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Campgrounds from './components/campgrounds/Campgrounds';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/campgrounds', component: Campgrounds },
    { path: '*', redirect: '/' }
  ]
});