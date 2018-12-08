import VueRouter from 'vue-router';
import Home from './components/Home';
import Games from './components/games/Games';
import GameDetail from './components/games/GameDetail';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/games', component: Games },
    { path: '/games/:id', component: GameDetail },
    { path: '*', redirect: '/' }
  ]
});