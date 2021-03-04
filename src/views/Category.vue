<template>
  <div>
    <div v-if="loading" class="text-center">
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <intro :category="category" />
      <div class="ma-16"></div>
      <products-group :products="category.products" />
    </div>

    <div class="ma-16"></div>
  </div>
</template>

<script>
import categoriesAPI from "../api/categories";

import Intro from "../components/category/Intro.vue";
import ProductsGroup from "../components/ProductsGroup.vue";

export default {
  components: { Intro, ProductsGroup },
  data: () => ({
    loading: true,
    category: {
      products: [],
    },
  }),
  async created() {
    await this.loadCategory();
  },
  methods: {
    async loadCategory() {
      this.loading = true;
      const id = this.$route.params.id;
      const response = await categoriesAPI.loadCategory(id);
      this.category = response;
      this.loading = false;
    },
  },
};
</script>

<style></style>
