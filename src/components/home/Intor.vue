<template>
  <div class="intro">
    <v-container fill-height>
      <v-row align="center">
        <v-col>
          <v-img :src="require('../../assets/whiteWhaleLogo.png')" width="350"></v-img>
          <p class="display-1 mt-6 white--text text-shadow">
            All Your Home Appliances
          </p>
          <p class=" mt-4 white--text text-shadow big-text">
            In One Place
          </p>
        </v-col>
        <v-col>
          <v-img :src="require('../../assets/Appliances.png')"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .intro {
    height: 118vh;
    background-color: #fdbd3c;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 86%);
  }
  .text-shadow {
    text-shadow: 2px 1px 4px #CCCCCC80;
  }
  .big-text{
    font-weight: 900 !important;
    font-size: 4rem !important;
  }
</style>