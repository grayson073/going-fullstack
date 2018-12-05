import VueRouter from 'vue-router';
import Home from './src/components/Home.vue';
import Books from './src/components/books/Books.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/books', component: Books },
    { path: '*', redirect: '/' }

  ]


});