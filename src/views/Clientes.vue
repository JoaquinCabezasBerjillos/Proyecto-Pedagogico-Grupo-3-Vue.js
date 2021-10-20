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

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar usuario</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"><edit-clientes :cliente="cliente"></edit-clientes></div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">Cerrar
          </button>
          <button type="submit" class="btn btn-primary">Guardar cambios</button>
        </div>
      </div>
    </div>
      </div>
    </div>
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