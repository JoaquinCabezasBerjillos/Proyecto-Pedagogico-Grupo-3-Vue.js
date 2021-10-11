<template>
  <main>
    <Servicios />
    <Tienda />
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
  @import "../assets/css/home/home.css"; 
</style>