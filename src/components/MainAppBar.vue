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
          rout
          :to="page.rout"
        >
          <strong>{{ page.name }}</strong>
        </v-btn>
        <v-btn color="#fdbd3c" plain>
          <h4>عربي</h4>
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
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
          v-for="(page, index) of mainPages"
          :key="index"
          rout
          :to="page.rout"
        >
          <v-list-item>
            <v-list-item-title>{{ page.name }}</v-list-item-title>
          </v-list-item>
          <v-divider class=""></v-divider>
        </v-list-item-group>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
          color="#fdbd3c"
        >
          <v-list-item>
            <v-list-item-title>عربي</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    mainPages: [
      { name: "Home", rout: "/" },
      { name: "Products", rout: "#" },
      { name: "Rent Appartment", rout: "#" },
      { name: "About us", rout: "#" },
    ],
  }),
  created() {
    this.drawer = this.$vuetify.breakpoint.lgAndUp;
  },
};
</script>

<style></style>
