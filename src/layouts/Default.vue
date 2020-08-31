<template>
  <div id="tm-page">
    <div>
      <Navbar />
    </div>
    <div class="head" v-if="$slots.head">
      <slot name="head"></slot>
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
    <Footer />
    <Offcanvas />
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
import Navbar from "~/layouts/partials/Navbar.vue";
import Kolekcje from "~/layouts/partials/Kolekcje-nav.vue";
import Offcanvas from "~/layouts/partials/Offcanvas.vue";
import Footer from "~/layouts/partials/Footer.vue";

export default {
  components: {
    Navbar,
    Kolekcje,
    Footer,
    Offcanvas,
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
