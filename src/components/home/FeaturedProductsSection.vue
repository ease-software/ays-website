<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-shadow big-text text-center">
          <strong class="my-auto">Featured Products</strong>
        </h1>
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
    await this.loadFeaturedProducts();
  },
  methods: {
    async loadFeaturedProducts() {
      this.loading = true;
      const response = await productsAPI.loadProducts();
      this.products = response;
      this.loading = false;
    },
  },
};
</script>

<style>
.text-shadow {
  text-shadow: 2px 1px 4px #777777;
}
.big-text {
  font-weight: 900 !important;
  font-size: 4rem !important;
}

.category-card {
  border-color: #fdbd3c !important;
  border-top-left-radius: 80px !important;
  border-bottom-right-radius: 80px !important;
}

.category-card:hover {
  cursor: pointer;
  background-color: #fdbd3c25;
}

.new-product-tag {
  position: relative;
  top: -23px;
  right: -22px;
  z-index: 2;
}
.new-product-tag-image {
  position: absolute;
  top: 200;
  right: 0;
}
</style>
