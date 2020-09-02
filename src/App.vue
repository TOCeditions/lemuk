<template>
  <div id="tm-page">
    <NavbarMenu />
    <router-view />
    <Footer />
    <Offcanvas />
  </div>
</template>



<script>
import Layout from "~/layouts/Default.vue";
import NavbarMenu from "~/components/NavbarMenu.vue";
import HeadSection from "~/components/headSection.vue";
import Kolekcje from "~/layouts/partials/Kolekcje-nav.vue";
import Offcanvas from "~/layouts/partials/Offcanvas.vue";
import Footer from "~/layouts/partials/Footer.vue";

export default {
  components: {
    Layout,
    NavbarMenu,
    Kolekcje,
    Footer,
    Offcanvas,
    HeadSection,
  },
  metaInfo() {
    return this.$seo({
      title: "Bibliografia S. Lema",
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