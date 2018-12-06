import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Movies from './components/movies/Movies.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/movies', component: Movies },
    { path: '*', redirect: '/' }
  ]
});