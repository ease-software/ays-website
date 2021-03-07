<template>
  <div class="intro">
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="6" class="pt-12 text-center">
          <v-img
            :src="require('../../assets/whiteWhaleLogo.png')"
            :width="$vuetify.breakpoint.lgAndUp ? 350 : 250"
            class="mx-auto"
          ></v-img>
          <p class="display-1 mt-6 white--text text-shadow">
            {{ $t("pages.home.intro.title") }}
          </p>
          <p class=" mt-4 white--text text-shadow big-text">
            {{ $t("pages.home.intro.title_ext") }}
          </p>
        </v-col>
        <v-col cols="12" lg="6" class="pt-12 pb-12">
          <div v-if="loading">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </div>
          <div v-else>
          <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(image, index) in images" :key="index">
              <v-img :src="image.source"></v-img>
            </v-carousel-item>
          </v-carousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    loading: true,
    images: [],
  }),
  async created(){
    await this.loadImages();
  },
  methods: {
    async loadImages(){
      this.loading = true;
      const response = await axios.get('home-carousel');
      this.images = response.data;
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.intro {
  min-height: 90vh;
  background-color: #fdbd3c;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 86%);
}
.text-shadow {
  text-shadow: 2px 1px 4px #cccccc80;
}
.big-text {
  font-weight: 900 !important;
  font-size: 4rem !important;
}
</style>
