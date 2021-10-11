<template>
<div v-for="cliente in clientes" :key="cliente.id" class="col-6 col-md-4 col-xl-3 col-xxl-2">
  <ClientesCard :cliente="cliente" />
</div>
</template>

<script>
import ClientesCard from  "@/components/ClientesCard.vue"


export default {
components: {
ClientesCard,
},

props: ['id'],

data() {
  return {
    clientes: [
      {
        id: '1',
        nombre: 'Javi',
        apellido: 'moreno',
        movil: '7478384674',
      }
    ]
  }
},

 methods: {
      actualizarListado() {
        this.cliente = null;
        ClienteService.getClientes()
          .then((respuesta) => {
            this.clientes = respuesta.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
</script>

<style>

</style>