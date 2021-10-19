<template>
  <div class="row g-4 mb-4">
    <SearchBoton /> 
     
  </div>
  <div class="row g-4 mb-4">
    <div
      v-for="producto in productos" :key="producto.id" class="col-6 col-md-4 col-xl-3 col-xxl-3">
      
      <ProductoCard :producto="producto" @producto-borrado="actualizarListado"></ProductoCard>
    </div>
  </div>
</template>

<script>
import SearchBoton from "@/components/SearchBoton.vue";
import ProductoCard from "@/components/ProductoCard.vue";
import ProductoService from "@/services/ProductoService.js";

export default {
  components: {
     SearchBoton,
     ProductoCard,
  },
   data () {
      return {
        productos: [
          {
            // nombre: null,
            // precio: null,
            // categoria: null,            
            // descripcion: null,
             // foto: 'coatex.jpg',           
            // producto_id: '1',
          }
        ]
      }
    },
   created() {
  ProductoService.getProductos()
  .then(respuesta => {
       this.productos = respuesta.data
     })
  .catch(error => {
       console.log(error)
     })
       },

 methods: {
      actualizarListado() {
        this.producto = null;
        ProductoService.getProductos()
          .then((respuesta) => {
            this.productos = respuesta.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },

  
};
</script>

<style scoped></style>
