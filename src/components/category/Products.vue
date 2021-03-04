<template>
  <div>
    <products-group :products="products" />
  </div>
</template>

<script>
import ProductsGroup from "../ProductsGroup.vue";
export default {
  components: { ProductsGroup },
  data: () => ({
    products: [],
  }),
};
</script>

<style></style>
