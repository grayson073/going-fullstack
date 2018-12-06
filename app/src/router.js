import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Grapplers from './components/Grapplers.vue';
import GrapplerDetail from './components/GrapplerDetail';


export default new VueRouter ({
    routes: [
        { path: '/', component: Home }, 
        { path: '/grapplers', component: Grapplers }, 
        { path: '/grapplers/:id', component: GrapplerDetail }
    ]
});