<template>
<div class="app-content pt-3 p-md-3 p-lg-4">
      <UsuariosTable />
      <!-- <UsuariosTable v-form="Usuarios in Usuarios" :key="Usuarios.id" :Usuarios="Usuarios"></UsuariosTable> ver video 5 vuex para el listado de productos -->
</div>
</template>

<script>
import UsuariosTable from "@/components/UsuariosTable.vue";


export default {

  components: {   
    UsuariosTable,
  },

};
</script>

<style scoped></style>