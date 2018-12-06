<template>
    <div v-show="loading" class="loader">
        <span>Loading...</span>
    </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
};
</script>

<style>

</style>
