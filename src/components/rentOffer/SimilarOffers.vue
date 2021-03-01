<template>
  <v-container>
    <v-row>
      <v-col class="text-center s-container pa-8">
        <p class="s-title display-2 font-weight-bold ">
          You May Also Like
        </p>
        <apartments-group :rentOffers="rentOffers" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApartmentsGroup from '../ApartmentsGroup.vue';
export default {
  components: { ApartmentsGroup },
  data: () => ({
    rentOffers: [
      {
        asset_image: "apartment.png",
        title: "One Bedroom",
        area: "250 SQM",
        location: "Khartoum, Burry",
        description:
          "One bedroom, one bathroom, one hole, one kitchen and one balcony",
      },
      {
        asset_image: "apartment.png",
        title: "One Bedroom",
        area: "250 SQM",
        location: "Khartoum, Burry",
        description:
          "One bedroom, one bathroom, one hole, one kitchen and one balcony",
      },
      {
        asset_image: "apartment.png",
        title: "One Bedroom",
        area: "250 SQM",
        location: "Khartoum, Burry",
        description:
          "One bedroom, one bathroom, one hole, one kitchen and one balcony",
      },
    ],
  }),

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
