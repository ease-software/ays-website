<template>
  <div>
    <intro />
    <div class="py-6"></div>
    <rent-offers />
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
