<template>
  <div>
    <apartments-group :rentOffers="rentOffers" />
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