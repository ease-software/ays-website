<template>
  <div class="customer-services-info-container">
    <v-img
      :src="require('../../assets/customer_services.png')"
      gradient="to left, #fdbd3c, #fdbd3c02"
      style=""
      ><v-container fill-height>
        <v-row align="center">
          <v-col></v-col>
          <v-col>
            <div class="text-center mt-16 pt-16">
              <h1 class="big-text text-shadow white--text">{{$t("pages.home.customer_services.title")}}</h1>
              <p class="headline white--text">
                {{$t("pages.home.customer_services.text")}}
              </p>
              <h3 class="big-text">
                <v-icon color="black" size="64">mdi-phone</v-icon>
                <span class="mx-4">{{$t("pages.home.customer_services.hotline")}}</span>
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.customer-services-info-container {
  clip-path: polygon(0 20%, 50% 0, 100% 20%, 100% 100%, 0 100%);
}
.contact-infos {
  position: absolute;
  top: -190;
}

.text-shadow {
  text-shadow: 2px 1px 4px #cccccc80;
}
.big-text {
  font-weight: 900 !important;
  font-size: 4rem !important;
}
</style>