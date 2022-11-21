<template>
  <button class="btn btn-primary" @click="$emit('on:click')">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: "daybook-fab",
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 5px;
  height: 80px;
  position: fixed;
  right: 5px;
  width: 80px;
}
</style>
