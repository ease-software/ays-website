<template>
  <div>
    <v-row>
      <v-col cols="12" lg="7">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="3">
              <div>
                <v-card
                  v-for="(image, index) of product.gallery_images"
                  :key="index"
                  outlined
                  shaped
                  class="image-card mb-2"
                  @click="selectedImageSrc = image.source"
                  :class="{
                    'seclected-image': selectedImageSrc === image.source,
                    'mx-2': !$vuetify.breakpoint.smAndUp,
                  }"
                  :ripple="{ class: 'orange--text' }"
                  :width="$vuetify.breakpoint.smAndUp ? '' : '80'"
                  style="display: inline-block"
                >
                  <v-card-text>
                    <v-img :src="image.source"></v-img>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
            <v-col cols="12" sm="9">
              <v-card outlined>
                <v-img :src="selectedImageSrc"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" lg="5">
        <p class="display-2 font-weight-black">{{ $i18n.locale == 'ar' ? product.ar_name : product.name }}</p>
        <p class="headline ">{{ $i18n.locale == 'ar' ? product.ar_short_description: product.short_description }}</p>
        <div class="mt-2">
          <v-tabs v-model="tab" color="#fdbd3c" grow>
            <v-tabs-slider
              style="height: 15px !important"
              color="#fdbd3c"
            ></v-tabs-slider>
            <v-tab>
              <strong class="font-weight-black text-h5">{{$t("pages.product.details")}}</strong>
            </v-tab>
            <v-tab>
              <strong class="font-weight-black text-h5">{{$t("pages.product.features")}}</strong>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-simple-table class="pt-4">
                <tbody>
                  <tr
                    class="text-center"
                    v-for="(property, index) of product.details"
                    :key="index"
                  >
                    <td>{{ $i18n.locale == 'ar' ? property.ar_name :property.name }}</td>
                    <td>{{ $i18n.locale == 'ar' ? property.ar_value :property.value }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>
            <v-tab-item>
              <v-simple-table class="pt-4">
                <tbody>
                  <tr v-for="(feature, index) of product.features" :key="index">
                    <td>
                      <strong>{{ $i18n.locale == 'ar' ? feature.ar_text : feature.text }}</strong>
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
  props: {
    product: {
      required: true,
      type: Object,
      default: () => ({
        category: {},
        gallery_images: [],
      }),
    },
  },
  data: () => ({
    selectedImageSrc: "",
    tab: null,
  }),
  created() {
    this.product.gallery_images.unshift({
      id: 0,
      source: this.product.image,
      product_id: this.product.id,
      created_at: null,
      updated_at: null,
    });
    this.selectedImageSrc = this.product.image;
  },
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
