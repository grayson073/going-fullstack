import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Students from './components/students/Students.vue';

export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/students', component: Students },
    { path: '*', redirect: '/' }
  ]
});