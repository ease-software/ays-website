<template>
  <v-app>
    <v-container fluid class="pa-0 ma-0">
      <main-app-bar @rerender="rerender"></main-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
      <main-footer />
    </v-container>
  </v-app>
</template>

<script>
import MainAppBar from "./components/MainAppBar";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",

  components: { MainAppBar, MainFooter },

  data: () => ({
    //
  }),
  created() {
    let lang = window.localStorage.getItem("lang");
    if (lang) {
      if (lang == "ar") {
        this.$i18n.locale = "ar";
        this.$vuetify.rtl = true;
      } else {
        this.$i18n.locale = "en";
        this.$vuetify.rtl = false;
      }
    }
  },
  methods: {
    rerender() {
      window.location.reload();
    },
  },
};
</script>
