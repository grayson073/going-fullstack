import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Synths from './components/synths/Synths';
import SynthDetail from './components/synths/SynthDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/synths', component: Synths },
    { path: '/synths/:id', component: SynthDetail },
    { path: '*', redirect: '/' }
  ]
});