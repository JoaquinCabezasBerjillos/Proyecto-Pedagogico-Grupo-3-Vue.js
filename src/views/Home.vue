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
}
};
</script>

<style>

</style>
