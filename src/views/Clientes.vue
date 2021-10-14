<template>
<div>
<Search />
</div>
  <div
    v-for="cliente in clientes"
    :key="cliente.id"
    class="col-6 col-md-4 col-xl-3 col-xxl-2"
  >
    <ClientesCard :cliente="cliente" />
  </div>
</template>

<script>
import ClientesCard from "@/components/ClientesCard.vue";
import ClienteService from "@/services/ClienteService.js";
import Search from '@/components/Search.vue';

export default {
  components: {
    ClientesCard,
    Search,
  },

  data() {
    return {
      clientes: [
        {
          nombre: "Javi",
          apellido: "Moreno",
          movil: "657021443",
        },
      ],
    };
  },
  created() {
    ClienteService.getClientes()
      .then((respuesta) => {
        this.clientes = respuesta.data;
      })
      .catch((error) => {
        console.log(error);
      });
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