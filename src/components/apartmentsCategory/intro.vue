<template>
   <div class="intro ">
     <v-container class="py-8">
        <v-row class="text-center">
          <v-col>
            <h1 class="display-2 font-weight-bold">{{title}}</h1>
          </v-col>
        </v-row>
        <v-row><v-col class="my-6"></v-col></v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  computed:{
    title(){
      const categories = this.$t("pages.apartments.intro.offers_categories");
      for(let category of categories){
        if(category.slug == this.$route.params.category_slug){
          return category.title;
        }
      }
      return  "Error";
    }
  }
}
</script>

<style scoped>
.intro {
  background-color: #fdbd3c;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
}
</style>