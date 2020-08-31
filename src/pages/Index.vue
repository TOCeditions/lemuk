<template>
  <Layout>
    <template slot="head">
      <div
        id="head"
        class="uk-background-norepeat uk-section-secondary uk-background-blend-luminosity uk-background-cover uk-background-center uk-section uk-flex-middle uk-section-xlarge _uk-light"
      >
        <div class="uk-container">
          <h1
            class="uk-heading-medium uk-text-light uk-margin-large uk-text-right@m"
          >{{ $metaInfo.title }}</h1>
        </div>
      </div>
    </template>

    <div id="alls" v-for="edge in $page.art.edges" :key="edge.node.id">
      <div class="uk-width-4-5@m">
        <h2 class="uk-h1 uk-margin-remove uk-text-uppercase" v-html="edge.node.title"></h2>
        <h3 class="uk-h3 uk-margin-small uk-margin-large-bottom" v-html="edge.node.subtitle"></h3>
      </div>
      <div class="uk-text-default" v-html="edge.node.intro"></div>
      <div class="uk-padding-top" v-html="edge.node.contents"></div>
      <div class="uk-padding-top uk-text-small" v-html="edge.node.ilustracja.private_hash"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return this.$seo({
      title: "Strona główna", // Uses the titleTemplate in Gridsome config
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
.uk-page-black > * {
  @apply uk-light;
}
#head {
  background-image: url("https://lemadmin.toc-editions.com/lem-biblio/assets/tdd1gvol67ko0gck");
}
</style>

<page-query>
query {
  art: allCmsTeksty(filter: { id: { eq: "1" }}) {
    edges {
      node {
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
  }
}

</page-query>