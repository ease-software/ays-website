<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-shadow big-text text-center">
          <strong class="my-auto">Featured Products</strong>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <products-group :products="products" />
    </v-row>
  </v-container>
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
      {
        name: "WD-1299MT",
        asset_image: "defrigrator.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: false,
      },
      {
        name: "WD-1299MT",
        asset_image: "washer3.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: true,
      },
      {
        name: "WD-1299MT",
        asset_image: "cond2.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: true,
      },
      {
        name: "WD-1299MT",
        asset_image: "washer4.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: false,
      },
    ],
  }),
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
