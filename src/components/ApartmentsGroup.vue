<template>
  <div>
    <v-container class="">
      <v-row
        v-for="(nth_apartments_group, index) in rentOffers.length / 3"
        :key="index"
      >
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          md="6"
          sm="12"
          lg="4"
          :class="{ 'pa-8': $vuetify.breakpoint.smAndDown }"
        >
          <v-card
            flat
            outlined
            class="pa-0 mt-16 offer-card"
            elevation="8"
            route
            :to="
              `/apartments/category_slug/${
                rentOffers[(nth_apartments_group - 1) * 3 + (n - 1)].title
              }`
            "
            :ripple="{ class: 'orange--text' }"
          >
            <v-card-text class="pa-0 ma-0">
              <v-img
                :src="
                  require(`../assets/${
                    rentOffers[(nth_apartments_group - 1) * 3 + (n - 1)]
                      .asset_image
                  }`)
                "
              ></v-img>
            </v-card-text>
            <v-card-text class="text-center">
              <h1 class="headline black--text font-weight-bold">
                {{ rentOffers[(nth_apartments_group - 1) * 3 + (n - 1)].title }}
              </h1>
              <p class="pt-2 black--text">
                {{
                  rentOffers[(nth_apartments_group - 1) * 3 + (n - 1)]
                    .description
                }}
              </p>
            </v-card-text>
            <v-card-actions class="pa-4 footer ma-0">
              <v-icon left color="white">mdi-square-outline</v-icon>
              {{ rentOffers[(nth_apartments_group - 1) * 3 + (n - 1)].area }}
              <v-spacer></v-spacer>
              <v-icon left color="white">mdi-map-marker</v-icon>
              {{ rentOffers[(nth_apartments_group - 1) * 3 + (n - 1)].area }}
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    rentOffers: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #fdbd3c !important;
  color: white;
}
.offer-card {
  border-color: #fdbd3c !important;
  border-top-left-radius: 80px !important;
  overflow: hidden;
}

.offer-card:hover {
  cursor: pointer;
  background-color: #fdbd3c25;
}
</style>
