<template>
  <div>
    <v-container class="my-16">
      <v-row>
        <v-col class="text-center">
          <h1 class="display-2 font-weight-black">{{$t("pages.apartments.featured.title")}}</h1>
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
        <v-col><apartments-group :rentOffers="offers"/></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ApartmentsAPI from "../../api/apartments";

import ApartmentsGroup from "../ApartmentsGroup.vue";
export default {
  components: { ApartmentsGroup },
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
      const response = await ApartmentsAPI.loadApartments();
      this.offers = response;
      this.loading = false;
    },
  },
};
</script>

<style></style>
