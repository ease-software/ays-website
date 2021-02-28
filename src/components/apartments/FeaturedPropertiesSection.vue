<template>
  <div>
     <v-container class="my-16">
        <v-row>
          <v-col class="text-center">
            <h1 class="display-2 font-weight-black">Featured Properties</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col><apartments-group :rentOffers="rentOffers" /></v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import ApartmentsGroup from '../ApartmentsGroup.vue'
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
}
</script>

<style>

</style>