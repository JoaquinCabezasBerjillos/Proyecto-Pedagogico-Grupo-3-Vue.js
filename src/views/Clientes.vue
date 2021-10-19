<template>
  <div class="row g-4 mb-4">
    <Search :clientes="clientes" />
  </div>
  <div class="row g-4 mb-4">
    <div
      v-for="cliente in clientes"
      :key="cliente.id"
      class="col-6 col-md-4 col-xl-3 col-xxl-3"
    >
      <ClientesCard :cliente="cliente" @cliente-borrado="actualizarListado" />
    </div>
  </div>
</template>

<script>
import ClientesCard from "@/components/ClientesCard.vue";
import ClienteService from "@/services/ClienteService.js";
import Search from "@/components/Search.vue";

export default {
  components: {
    ClientesCard,
    Search,
  },

  data() {
    return {
      clientes: [],
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