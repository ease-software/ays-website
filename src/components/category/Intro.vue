<template>
  <div class="intro text-center">
    <h1 class="display-2 font-weight-black py-12">{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.intro {
  min-height: 30vh;
  background-color: #fdbd3c;
  clip-path: polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%);
}
</style>