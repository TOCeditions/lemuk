<template>
  <div id="tm-page">
    <NavbarMenu />
    <div class="head" v-if="$slots.head">
      <slot name="head">
        <HeadSection title=" " />
      </slot>
    </div>
    <div v-else>
      <HeadSection v-bind:title="$metaInfo.title" />
    </div>
    <div class="uk-container uk-padding-large">
      <div class="uk-grid uk-grid-default" uk-grid>
        <div class="sidebar uk-width-1-4@m">
          <Kolekcje />
        </div>
        <div class="uk-width-expand">
          <div id="main2top" class="uk-tile uk-tile-medium uk-tile-default uk-box-shadow-medium">
            <slot />
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
#main2top {
  margin-top: -9rem;
  border-radius: 20px 20px 0 0;
}
</style>
