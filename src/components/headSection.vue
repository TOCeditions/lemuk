<template>
  <div
    id="head"
    v-bind:style="styler"
    class="uk-background-norepeat uk-background-blend-luminosity uk-background-cover uk-background-center uk-section uk-flex-middle uk-section-large uk-section-primary"
  >
    <div class="uk-container">
      <h1
        class="uk-heading-large uk-heading-xlarge@m uk-text-light uk-margin-large uk-text-right@m"
      >{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadSection",
  props: ["title", "bcg"],
  computed: {
    styler() {
      if (this.bcg) {
        return {
          backgroundImage:
            "url('https://lemadmin.toc-editions.com/lem-biblio/assets/" +
            this.bcg +
            "?key=fullhd')",
        };
      }
    },
  },
};
</script>

<style>
</style>