<template>
  <v-app>
    <v-container fluid>
      <main-app-bar></main-app-bar>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import MainAppBar from './components/MainAppBar';

export default {
  name: "App",

  components: {MainAppBar},

  data: () => ({
    //
  })
};
</script>
