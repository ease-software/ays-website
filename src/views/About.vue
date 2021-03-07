<template>
  <div class="about">
    <intro />
    <v-container>
      <v-row>
        <v-col>
          <v-card outlined class="pa-4 my-8">
            <v-card-text class="black--text">
              <p class="" v-html="$t('pages.about.html')">
                
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import intro from '../components/about/intro.vue';
export default {
  components: { intro },
  data: () => ({
    text: ``
  }),
};
</script>
