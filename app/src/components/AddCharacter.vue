<template>
    <form @submit.prevent="handleSubmit">
        <label>Name: 
            <input v-model="character.name" required>
        </label>
        <label>Cool: 
            <select v-model="character.cool">
                <option value="true">Yes!</option>
                <option value="false">No!</option>
            </select>
        </label>
       <label>DOB:</label>
            <input type="date" v-model="character.dob" required>
        <button>Add</button>
    </form>
</template>

<script>

function initCharacter() {
    return {
        name: '',
        cool: '',
        dob: '',
    };
}

export default {
    props: {
        onAdd: Function
    },
    data() {
        return {
            character: initCharacter()
        };
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.character).then(() => {
                this.character = initCharacter;
            });
        }
    }
};
</script>

<style>

</style>
