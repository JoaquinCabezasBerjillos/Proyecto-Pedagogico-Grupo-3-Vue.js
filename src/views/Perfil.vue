<template>
  <form class="settings-form" @submit.prevent="onSubmit">
    <div class="row g-4">
      <div class="mb-3">
        <label for="start" class="form-label">Dia de la Consulta:</label>

        <input   
          id="start"
          name="trip-start"
          class="form-control"
        />
      </div>
    </div>

    <div class="col-12 col-lg-4">
      <div class="row g-4">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre Cliente</label>

          <input
            class="form-control"
            id="nombre"
          />
        </div>

        <div class="mb-3">
          <label for="apellido" class="form-label">Apellidos</label>

          <input
            class="form-control"
            id="apellido"
          />
        </div>

        <div class="mb-3">
          <label for="movil" class="form-label">Móvil</label>

          <input
            class="form-control"
            id="movil"
          />
        </div>
      </div>

      <div class="row g-4">
        <div class="mb-3">
          <label for="mascota" class="form-label">Nombre Mascota:</label>

          <input
            class="form-control"
            list="mascota"
            id="mascota"
          />
        </div>

        <div class="mb-3">
          <label for="chip" class="form-label">Chip:</label>

          <input
            class="form-control"
            id="tipo"
          />
        </div>

        <div class="mb-3">
          <label for="tipo" class="form-label">Tipo Mascota</label>
          <input
            class="form-control"
            id="tipo"
          />
        </div>
      </div>

      <div class="row g-4">
        <div class="mb-3">
          <label for="categoria" class="form-label">Categoría</label>

          <input
            class="form-control"
            id="categoria"
          />
        </div>

        <div class="mb-3">
          <label for="receta" class="form-label">Receta</label>

          <input
            class="form-control"
            id="nombre"
          />
        </div>

        <div class="mb-3">
          <label for="producto" class="form-label">Dosis</label>

          <input
            class="form-control"
            id="nombre"
          />
        </div>
      </div>

      <div class="mb-3">
        <div
        id="Previewimg"
       
      ></div> 
      </div>

      <div class="closed-button">
        <button type="submit" class="btn app-btn-primary">Pedido</button>
      </div>
    </div>
  </form>
</template>

<script>
import PerfilService from "@/services/PerfilService.js";

import "../assets/js/app.js";

export default {
  props: {
    consulta: {
      type: Object,
      default() {
        return {
          dia: "",
          nombre: "",
          apellidos: "",
          movil: "",
          mascota: "",
          tipo: "",
          chip: "",
          diagnostico: "",
          producto: "",
          dosis: "",
          foto: null,
        };
      },
    },
  },

  methods: {

    onSubmit() {
      
    },
  },
};
</script> 

<style scoped>
@import "../assets/css/portal.css";

label {
  font-size: 1rem !important;
}

.row {
  flex-wrap: nowrap !important;
}

.controledit {
  width: 5vw;
}

.app-btn-primary {
  background: #053189;
  color: #fff;
  border-color: #053189;
}

.form-control {
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
}

.form-select {
    width: 80%;
}

#Previewimg {
  background-color: #ffffff;
  width: 20vw;
  height: 23.041667vh;
  border-radius: 3.1vh;
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
  margin-top: 3vh;
 
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
}

.form-control {
  width: 80%;
}

.app-btn-primary {
  background: #053189;
  color: #fff;
  border-color: #053189;
  width: 25%;
  justify-content: flex-end !important;
}
</style>