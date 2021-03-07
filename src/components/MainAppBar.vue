<template>
  <div>
    <v-app-bar elevate-on-scroll app color="white">
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            contain
            :src="require('../assets/logo.png')"
            alt=""
            height="45"
          />
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.lgAndUp">
        <v-btn
          plain
          color="black"
          v-for="(page, index) of mainPages"
          :key="index"
          route
          :to="page.rout"
        >
          <strong>{{ page.name }}</strong>
        </v-btn>
        <v-btn color="#fdbd3c" plain @click="switchLang">
          <h4 v-if="$i18n.locale == 'en'">عربي</h4>
          <h4 v-if="$i18n.locale == 'ar'">English</h4>
        </v-btn>
      </div>

      <div v-else>
        <v-app-bar-nav-icon
          class="mx-8"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      v-if="!$vuetify.breakpoint.lgAndUp"
    >
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item
            v-for="(page, index) of mainPages"
            :key="index"
            route
            :to="page.rout"
          >
            <v-list-item-title>{{ page.name }}</v-list-item-title>
          </v-list-item>
          <v-divider class=""></v-divider>
        </v-list-item-group>
        <v-list-item-group active-class="text--accent-4" color="#fdbd3c">
          <v-btn color="#fdbd3c" plain @click="switchLang">
            <h4 v-if="$i18n.locale == 'en'">عربي</h4>
            <h4 v-if="$i18n.locale == 'ar'">English</h4>
          </v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    mainPages: [],
  }),
  created() {
    this.drawer = this.$vuetify.breakpoint.lgAndUp;
    this.mainPages = [
      { name: this.$t("appbar.home"), rout: "/" },
      { name: this.$t("appbar.products"), rout: "/products" },
      { name: this.$t("appbar.apartments"), rout: "/apartments" },
      { name: this.$t("appbar.about"), rout: "/about" },
    ];
  },
  methods: {
    switchLang() {
      let lang = this.$i18n.locale;
      let newLang = "";
      if (lang == "en") {
        newLang = "ar";
        this.$vuetify.rtl = true;
      } else {
        newLang = "en";
        this.$vuetify.rtl = false;
      }

      this.$i18n.locale = newLang;

      window.localStorage.setItem("lang", newLang);

      this.$forceUpdate();

      this.$emit("rerender", "lang switch");
    },
  },
};
</script>

<style></style>
