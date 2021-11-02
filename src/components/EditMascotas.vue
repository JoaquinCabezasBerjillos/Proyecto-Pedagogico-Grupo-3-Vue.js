<template>
  <div class="row g-4 mb-4">
    <div class="col-6">
      <h4>Editar mascota</h4>
      <form class="settings-form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="mascotas.nombre"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="chip" class="form-label">Chip</label>
          <input
            type="text"
            class="form-control"
            id="chip"
            v-model="mascotas.chip"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="tipo" class="form-label">Tipo</label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            id="tipo"
            v-model="mascotas.tipo"
            required=""
          />
        </div>
        <button @click="editarMascota" class="btn btn-primary">
          Guardar cambios
        </button>
      </form>
    </div>
    </div>
</template>

<script>
import MascotaService from "@/services/MascotaService.js";

import "../assets/js/app.js";

export default {
  props: {
    mascotas: {
      type: Object,
      default() {
        return {
          nombre: "",
          chip: "",
          tipo: "",
        };
      },
    },
  },
  created() {
    console.log(this.mascota)
    this.showImage = false;
  },

  data: () => ({
    photo: null,
    id: null,
    showImage: false,
  }),

  methods: {
      selectFile(event) {
      this.photo = event.target.value;
      this.id = event.target.value;
      console.log(this.photo);
      MascotaService.selectFile(this.photo)
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    onSubmit() {
      if (this.mascota.id) {
        // Actualizar
       MascotaService.updateMascota(this.mascota.id, this.mascota)

          .then((respuesta) => {
            console.log(respuesta.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        MascotaService.createMascota(this.mascota)
          .then((respuesta) => {
            this.$emit("mascota-actualizada");

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