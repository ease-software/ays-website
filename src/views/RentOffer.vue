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
      <div class="my-16"></div>
      <intro :offer="apartment" />
      <div class="my-8"></div>
      <similar-offers />
      <div class="my-16"></div>
    </div>
  </div>
</template>

<script>
import ApartmentsAPI from "../api/apartments";

import Intro from "../components/rentOffer/Intro.vue";
import SimilarOffers from "../components/rentOffer/SimilarOffers.vue";
export default {
  components: { Intro, SimilarOffers },
  data: () => ({
    loading: true,
    apartment: {
      properties: [],
      gallery_images: [],
    },
  }),
  async created() {
    await this.loadApartment();
  },
  methods: {
    async loadApartment() {
      this.loading = true;
      const id = this.$route.params.offer;
      const response = await ApartmentsAPI.loadApartment(id);
      response.properties = JSON.parse(response.properties);
      this.apartment = response;
      this.loading = false;
    },
  },
};
</script>

<style></style>
