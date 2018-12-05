<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label> Name:</label>
            <input v-model="grappler.name" required>
            <label> Age:</label>
            <input v-model="grappler.age" type ="number" required>
            <label> WorldChampion?</label>
            <input v-model="grappler.champion" type="radio" name="champion" id="champion" value="true">
            <button>Add</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            grappler: {
                name: '',
                age: '',
                champion: Boolean
            }
        };
    }, 
    props: {
        onAdd: Function
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.grappler) 
                .then(() => {
                    this.grappler = { name: '', age: '', champion:'' };
                });
        }
    }
};
</script>

<style>

</style>
