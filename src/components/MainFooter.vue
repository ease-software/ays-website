<template>
  <v-footer dark class="py-16">
    <v-container>
      <v-row>
        <v-col>
          <v-img
            contain
            :src="require('../assets/logo_white.png')"
            alt=""
            height="45"
          />
        </v-col>
        <v-col></v-col>
        <v-col>
          <div>
            <strong class="display-1">Links</strong>
          </div>
          <div class="my-4" v-for="(link, index) of links" :key="index">
            <v-btn dark plain route :to="link.rout"> 
              <strong>{{link.name}} </strong>
            </v-btn>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong class="display-1">Contact Us</strong>
          </div>
          <div class="my-4"  v-for="(contact, index) of contacts_list" :key="index">
            <strong class="headline">{{contact}}</strong>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: ()=>({
    links : [
      {name: 'Home', rout: '#'},
      {name: 'About', rout: '#'},
      {name: 'Contact', rout: '#'},
    ],
    contacts_list: [
      '+249910010077', 'youremail@gmail.com', 'Rangpur City'
    ]
  })
};
</script>

<style>
.footer-section {
  background-color: #000000;
}
</style>