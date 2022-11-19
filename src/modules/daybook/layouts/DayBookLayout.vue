<template>
  <Navbar />
  <div class="d-flex">
    <div class="col-4"><EntryList /></div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import(/* webpackChunckName: "daybook-navbar" */ "@/modules/daybook/components/Navbar.vue")
    ),
    EntryList: defineAsyncComponent(() =>
      import(/* webpackChunckName: "daybook-entrylist" */ "@/modules/daybook/components/EntryList.vue")
    ),
  },
};
</script>
