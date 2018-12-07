import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Superfoods from './components/superfoods/Superfoods.vue';
import SuperfoodsDetail from './components/superfoods/SuperfoodsDetail.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/superfoods', component: Superfoods },
    { path: '/superfoods/:id', component: SuperfoodsDetail },
    { path: '*', redirect: '/' }
  ]
});