<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input v-model="grappler.name" required>
            <input v-model="grappler.age" type ="number" required>
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
                age: ''
            }
        };
    }, 
    props: {
        onAdd: Function
    },
    methods: {
        handleSubmit() {
            // console.log('banana', this.onAdd);
            this.onAdd(this.grappler) 
                .then(() => {
                    this.grappler = { name: '', age: '' };
                });
        }
    }
};
</script>

<style>

</style>
