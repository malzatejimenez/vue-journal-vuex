<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "daybook-no-entry-selected",
  components: {
    Fab: defineAsyncComponent(() => import(/* webpackChunkName: "daybook-fab" */ "@/modules/daybook/components/Fab")),
  },
  methods: {
    createNewEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
