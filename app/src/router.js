import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Books from './components/books/Books.vue';
import BookDetail from './components/books/BookDetail';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/books', component: Books },
    { path: '/books/:id', component: BookDetail },
    { path: '*', redirect: '/' }
    
  ]
});