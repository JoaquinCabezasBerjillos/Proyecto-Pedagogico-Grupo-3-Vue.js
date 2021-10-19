<template>
  <div class="row g-4 mb-4">
    <div class="col-6">
      <h4>Editar usuario</h4>
      <form class="settings-form" @submit.prevent="onSubmit">
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
            v-model="cliente.apellido"
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
        <div class="closed-button">
          <button type="submit" class="btn app-btn-primary">Guardar</button>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
import ClienteService from "@/services/ClienteService.js";

import "../assets/js/app.js";

export default {
  props: {
    clientes: {
      type: Object,
      default() {
        return {
          nombre: null,
          apellido: null,
          movil: null,
        };
      },
    },
  },


  methods: {
      created() {
      ClienteService
      .getClientes()
      .then(respuesta => {
        this.cliente = respuesta.data
      })
      .catch(error => {
        console.log(error)
      })
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
@import "../assets/css/portal.css";

label {
  font-size: 1rem !important;
}
.app-btn-primary {
  background: #053189;
  color: #fff;
  border-color: #053189;
}
.form-control {
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
}
#Previewimg {
  background-color: #ffffff;
  width: 25vw;
  height: 40.041667vh;
  border-radius: 3.1vh;
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
  margin-top: 6vh;
  margin-left: 3vw;
  margin-bottom: 2vh;
}
#file-input {
  overflow: hidden;
  background-color: #053189;
  color: #ffffff;
  border-radius: 1vh;
  cursor: pointer;
  border-color: #053189;
  font-size: 1.1vw;
  padding: 2vh 2vw;
  margin-left: 2vw;
}
</style>