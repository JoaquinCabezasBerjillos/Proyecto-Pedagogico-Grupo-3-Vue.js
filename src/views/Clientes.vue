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
      <ClientesCard :cliente="cliente" @editar-cliente="editarCliente" />
    </div>

    <EditClientes :cliente="clienteEditar" @cliente-editado="actualizarListado"/>
  </div>
</template>

<script>
import ClientesCard from "@/components/ClientesCard.vue";
import ClienteService from "@/services/ClienteService.js";
import Search from "@/components/Search.vue";
import EditClientes from "@/components/EditClientes.vue";

export default {
  components: {
    ClientesCard,
    Search,
    EditClientes
  },

  data() {
 
    return {
      clientes: [],
      clienteEditar: {}
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
    editarCliente(cliente) {
      this.clienteEditar = cliente
    }
  },
};
</script>

<style scoped>
.btn-primary {
  background: #053189;
  color: #fff;
  border-color: #053189;
}
</style>