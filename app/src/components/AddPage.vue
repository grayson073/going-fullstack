<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input v-model="grappler.name" required>
            <button>Add</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            grappler: {
                name: ''
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
                    this.grappler = { name: '' };
                });
        }
    }
};
</script>

<style>

</style>
