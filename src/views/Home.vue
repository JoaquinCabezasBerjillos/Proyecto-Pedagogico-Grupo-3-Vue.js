<template>
  <main>
    <Servicios />
    <Productos />
  </main>
</template>

<script>
import Servicios from "../components/Servicios.vue";
import Productos from "../components/Productos.vue";

export default {
  components: {
    Servicios,
    Productos,    
  },
};
</script>

<style scoped>
  /* @import "../assets/css/bootstrap.min.css";   */
  @import "../assets/css/home/servicios.css";
  @import "../assets/css/home/productos-style.css";
</style>