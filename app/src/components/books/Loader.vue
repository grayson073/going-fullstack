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
.loader {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}
</style>