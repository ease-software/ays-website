<template>
  <div>
    <intro />
    <div class="py-10"></div>
    <rent-offers />
    <div class="py-16"></div>
  </div>
</template>

<script>
import intro from "../components/apartmentsCategory/intro.vue";
import RentOffers from '../components/apartmentsCategory/rentOffers.vue';
export default {
  components: { intro, RentOffers },
};
</script>

<style></style>
