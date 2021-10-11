<template>
  <main>
    <Servicios />
    <Tienda />
    <!-- <Productos /> -->
  </main>
</template>

<script>
import Servicios from "../components/Servicios.vue";
import Tienda from "../components/Tienda.vue";


export default {
  components: {
    Servicios,
    Tienda,    
  },
};
</script>

<style scoped>
  /* @import "../assets/css/bootstrap.min.css";  */
  @import "../assets/css/home/home.css";
  
</style>