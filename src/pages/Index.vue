<template>
  <Layout>
    <template slot="head">
      <div
        id="head"
        v-bind:style="styler"
        class="uk-background-norepeat uk-section-secondary uk-background-blend-luminosity uk-background-cover uk-background-center uk-section uk-flex-middle uk-section-xlarge _uk-light"
      >
        <div class="uk-container">
          <h1
            class="uk-heading-medium uk-text-light uk-margin-large uk-text-right@m"
          >{{ $metaInfo.title }}</h1>
        </div>
      </div>
    </template>

    <div id="alls">
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
// var hashImg = this.$page.art.title;
// bcgUrl = apiUrl + hash;

export default {
  metaInfo() {
    return this.$seo({
      title: this.$page.art.title,
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
  //
  data() {
    var hasher = $page.art.ilustracja.private_hash;
    var apiUrl = "https://lemadmin.toc-editions.com/lem-biblio/assets/";
    return {
      styler: {
        color: "red",
        backgroundImage: "url('" + apiUrl + "')",
      },
    };
  },
};
</script>

<style>
#head {
  /* background-image: url("https://lemadmin.toc-editions.com/lem-biblio/assets/tdd1gvol67ko0gck"); */
}
</style>

