<template>
  <v-container class="">
    <v-row>
      <v-col>
        <p class="display-1 font-weight-black">Related Products</p>
      </v-col>
    </v-row>

    <v-row
      align="center"
      class="mb-8"
      v-for="nth_categories_group in products.length / 4"
      :key="nth_categories_group"
    >
      <v-col v-for="n in 4" :key="n" cols="12" md="6" sm="12" lg="3">
        <v-card flat outlined class="category-card pa-0" elevation="8">
          <div class="new-product-tag">
            <v-img
              :src="require(`../../assets/new_product_tag.svg`)"
              class="new-product-tag-image"
              v-if="products[(nth_categories_group - 1) * 4 + (n - 1)].isNew"
            ></v-img>
          </div>
          <v-card-title>
            <v-spacer></v-spacer>
            <div style="height: 220px">
              <v-img
                :src="
                  require(`../../assets/${
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
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        name: "WD-1299MT",
        asset_image: "washer.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: true,
      },
      {
        name: "WD-1299MT",
        asset_image: "washer2.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: true,
      },
      {
        name: "WD-1299MT",
        asset_image: "washer.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: false,
      },
      {
        name: "WD-1299MT",
        asset_image: "cond.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE",
        isNew: true,
      },
    ],
  }),
};
</script>

<style></style>
