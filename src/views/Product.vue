<template>
  <div>
    <v-container class="pt-6">
      <v-breadcrumbs :items="items" large class="mb-6">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <products-details />
    </v-container>
    <div class="my-16"></div>
    <rent-appartment-section />
    <div class="my-16"></div>
    <related-products />
  </div>
</template>

<script>
import RentAppartmentSection from "../components/home/RentAppartmentSection.vue";
import ProductsDetails from "../components/product/Details.vue";
import RelatedProducts from '../components/product/RelatedProducts.vue';
export default {
  components: { RentAppartmentSection, ProductsDetails, RelatedProducts },
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "Category Name",
        disabled: false,
        href: "/categories/Category",
      },
      {
        text: "Product Name",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
};
</script>

<style></style>
