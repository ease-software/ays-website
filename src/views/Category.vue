<template>
  <div>
    <intro />
    <div class="ma-16"></div>
    <products />
    <div class="ma-16"></div>
  </div>
</template>

<script>
import Intro from "../components/category/Intro.vue";
import Products from "../components/category/Products.vue";
export default {
  components: { Intro, Products },
};
</script>

<style></style>
