<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-shadow big-text text-center mb-8">
          <strong class="my-auto">CATEGORIES</strong>
        </h1>
      </v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col>
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else align="center">
      <v-col
        v-for="(category, index) of categories"
        :key="index"
        cols="12"
        md="6"
        sm="12"
        lg="3"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            flat
            outlined
            class="category-card pa-4"
            :elevation="hover ? 8 : 0"
            rout
            :to="`/categories/${category.id}`"
          >
            <v-card-title>
              <v-spacer></v-spacer>
              <div style="height: 80px">
                <v-img :src="category.icon"></v-img>
              </div>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-title>
              <v-spacer></v-spacer>
              <h3>
                {{ category.name }}
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
import categoriesAPI from "../../api/categories";

export default {
  data: () => ({
    loading: true,
    categories: [],
  }),
  async created() {
    await this.loadCategories();
  },
  methods: {
    async loadCategories() {
      this.loading = true;
      const response = await categoriesAPI.loadCategories();
      this.categories = response;
      this.loading = false;
    },
  },
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
