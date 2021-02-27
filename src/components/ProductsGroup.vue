<template>
  <div>
    <v-container>
      <v-row
        align="center"
        class="mb-8"
        v-for="nth_categories_group in products.length / 4"
        :key="nth_categories_group"
      >
        <v-col v-for="n in 4" :key="n" cols="12" md="6" sm="12" lg="3" :class="{'pa-8': $vuetify.breakpoint.smAndDown}">
          <v-card
            flat
            outlined
            class="product-card pa-0"
            elevation="8"
            route
            :to="
              `/categories/somecategory/${
                products[(nth_categories_group - 1) * 4 + (n - 1)].name
              }`
            "
            :ripple="{ class: 'orange--text' }"
          >
            <div class="new-product-tag">
              <v-img
                :src="require(`../assets/new_product_tag.svg`)"
                class="new-product-tag-image"
                v-if="products[(nth_categories_group - 1) * 4 + (n - 1)].isNew"
              ></v-img>
            </div>
            <v-card-title>
              <v-spacer></v-spacer>
              <div style="height: 160px">
                <v-img
                  :src="
                    require(`../assets/${
                      products[(nth_categories_group - 1) * 4 + (n - 1)]
                        .asset_image
                    }`)
                  "
                ></v-img>
              </div>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-title>
              <v-spacer></v-spacer>
              <h4>
                {{ products[(nth_categories_group - 1) * 4 + (n - 1)].name }}
              </h4>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
              <p class="text-center" style="height: 80px">
                {{
                  products[(nth_categories_group - 1) * 4 + (n - 1)]
                    .short_description
                }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),
};
</script>

<style>
.product-card {
  border-color: #fdbd3c !important;
  border-top-left-radius: 80px !important;
  border-bottom-right-radius: 80px !important;
  overflow: hidden;
}
</style>
