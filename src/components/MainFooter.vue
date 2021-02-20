<template>
  <v-footer dark class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="6">
          <v-img
            contain
            :src="require('../assets/logo_white.png')"
            alt=""
            height="45"
          />
        </v-col>
        <v-col cols="3" md="12" lg="3">
          <div>
            <strong class="display-1">Links</strong>
          </div>
          <div class="my-4" v-for="(link, index) of links" :key="index">
            <v-btn dark plain route :to="link.rout">
              <strong>{{ link.name }} </strong>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="12" lg="3">
          <div>
            <strong class="display-1">Contact Us</strong>
          </div>
          <div
            class="my-4"
            v-for="(contact, index) of contacts_list"
            :key="index"
          >
            <a :href="contact.link" class="white--text">
              <v-icon class="mx-4">{{ contact.icon }}</v-icon>
              {{ contact.name }}</a
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "Home", rout: "#" },
      { name: "About", rout: "#" },
      { name: "Contact", rout: "#" },
    ],
    contacts_list: [
      { name: "+249910010077", link: "tel:+249910010077", icon: "mdi-phone" },
      {
        name: "youremail@gmail.com",
        link: "mailto:youremail@gmail.com",
        icon: "mdi-email",
      },
      {
        name: "Rangpur City",
        link: "https://goo.gl/maps/cvumpjVuT6Uc67T38",
        icon: "mdi-map",
      },
      {
        name: "find us on facebook",
        link: "https://www.facebook.com/facebook",
        icon: "mdi-facebook",
      },
    ],
  }),
};
</script>

<style>
.footer-section {
  background-color: #000000;
}
</style>
