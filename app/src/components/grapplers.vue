<template>
    <section>
        <h2> Grapplers</h2>

        <AddGrappler :onAdd="handleAdd"/>
        <ul>
            <li v-for="grappler in grapplers" :key="grappler.id">
                {{grappler.name}}
            </li>
        </ul>
    </section>
</template>

<script>
import api from '../services/api';
import AddGrappler from './AddPage/vue';

export default {
    data() {
        return {
            students: null,
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
            return api.addGrappler(grappler)
                .then(saved => {
                    this.grappers.push(saved);
                });
        }
    }
};
</script>

<style>

</style>
