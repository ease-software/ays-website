<template>
  <div>
    <v-row>
      <v-col cols="12" lg="7">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="3">
              <div >
                <v-card
                  v-for="(image, index) of product.images"
                  :key="index"
                  outlined
                  shaped
                  class="image-card mb-2"
                  @click="selectedImageSrc = image.src"
                  :class="{
                    'seclected-image': selectedImageSrc === image.src,
                    'mx-2' : !$vuetify.breakpoint.smAndUp
                  }"
                  :ripple="{ class: 'orange--text' }"
                  :width="$vuetify.breakpoint.smAndUp ? '' : '80'"
                  style="display: inline-block"
                >
                  <v-card-text>
                    <v-img :src="require(`../../assets/${image.src}`)"></v-img>
                  </v-card-text>
                </v-card>
              </div>
              
            </v-col>
            <v-col cols="12" sm="9">
              <v-card outlined>
                <v-img
                  :src="require(`../../assets/${selectedImageSrc}`)"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" lg="5">
        <p class="display-2 font-weight-black">WD 1229MT</p>
        <p class="headline ">White Whale Washing Machine</p>
        <div class="mt-2">
          <v-tabs v-model="tab" color="#fdbd3c" grow>
            <v-tabs-slider
              style="height: 15px !important"
              color="#fdbd3c"
            ></v-tabs-slider>
            <v-tab>
              <strong class="font-weight-black text-h5">Details</strong>
            </v-tab>
            <v-tab>
              <strong class="font-weight-black text-h5">Features</strong>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-simple-table class="pt-4">
                <tbody>
                  <tr
                    class="text-center"
                    v-for="(property, index) of product.properties"
                    :key="index"
                  >
                    <td>{{ property.name }}</td>
                    <td>{{ property.value }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>
            <v-tab-item>
              <v-simple-table class="pt-4">
                <tbody>
                  <tr v-for="(feature, index) of product.features" :key="index">
                    <td>
                      <strong>{{ feature }}</strong>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedImageSrc: "washer4.png",
    tab: null,
    product: {
      name: "",
      images: [
        { src: "washer4.png", alt: "image" },
        { src: "washer.png", alt: "image" },
        { src: "washer2.png", alt: "image" },
      ],
      properties: [
        { name: "color", value: "red" },
        { name: "color", value: "red" },
        { name: "color", value: "red" },
        { name: "color", value: "red" },
        { name: "color", value: "red" },
        { name: "color", value: "red" },
      ],
      features: ["Feature one", "Feature one", "Feature one", "Feature one"],
    },
  }),
};
</script>

<style>
.image-card {
  border-top-left-radius: 40px !important;
  border-bottom-right-radius: 40px !important;
  overflow: hidden;
}
.seclected-image {
  border-color: #fdbd3c !important;
}
</style>
