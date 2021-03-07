<template>
  <div class="rent-appartment-section-container">
    <div v-if="loading">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </div>
          <div v-else>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      class=""
    >
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-img
          :src="item.source"
          gradient="to left, #fdbd3c, #fdbd3c02"
          ><v-container>
            <v-row >
              <v-col></v-col>
              <v-col>
                <div class="mt-16 pb-16">
                  
                  
                  <p class="big-text  white--text" style="color:black !important">
                   {{$i18n.locale == 'ar'? item.ar_text : item.text}}
                  </p>
                  
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-carousel-item>
    </v-carousel>
          </div>
  </div>
</template>

<script>
import offersCarouselAPI from '../../api/offersCarousel';

export default {
  data() {
    return {
      loading: true,
      items: []
    };
  },
  async created(){
    await this.loadItems();
  },
  methods: {
    async loadItems(){
      this.loading = true;
      const response = await offersCarouselAPI.loadItems();
      this.items = response;
      this.loading = false;
    }
  }
};
</script>

<style>
.rent-appartment-section-container {
  background-color: #fdbd3c;
  clip-path: polygon(0 20%, 50% 0, 100% 20%, 100% 100%, 0 100%);
}
</style>