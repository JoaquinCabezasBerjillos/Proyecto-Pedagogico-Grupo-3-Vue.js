<template>
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
        <div class="modal-body">
          <form class="settings-form">
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                v-model="cliente.nombre"
                required=""
              />
            </div>
            <div class="mb-3">
              <label for="apellido" class="form-label">Apellido</label>
              <input
                type="text"
                class="form-control"
                id="apellido"
                v-model="cliente.apellidos"
                required=""
              />
            </div>
            <div class="mb-3">
              <label for="movil" class="form-label">Móvil</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="movil"
                v-model="cliente.movil"
                required=""
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button
            type="submit"
            @click="editarCliente()"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClienteService from "@/services/ClienteService.js";

import "../assets/js/app.js";

export default {
  props: {
    cliente: {
      type: Object,
      default() {
        return {
          nombre: "",
          apellido: "",
          movil: "",
        };
      },
    },
  },

  methods: {
    editarCliente() {
      // Actualizar
      ClienteService.updateCliente(this.cliente.id, this.cliente)
      .then((respuesta) => {
        this.$emit("cliente-editado");
        console.log(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },
  }
};
</script>

<style scoped>
@import "../assets/css/portal.css";

label {
  font-size: 1rem !important;
}

.btn-primary{
  background-color: #053189;
  color: #ffffff;
}

.btn-primary:hover {
  background: #f98d0d;
  color: #053189;
}

.form-control {
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
}
</style>