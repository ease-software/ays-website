<template>
  <div>
    <div v-if="loading">
      <v-skeleton-loader
        class="mx-auto my-4"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <intro />
      <div class="my-6"></div>
    </div>
  </div>
</template>

<script>
import intro from "../components/products/intro.vue";
export default {
  components: { intro },
  data: ()=>({
    loading: false,
  })
};
</script>

<style></style>
