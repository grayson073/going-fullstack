import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Emojis from './components/emojis/Emojis';
import EmojiDetail from './components/emojis/EmojiDetail';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/emojis', component: Emojis },
    { path: '/emojis/:id', component: EmojiDetail },
    { path: '*', redirect: '/' }
  ]
});