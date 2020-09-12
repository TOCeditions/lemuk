<template>
  <div
    id="head"
    v-bind:style="styler"
    class="uk-section-primary uk-background-norepeat uk-background-fixed uk-background-cover uk-background-center uk-section uk-flex-middle uk-section-large"
  >
    <div class="uk-container">
      <h1
        class="uk-text-bold uk-heading-medium uk-text-light uk-margin-large uk-text-right@m"
        v-bind:class="{ 'uk-heading-large': big }"
      >{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadSection",
  props: {
    title: {
      type: String,
      required: false,
      default: "Bibiliografia polska S. Lema",
    },
    big: {},
    bcg: {
      type: String,
      default: "9uy767mz3s0kswo4",
    },
  },
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