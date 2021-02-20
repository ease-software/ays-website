<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-shadow big-text text-center mb-8">
          <strong class="my-auto">CATEGORIES</strong>
        </h1>
      </v-col>
    </v-row>
    <v-row
      align="center"
      v-for="nth_categories_group in categoires.length / 4"
      :key="nth_categories_group"
    >
      <v-col v-for="n in 4" :key="n" cols="12" md="6" sm="12" lg="3">
        <v-hover v-slot="{ hover }">
          <v-card flat outlined class="category-card pa-4" :elevation="hover ? 8 : 0">
            <v-card-title>
              <v-spacer></v-spacer>
              <div style="height: 80px">
                <v-img
                  :src="
                    require(`../../assets/${
                      categoires[(nth_categories_group - 1) * 4 + (n - 1)]
                        .asset_image
                    }`)
                  "
                ></v-img>
              </div>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-title>
              <v-spacer></v-spacer>
              <h3>
                {{ categoires[(nth_categories_group - 1) * 4 + (n - 1)].name }}
              </h3>
              <v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    categoires: [
      { name: "DEFRIGERATORS", asset_image: "DEFRIGERATORS.svg" },
      { name: "DISPENSERS", asset_image: "dispensers.svg" },
      { name: "WASHING", asset_image: "WASHING.svg" },
      { name: "DISH WASHER", asset_image: "DISH_WASHER.svg" },
      { name: "OVENS", asset_image: "OVENS.svg" },
      { name: "HEATERS", asset_image: "HEATERS.svg" },
      { name: "WASHING", asset_image: "WASHING2.svg" },
      { name: "AIR COND", asset_image: "AIR_COND.svg" },
    ],
  }),
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 1px 4px #777777;
}
.big-text {
  font-weight: 900 !important;
  font-size: 3rem !important;
}
.category-card {
  border-color: #fdbd3c;
  border-radius: 20px !important;
}
.category-card:hover {
  cursor: pointer;
  background-color: #fdbd3c25;
}
</style>
