import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Synths from './components/synths/Synths.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/synths', component: Synths },
    { path: '*', redirect: '/' }
  ]
});