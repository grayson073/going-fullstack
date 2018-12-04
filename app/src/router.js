import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import AddPage from './components/AddPage.vue';


export default new VueRouter ({
    routes: [
        { path: '/', component: Home }, 
        { path: '/AddPage', component: AddPage }
    ]
});