<template>
  <v-container>
    <v-row>
      <v-col class="text-center s-container pa-8">
        <p class="s-title display-2 font-weight-bold ">
          {{ $t("pages.apartment.similar_offers.title") }}
        </p>
        <v-container class="">
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
              <apartments-group :rentOffers="offers" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApartmentsAPI from "../../api/apartments";

import ApartmentsGroup from "../ApartmentsGroup.vue";
export default {
  components: { ApartmentsGroup },
  props: {
    apartment_id: {
      required: true,
      default: 0,
    },
  },
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
      const response = await ApartmentsAPI.loadSimilarApartments(
        this.apartment_id
      );
      this.offers = response;
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.s-container {
  background-color: #cccccc99 !important;
}
.s-title {
  text-shadow: 2px 3px 10px #00000099;
}
</style>
