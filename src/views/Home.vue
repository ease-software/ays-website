<template>
  <div class="home">
    <intor />
    <div class="ma-16"></div>
    <categories-section />
    <div class="ma-16"></div>
    <customer-services-contact-infos />
    <div class="ma-16"></div>
  </div>
</template>

<script>
import CategoriesSection from '../components/home/CategoriesSection.vue'
import CustomerServicesContactInfos from '../components/home/CustomerServicesContactInfos.vue'
import Intor from '../components/home/Intor.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Intor,
    CategoriesSection,
    CustomerServicesContactInfos
    
  }
}
</script>
