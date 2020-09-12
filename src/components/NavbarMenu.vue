<template slot="Navbar">
  <nav class="uk-navbar-container" uk-sticky="sel-target: .sticky; cls-active: uk-navbar-sticky">
    <div class="uk-container sticky">
      <div uk-navbar>
        <div class="uk-navbar-left">
          <g-link class="uk-navbar-item uk-logo" alt="Strona glówna" to="/">
            <g-image
              class="uk-margin-small-right"
              alt="Bibliografia Stanisława Lema"
              src="~/img/logo/lem-icon.svg"
              width="60"
            />
            <span class="uk-visible@m uk-text-primary uk-h4 uk-margin-remove">
              <strong>{{ $static.metadata.siteName }}</strong>
            </span>
            <span class="uk-hidden@m uk-text-secondary uk-h4 uk-margin-remove">Bibliografia</span>
          </g-link>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <li class="uk-active">
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Kolekcje</a>
              <div class="uk-navbar-dropdown">
                <MenuNav class="uk-text-right" title="Tabelen" klasa="1"></MenuNav>
              </div>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
          <div class="uk-hidden@m uk-navar-nav">
            <!-- <a
              class="uk-navbar-toggle"
              aria-label="search"
              href="#modal"
              uk-icon="icon: question"
              uk-toggle
            ></a>
            <a
              class="uk-navbar-toggle"
              aria-label="pomoc"
              href="#modal-search"
              uk-search-icon
              uk-toggle
            ></a>-->
            <a
              class="uk-navbar-toggle"
              aria-label="baza"
              href="#offcanvas"
              uk-navbar-toggle-icon
              uk-toggle
            ></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<static-query>
  query {
  metadata {
  siteName
  siteDescription
},
  navs: allLemColls(
    sortBy: "id"
    order: ASC
  ) {
    edges {
      node {
        id
        title
        note
      }
    }
  }
}
</static-query>

<script>
import MenuNav from "~/components/menuNav.vue";
// import Kolekcje from "~/layouts/partials/Kolekcje-nav.vue";

export default {
  components: {
    MenuNav,
    // Kolekcje,
  },
};
</script>

<style>
</style>