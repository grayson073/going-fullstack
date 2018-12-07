<template>
    <section>
        <h1>Characters</h1>
        <AddCharacter :onAdd="handleAdd" />
        <ul v-if="characters">
            <li v-for="character in characters" 
            :key="character.id">
                <RouterLink :to="`/characters/${character.id}`">
                    {{character.name}}
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<script>
import AddCharacter from './AddCharacter';
import api from '../services/api.js';
export default {
    data() {
        return {
            characters: null
        };
    },
    components: {
        AddCharacter
    },
    created() {
        api.getCharacters().then(characters => {
            this.characters = characters;
        }).catch(err => 
            console.log(err));
    },
    methods: {
        handleAdd(character) {
            return api.addCharacter(character).then(saved => {
                this.characters.push(saved);
            });
        }
    }
};
</script>

<style scoped>
li {
    list-style: none;
    padding: 5px;
}
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
p {
    font-weight: bold;
}
</style>
