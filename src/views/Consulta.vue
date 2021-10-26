<template>

<div class="app-card app-card-settings shadow-sm p-3">
    <div class="app-card-body">
      <ConsultaForm />
     <ConsultaForm v-form="Consulta in Consulta" :key="Consulta.id" :Consulta="Consulta"></ConsultaForm> ver video 5 vuex para el listado de productos -->
    </div>
    </div>
</template>

<script>
import ConsultaForm from "@/components/ConsultaForm.vue";


export default {

  components: {   
    ConsultaForm,
   
  },

  

   
};
</script>

<style scoped></style>
