<template>
  <v-app-bar absolute color="white" dark scroll-target="#scrolling-techniques-8">
    <v-toolbar-title>
      <v-img contain :src="require('../assets/logo.png')" alt="" height="45"/>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn plain color="black" v-for="(page, index) of mainPages" :key="index" rout :to="page.rout">
      <strong>{{page.name}}</strong>
    </v-btn>
    <v-btn color="#fdbd3c" plain>
      <h4>عربي</h4>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: ()=>({
    mainPages: [
      {name: 'Home', rout: '#'},
      {name: 'Products', rout: '#'},
      {name: 'Rent Appartment', rout: '#'},
      {name: 'About us', rout: '#'},
    ],
  })
};
</script>

<style>
</style>