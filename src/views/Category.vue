<template>
  <div>
    <intro :category="category" />
    <div class="ma-16"></div>
    <products-group :products="category.products" />
    <div class="ma-16"></div>
  </div>
</template>

<script>
import categoriesAPI from '../api/categories';

import Intro from "../components/category/Intro.vue";
import ProductsGroup from '../components/ProductsGroup.vue';

export default {
  components: { Intro, ProductsGroup },
  data: ()=>({
    category: {
      products: []
    }
  }),
  async created() {
    await this.loadCategory();
  },
  methods: {
    async loadCategory(){
      const id = this.$route.params.id;
      const response = await categoriesAPI.loadCategory(id);
      this.category = response ;
    }
  }
};
</script>

<style></style>
