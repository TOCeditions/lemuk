<template>
  <div id="main-page">
    <div class="head" v-if="$slots.head">
      <slot name="head">
        <HeadSection title=" " />
      </slot>
    </div>
    <div v-else>
      <HeadSection v-bind:title="$metaInfo.title" />
    </div>
    <div id="main-section" class="uk-section uk-section-small">
      <div class="uk-container suk-padding-large">
        <div class="uk-grid uk-grid-default" uk-grid>
          <div class="sidebar uk-width-1-4@m uk-visible@m">
            <Kolekcje />
          </div>
          <div class="uk-width-expand">
            <div id="main2top" class="uk-tile uk-tile-small uk-tile-default uk-box-shadow-medium">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
  metadata {
  siteName
  siteUrl
  siteDescription
},
  navs: allLemColls(
    sortBy: "id"
    order: ASC
  ) {
    edges {
      node {
        id
        link
        title
        note
      }
    }
  }
}
</static-query>

<script>
import HeadSection from "~/components/headSection.vue";
import Kolekcje from "~/layouts/partials/Kolekcje-nav.vue";

export default {
  name: "Domyślny",
  components: {
    Kolekcje,
    HeadSection,
  },
  metaInfo() {
    return this.$seo({
      // title: "",
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
    });
  },
};
</script>


<style>
.logo-svg {
  width: 60px;
  height: 60px;
}
@media screen and (min-width: 960px) {
  #main2top {
    margin-top: -64px;
    border-radius: 20px;
  }
  #main-section {
    margin-bottom: -24px;
    padding-bottom: 0;
  }
}
</style>
