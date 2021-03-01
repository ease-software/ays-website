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
            All Your Home Appliances
          </p>
          <p class=" mt-4 white--text text-shadow big-text">
            In One Place
          </p>
        </v-col>
        <v-col cols="12" lg="6" class="pt-12 pb-12">
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="slide in 5" :key="slide">
              <v-img :src="require('../../assets/Appliances.png')"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
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
