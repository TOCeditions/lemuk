<template>
  <dl :id="id" class="uk-description-list uk-column-1-2@m">
    <div v-for="edge in edges" :key="edge.node.id">
      <dt>{{ edge.node.skrot }}</dt>
      <dd>{{ edge.node.definicja }}</dd>
    </div>
  </dl>
</template>

<script>
export default {
  name: "Definitions List",
  props: ["id", "title", "edges"],
};
</script>

<style>
</style>