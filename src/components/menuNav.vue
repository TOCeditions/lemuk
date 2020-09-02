<template>
  <div>
    <p>{{ title }}</p>
    <ul class="uk-nav uk-nav-default" :class="{'uk-text-center': klasa}">
      <li v-for="edge in $static.navs.edges" :key="edge.node.id">
        <g-link :to="{path: '/'+edge.node.link+'/'} ">
          <strong>{{ edge.node.title }}</strong>
          <br />
          <span class="uk-text-small">{{ edge.node.note }}</span>
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuNav",
  data() {
    return {};
  },
  props: ["title", "klasa"],
  styler: {},
};
</script>

<style>
</style>

<static-query>
  query {
  
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