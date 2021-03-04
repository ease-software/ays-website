<template>
  <div>
    <v-container class="mb-4">
      <v-row>
        <v-col>
          <p class="font-weight-black display-2">Related Products</p>
        </v-col>
      </v-row>
      <v-row v-if="loading">
        <v-col>
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else align="center">
        <v-col>
          <products-group :products="products" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import productsAPI from "../../api/products";

import ProductsGroup from "../ProductsGroup.vue";
export default {
  components: { ProductsGroup },
  data: () => ({
    loading: true,
    products: [],
  }),
  async created() {
    await this.loadRelatedProducts();
  },
  methods: {
    async loadRelatedProducts() {
      this.loading = true;
      const response = await productsAPI.loadProducts();
      this.products = response;
      this.loading = false;
    },
  },
};
</script>

<style></style>
