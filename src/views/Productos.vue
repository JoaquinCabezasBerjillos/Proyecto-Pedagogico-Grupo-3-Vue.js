<template>
  <div class="row g-4 mb-4">
    <SearchProducto /> 
     
  </div>
  <div class="row g-4 mb-4">
    <div
      v-for="producto in productos"
      :key="producto.id">
      
      <ProductoCard :productos="producto"></ProductoCard>
    </div>
  </div>
</template>

<script>
import SearchProducto from "@/components/SearchProducto.vue";
import ProductoCard from "@/components/ProductoCard.vue";

export default {
  components: {
     SearchProducto,
     ProductoCard,
  },
   data () {
      return {
        producto: [
          {
            nombre: 'Pienso',
            precio: '11,83€',
            categoria: 'medicamentos',            
            descripcion: 'Cápsulas para el pelo de las Mascotas',
            foto: 'coatex.jpg',           
            producto_id: '1',
          }
        ]
      }
    },
   

  
};
</script>

<style scoped></style>
