<template>
  <Layout>
    <template slot="head">
      <HeadSection title="title" class="uk-section-secondary" />
    </template>

    <div id="alls">
      <div class="uk-width-4-5@m">
        <h2 class="uk-h1 uk-margin-remove uk-text-uppercase" sv-html="$page.art.title">Tytul</h2>
        <h3 class="uk-h3 uk-margin-small uk-margin-large-bottom" sv-html="$page.art.subtitle">Intro</h3>
      </div>
      <div class="uk-text-default" sv-html="$page.art.intro">Wstep</div>
      <div class="uk-padding-top" sv-html="$page.art.contents">Contents</div>
    </div>
  </Layout>
</template>



<page-query>
  query{
  dzielaLema (id: 1) {
    id
    title
  }
}
</page-query>


<script>
import HeadSection from "~/components/headSection.vue";

export default {
  name: "Collection",
  components: {
    HeadSection,
  },
  metaInfo() {
    return this.$seo({
      title: $context.title,
      description: "APP Bibliografia Stanisława Lema",
      keywords: "Lem,bibliografia",

      openGraph: {
        title: "Lem Bibliografia",
        type: "website",
      },
      twitter: {
        title: "Lem Bibliografia",
        type: "summary",
      },
      link: [], // any links
      script: [], // any scripts
    });
  },
};
</script>

<style>
</style>

