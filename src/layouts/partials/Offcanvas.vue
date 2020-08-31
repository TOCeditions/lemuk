<template>
  <div id="offcanvas" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
    </div>
  </div>
</template>

<script>
import Kolekcje from "~/layouts/partials/Kolekcje-nav.vue";

export default {
  components: {
    Kolekcje,
  },
};
</script>

<style>
</style>