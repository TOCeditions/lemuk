<template>
  <ul class="uk-nav uk-nav-default uk-text-right">
    <li v-for="edge in $static.navs.edges" :key="edge.node.id">
      <g-link :to="{path: '/'+edge.node.link+'/'} ">
        <strong>{{ edge.node.title }}</strong>
        <br />
        <span class="uk-text-small">{{ edge.node.note }}</span>
      </g-link>
    </li>
  </ul>
</template>

<script>
export default {};
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