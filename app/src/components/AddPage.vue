<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input v-model:="grappler.name" required>
            <button>Add</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        onAdd: Function
    },
    data() {
        return {
            grappler: {
                name: ''
            }
        };
    }, 
    methods: {
        handleSubmit() {
            this.onAdd(this.grappler) 
                .then(() => {
                    this.grappler = {
                        name: ''
                    };
                });
        }
    }

};
</script>

<style>

</style>
