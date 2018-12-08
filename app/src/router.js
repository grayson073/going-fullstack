import VueRouter from 'vue-router';
import Home from './components/Home';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/games', component: Home },
    { path: '*', redirect: '/' }
  ]
});