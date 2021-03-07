<template>
  <div class="intro ">
    <v-container class="py-8">
      <v-row class="text-center">
        <v-col>
          <h1 class="display-2 font-weight-bold">
            {{ $t("pages.apartments.intro.title") }}
          </h1>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <p class="headline font-weight-bold">
            {{ $t("pages.apartments.intro.text") }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(offer, index) of offers"
          :key="index"
          cols="12"
          lg="4"
          sm="12"
        >
          <v-card elevation="2" route :to="{path:`/apartments/${offer.slug}`}">
            <v-card-title>
              <v-container fill-height>
                <v-row align="center">
                  <v-col cols="12" lg="3" class="text-center">
                    <p class="bedrooms-count font-weight-black pt-4">
                      {{ offer.bedrooms_count }}
                    </p>
                  </v-col>
                  <v-col cols="12" lg="9">
                    <h1
                      class="display-1 font-weight-bold"
                      style="word-wrap: normal !important"
                    >
                      {{ offer.title }}
                    </h1>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-title>
            <hr class="orang-divider" />
            <v-card-text>{{ offer.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mdAndDown"
        ><v-col class="my-16 py-16"></v-col
      ></v-row>
      <v-row v-else><v-col class="my-6"></v-col></v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    offers: [],
  }),
  created() {
    this.offers = this.$t("pages.apartments.intro.offers_categories");
  },
};
</script>

<style scoped>
.intro {
  background-color: #fdbd3c;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
}
.bedrooms-count {
  color: #fdbd3c;
  font-size: 7.5rem;
  opacity: 0.5;
}
.orang-divider {
  border-color: #fdbd3c;
  border-style: solid;
  width: 90%;
  margin: auto auto;
  padding: 0;
}
</style>
