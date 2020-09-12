<template>
  <Layout>
    <template slot="head">
      <HeadSection
        title="Zapraszamy"
        v-bind:bcg="$page.art.ilustracja.private_hash"
        big="true"
        class="uk-section-muted uk-section-xlarge uk-background-blend-musltiply"
      />
    </template>

    <div id="alls" class>
      <div class="uk-width-4-5@m">
        <h2 class="uk-h1 uk-margin-remove uk-text-uppercase" v-html="$page.art.title"></h2>
        <h3 class="uk-h3 uk-margin-small uk-margin-large-bottom" v-html="$page.art.subtitle"></h3>
      </div>
      <div class="uk-text-default" v-html="$page.art.intro"></div>
      <div class="uk-padding-top" v-html="$page.art.contents"></div>
      <div class="uk-padding-top uk-text-small" v-html="$page.art.ilustracja.private_hash"></div>
    </div>
  </Layout>
</template>



<page-query>
query {
  art: cmsTeksty(id: 1) {
        id
        title
        subtitle
        intro
        contents
        slug
        ilustracja {
          private_hash
        }  
  }
}
</page-query>


<script>
import HeadSection from "~/components/headSection.vue";

export default {
  name: "HomePage",

  components: {
    HeadSection,
  },

  metaInfo() {
    return this.$seo({
      title: "Strona główna",
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

