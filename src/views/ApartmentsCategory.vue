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
      <div class="py-10"></div>
      <apartments-group :rentOffers="offers" />
      <div class="py-16"></div>
    </div>
  </div>
</template>

<script>
import ApartmentsAPI from "../api/apartments";

import intro from "../components/apartmentsCategory/intro.vue";
import ApartmentsGroup from '../components/ApartmentsGroup.vue';
export default {
  components: { intro, ApartmentsGroup },
  data: () => ({
    loading: true,
    offers: [],
  }),
  async created() {
    await this.loadFeaturedPropertiesOffers();
  },
  methods: {
    async loadFeaturedPropertiesOffers() {
      this.loading = true;
      const response = await ApartmentsAPI.loadApartmentsInCategory(this.$route.params.category_slug);
      this.offers = response;
      this.loading = false;
    },
  },
};
</script>

<style></style>
