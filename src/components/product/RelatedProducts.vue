<template>
  <div>
    <products-group :products="products" />
  </div>
</template>

<script>
import ProductsGroup from '../ProductsGroup.vue';
export default {
  components: { ProductsGroup },
  data: () => ({
    products: [
      {
        name: "WD-1299MT",
        asset_image: "washer.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: true,
      },
      {
        name: "WD-1299MT",
        asset_image: "washer2.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: true,
      },
      {
        name: "WD-1299MT",
        asset_image: "washer.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: false,
      },
      {
        name: "WD-1299MT",
        asset_image: "cond.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: true,
      },
    ],
  }),
};
</script>

<style></style>
