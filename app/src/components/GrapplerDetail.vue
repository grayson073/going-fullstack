<template>
    <div v-if="grappler">
        <h2> Name: {{grappler.name}}</h2>
        <h3> Age:{{grappler.age}}</h3>
        <h3>Championship Status: {{grappler.champ}}</h3>

    </div>
</template>

<script>
import api from '../services/api';
export default {
    data() {
        return {
            grappler: null
        };
    }, 
    created() {
        api.getGrappler(this.$route.params.id)
            .then(grappler => {
                this.grappler = grappler;
            });
    }

};
</script>

<style>

</style>
