import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Emojis from './components/emojis/Emojis';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/emojis', component: Emojis },
    { path: '*', redirect: '/' }
  ]
});