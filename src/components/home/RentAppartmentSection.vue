<template>
  <div class="rent-appartment-section-container">
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      class=""
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img
          :src="require('../../assets/rent_apprtment.png')"
          gradient="to left, #fdbd3c, #fdbd3c02"
          ><v-container>
            <v-row >
              <v-col></v-col>
              <v-col>
                <div class="mt-16 pb-16">
                  
                  <p class="display-1 white--text">
                    Rent Your
                  </p>
                  <p class="big-text" style="color:black !important">
                    Perfect Home
                  </p>
                  <p class="display-1 headline white--text">
                    For Your Family
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>

<style>
.rent-appartment-section-container {
  background-color: #fdbd3c;
  clip-path: polygon(0 20%, 50% 0, 100% 20%, 100% 100%, 0 100%);
}
</style>