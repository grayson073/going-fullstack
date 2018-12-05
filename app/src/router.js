import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Articles from './components/articles/Articles.vue';

export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/articles', component: Articles },
    { path: '*', redirect: '/' }
  ]
});