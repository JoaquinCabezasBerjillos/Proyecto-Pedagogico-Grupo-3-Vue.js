<template>

<div class="app-card app-card-settings shadow-sm p-3">
    <div class="app-card-body">
      <ProductosForm />
      <!-- <ProductosForm v-form="producto in producto" :key="producto.id" :producto="producto"></ProductosForm> ver video 5 vuex para el listado de productos -->
    </div>
    </div>
</template>

<script>
import ProductosForm from "@/components/ProductosForm.vue";


export default {

  components: {   
    ProductosForm,
   
  },

  

   
};
</script>

<style scoped></style>
