<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8">
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            class=""
          >
            <v-carousel-item
              v-for="(image, index) of offer.gallery_images"
              :key="index"
              :height="200"
            >
              <v-img contain :src="image.source"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" lg="4">
          <p class="display-1 font-weight-black">Property Details</p>
          <v-simple-table class="pt-4">
            <tbody>
              <tr
                class="text-center"
                v-for="(property, index) of offer.properties"
                :key="index"
              >
                <td>{{ property.name }}</td>
                <td>{{ property.value }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-4">
          <p class="display-1 font-weight-black">Description</p>
          <p>{{ offer.description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    offer: {
      required: true,
      type: Object,
      default: () => ({
        properties: [],
        gallery_images: [],
      }),
    },
  },
  data: () => ({}),
  created() {
    this.offer.gallery_images.unshift({
      id: 0,
      source: this.offer.image,
      apartment_id: this.offer.id,
      created_at: null,
      updated_at: null,
    });
  },
};
</script>

<style></style>
