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
      <products-group :products="products" />
    </div>
  </div>
</template>

<script>
import productsAPI from '../api/products';
import intro from "../components/products/intro.vue";
import ProductsGroup from '../components/ProductsGroup.vue';
export default {
  components: { intro, ProductsGroup },
  data: ()=>({
    loading: false,
    products: [],
  }),
  async created() {
    await this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.loading = true;
      const response = await productsAPI.loadProducts();
      this.products = response;
      this.loading = false;
    },
  },
};
</script>

<style></style>
