import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Articles from './components/articles/Articles.vue';
import ArticleDetail from './components/articles/ArticleDetail.vue';

export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/articles', component: Articles },
    { path: '/articles/:id', component: ArticleDetail },
    { path: '*', redirect: '/' }
  ]
});