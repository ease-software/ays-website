<template>
  <div>
    <div class="my-16"></div>
    <intro />
    <div class="my-8"></div>
    <similar-offers />
    <div class="my-16"></div>
  </div>
</template>

<script>
import Intro from '../components/rentOffer/Intro.vue';
import SimilarOffers from '../components/rentOffer/SimilarOffers.vue';
export default {
  components: { Intro, SimilarOffers },
};
</script>

<style></style>
