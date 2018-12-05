<template>
    <section>
        <h2> Grapplers</h2>
        <AddGrappler :onAdd="handleAdd"/>

        <ul>
            <li v-for="grappler in grapplers" :key="grappler.id">
                NAME:{{grappler.name}}
                ID:{{grappler.id}}
                AGE:{{grappler.age}}
                WORLDCHAMPION:{{grappler.champ}}
            </li>
        </ul>
    </section>
</template>

<script>
import api from '../services/api';
import AddGrappler from './AddPage.vue';

export default {
    data() {
        return {
            grapplers: null,
            error: null
        };
    },
    components: {
        AddGrappler
    }, 
    created() {
        api.getGrapplers()
            .then(grapplers => {
                this.grapplers = grapplers;
            })
            .catch(err => {
                this.err = err;
            });
    }, 
    methods: {
        handleAdd(grappler) {
            console.log('banana fires');
            return api.addGrappler(grappler)
                .then(saved => {
                    this.grapplers.push(saved);
                });
        }
    }
};
</script>

<style>

</style>
