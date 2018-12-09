<template>
  <section>
    <button @click="show = true">Add a new game</button>
    <Modal v-if="show" :onClose="() => show = false">
      <GameForm :onSubmit="handleAdd" action="add"/>
    </Modal>
  </section>
</template>

<script>
import Modal from '../shared/Modal';
import GameForm from './GameForm';

export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    onAdd: Function
  },
  components: {
    Modal,
    GameForm
  },
  methods: {
    handleAdd(game) {
      this.onAdd(game);
      this.show = false;
    }
  }
};
</script>

<style>

</style>
