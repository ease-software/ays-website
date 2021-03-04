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
  </div>
</template>

<script>
import productsAPI from "../api/products";
import RentAppartmentSection from "../components/home/RentAppartmentSection.vue";
import ProductsDetails from "../components/product/Details.vue";
import RelatedProducts from "../components/product/RelatedProducts.vue";
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
        disabled: true,
        href: "/categories/Category",
      },
      {
        text: "Product Name",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
    loading: true,
    product: {
      category: {},
      gallery_images: [],
    },
  }),
  async created() {
    await this.loadProduct();
    this.items[1].text = this.product.category.name ;
    this.items[1].href = `/categories/${this.product.category.id}`
    this.items[1].disabled = false ;
    this.items[2].text = this.product.name
  },
  methods: {
    async loadProduct() {
      this.loading = true;
      const id = this.$route.params.id;
      const response = await productsAPI.loadProduct(id);
      response.features = JSON.parse(response.features);
      response.details = JSON.parse(response.details);
      this.product = response;
      this.loading = false;
    },
  },
};
</script>

<style></style>
