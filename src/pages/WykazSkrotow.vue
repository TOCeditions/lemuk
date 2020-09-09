<template>
  <Layout>
    <template slot="head">
      <HeadSection v-bind:title="title" class="uk-section-primary" />
    </template>

    <div>
      <dl class="uk-description-list uk-width-expand">
        <div
          class="uk-width-expand uk-grid uk-margin-remove"
          v-for="edge in $page.skr.edges"
          :key="edge.node.id"
        >
          <dt class="uk-width-small@m uk-margin-remove">{{ edge.node.skrot }}</dt>
          <dd class="uk-width-expand@m uk-margin-remove">{{ edge.node.definicja }}</dd>
          <hr class="uk-width-1-1 uk-margin-small" />
        </div>
      </dl>
      <Pager
        :info="$page.skr.pageInfo"
        :range="pagerIle"
        activeLinkClass="uk-active uk-button-primary"
        linkClass="uk-button uk-button-default"
        class="uk-border-rounded uk-pagination uk-navbar-navs uk-padding-small uk-text-large"
      />
    </div>
  </Layout>
</template>

<page-query>
 query($page: Int) {
  skr: allWykazSkrotow(
    sortBy: "id",
    order: ASC,
    perPage: 30, 
    page: $page
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    ,}
    edges {
      node {
        id
        skrot
        definicja
      }
    }
  }
}
</page-query>

<script>
import HeadSection from "~/components/headSection.vue";
import { Pager } from "gridsome";

export default {
  name: "Wykaz Skrótów",
  data() {
    return {
      title: "Wykaz skrótów",
      showid: false,
      pagerIle: 5,
      onPage: 20,
    };
  },
  metaInfo: {
    title: "Wykaz skrótów",
  },

  components: {
    Pager,
    HeadSection,
  },
};
</script>

<style>
.pagi > a {
  padding: 0;
  border-radius: 5px;
  margin-right: 5px;
}
dd,
dt {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>




