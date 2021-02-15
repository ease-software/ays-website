<template>
  <div class="home">
    <intor />
    <div class="ma-16"></div>
    <categories-section />
    <div class="ma-16"></div>
    <customer-services-contact-infos />
    <div class="ma-16"></div>
    <featured-products-section />
    <div class="ma-16"></div>
    <rent-appartment-section />
  </div>
</template>

<script>
import CategoriesSection from '../components/home/CategoriesSection.vue'
import CustomerServicesContactInfos from '../components/home/CustomerServicesContactInfos.vue'
import FeaturedProductsSection from '../components/home/FeaturedProductsSection.vue'
import Intor from '../components/home/Intor.vue'
import RentAppartmentSection from '../components/home/RentAppartmentSection.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Intor,
    CategoriesSection,
    CustomerServicesContactInfos,
    FeaturedProductsSection,
    RentAppartmentSection
    
  }
}
</script>
