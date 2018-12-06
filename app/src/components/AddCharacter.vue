<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="character.name" required>
        <button>Add</button>
    </form>
</template>

<script>
export default {
    props: {
        onAdd: Function
    },
    data() {
        return {
            character: {
                name: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.character).then(() => {
                this.character = { name: '' };
            });
        }
    }
};
</script>

<style>

</style>
