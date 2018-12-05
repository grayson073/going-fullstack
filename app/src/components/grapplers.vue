<template>
    <section>
        <h2> Grapplers</h2>
        <AddGrappler :onAdd="handleAdd"/>
        <GrapplersList :grapplers="grapplers"/>
    </section>
</template>

<script>
import api from '../services/api';
import AddGrappler from './AddPage.vue';
import GrapplersList from './GrapplersList.vue';

export default {
    data() {
        return {
            grapplers: null,
            error: null
        };
    },
    components: {
        AddGrappler, 
        GrapplersList
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
