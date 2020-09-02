<template>
  <Layout>
    <template slot="head">
      <HeadSection title="E.404" class="uk-section-xlarge" />
    </template>
    <div class="uk-container uk-padding-large">
      <h1 class="uk-text-xl">Ups...</h1>
      <p>Coś poszło nie tak</p>
    </div>
  </Layout>
</template>

<script>
import HeadSection from "~/components/headSection.vue";
export default {
  components: {
    HeadSection,
  },
};
</script>

<style>
</style>