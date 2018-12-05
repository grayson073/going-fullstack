<template>
     <ul>
        <li v-for="grappler in grapplers" :key="grappler.id">
            <RouterLink :to="`/grapplers/${grappler.id}`">{{grappler.name}}</RouterLink>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        grapplers: null
    }
};
</script>

<style>

</style>
