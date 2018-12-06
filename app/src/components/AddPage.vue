<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label> Name:</label>
            <input v-model="grappler.name" required>
            <label> Age:</label>
            <input v-model="grappler.age" type ="number" required>
            <label> WorldChampion? Yes/No</label>
            <input v-model="grappler.champ" type="checkbox" name="champion" id="champ" value="true">
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
