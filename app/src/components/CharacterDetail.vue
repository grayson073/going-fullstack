<template>
    <section v-if="character">
        <h1>{{character.name}}</h1>
        <ul>
            <li>DOB: {{character.dob}}</li>
            <li>Cool? {{character.cool}}</li>
        </ul>
    </section>
</template>

<script>
import api from '../services/api.js';
export default {
    data() {
        return {
            character: null
        };
    },
    created() {
        api.getCharacter(this.$route.params.id)
            .then(character => {
                this.character = character;
            });
    }
};
</script>

<style>

</style>
