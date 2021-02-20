<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-shadow big-text text-center">
          <strong class="my-auto">Featured Products</strong>
        </h1>
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
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE"
      },
      {
        name: "WD-1299MT",
        asset_image: "washer2.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE"
      },
      {
        name: "WD-1299MT",
        asset_image: "washer.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE"
      },
      {
        name: "WD-1299MT",
        asset_image: "cond.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE"
      },
      {
        name: "WD-1299MT",
        asset_image: "defrigrator.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE"
      },
      {
        name: "WD-1299MT",
        asset_image: "washer3.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE"
      },
      {
        name: "WD-1299MT",
        asset_image: "cond2.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE"
      },
      {
        name: "WD-1299MT",
        asset_image: "washer4.png",
        short_description: "WHITE WHALE WASHING MACHINE 12.5 KG TOPLOAD WHIRE"
      }
    ]
  })
};
</script>

<style>
.text-shadow {
  text-shadow: 2px 1px 4px #777777;
}
.big-text {
  font-weight: 900 !important;
  font-size: 4rem !important;
}

.category-card {
  border-color: #fdbd3c !important;
  border-top-left-radius: 80px !important;
  border-bottom-right-radius: 80px !important;
}

.category-card:hover {
  cursor: pointer;
  background-color: #fdbd3c25;
}

.new-product-tag {
  position: relative;
  top: -23px;
  right: -22px;
  z-index: 2;
}
.new-product-tag-image {
  position: absolute;
  top: 200;
  right: 0;
}
</style>