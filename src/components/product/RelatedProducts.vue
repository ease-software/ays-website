<template>
  <div>
    <v-container class="mb-4">
      <v-row>
        <v-col>
          <p class="font-weight-black display-2">{{$t("pages.product.related_products.title")}}</p>
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
  props: {
    product_id: {
      required: true,
      default: 0
    }
  },
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
      const response = await productsAPI.loadSimilarProducts(this.product_id);
      this.products = response;
      this.loading = false;
    },
  },
};
</script>

<style></style>
