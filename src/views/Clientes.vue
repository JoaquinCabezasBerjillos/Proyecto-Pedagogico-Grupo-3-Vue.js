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
    
    <EditClientes :cliente="cliente"/>
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

    onSubmit() {
      if (this.cliente.id) {
        // Actualizar
       ClienteService.updateCliente(this.cliente.id, this.cliente)

          .then((respuesta) => {
            console.log(respuesta.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        ClienteService.createCliente(this.cliente)
          .then((respuesta) => {
            this.$emit("usuario-actualizado");

            console.log(respuesta.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
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