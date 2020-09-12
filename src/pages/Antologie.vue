<template>
  <Layout>
    <template slot="head">
      <HeadSection v-bind:title="title" class="uk-section-xlarge" />
    </template>
    <ul v-if="$page.ants.edges.length" class="uk-list uk-list-divider uk-list-large">
      <li v-for="book in $page.ants.edges" :key="book.node.ROK" class="uk-hover">
        <div class="uk-grid">
          <div v-if="showid" class="uk-width-small">
            <h5 class="uk-h2 uk-text-muted">{{book.node.id}}</h5>
          </div>
          <div class="uk-width-3-5@m uk-margin-bottom">
            <p>
              <span class="uk-h4">
                {{book.node.AUTOR }}:
                <br />
                <i>{{book.node.TYTUL}}</i>
              </span>
              <br />
              {{book.node.WYDAWN}}, {{book.node.MIEJWYD}} {{book.node.ROK}}
            </p>
          </div>
          <div class="uk-text-meta uk-width-expand">
            <p class="uk-margin-small uk-text-secondary">
              <strong>Dodatkowe informacje</strong>
            </p>
            <p class="uk-margin-remove">
              {{book.node.UWAGI}}
              <br />
              {{book.node.OPIS}}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>No content in DB</p>
    <div>
      <Pager
        :info="$page.ants.pageInfo"
        :range="$page.ants.pageInfo.perPage"
        activeLinkClass="uk-active uk-button-primary"
        linkClass="uk-button uk-button-default"
        class="uk-width-1-3@m uk-border-rounded uk-pagination uk-navbar-nav uk-padding-small uk-text-large"
      />
    </div>
  </Layout>
</template>



<script>
import HeadSection from "~/components/headSection.vue";
import { Pager } from "gridsome";
export default {
  name: "Antologie",
  data() {
    return {
      title: "Antologie Lemowskie",
      showid: false,
      antologie: null,
      pagerIle: 2,
    };
  },
  metaInfo: {
    title: "Antologie Lemowskie",
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
</style>


<page-query>
  query($page: Int) {
    ants: allAntologie (
    sortBy: "ROK",
    order: ASC,
    perPage: 555,
    page: $page,
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    
    edges {
      node {
        id
        AUTOR
        TYTUL
        WYDAWN
        MIEJWYD
        ROK
        UWAGI
        OPIS
      }
    }
  }
}
</page-query>

