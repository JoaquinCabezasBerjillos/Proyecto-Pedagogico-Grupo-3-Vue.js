<template>
  <div class="row g-4 mb-4">
    <div class="col-6">
      <form class="settings-form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="mascota.nombre"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Chip</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="mascota.chip"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Tipo</label>
          <input
            type="text"
            class="form-control"
            list="mascotas" 
            id="nombre"
            v-model="mascota.tipo"
            required=""
          />
        </div>
      </form>
    </div>

    <div v-if="showImage" class="col-6">
      <h4>Imagen del mascota</h4>
      <img id="Previewimg" />

      <span>
        <input
          type="file"
          accept="image/*"
          @change="selectFile($event)"
          id="file-input"
        />
      </span>
    </div>
  </div>
  <div>
    <button @click="crearMascota" type="button" class="btn btn-primary">
      Guardar
    </button>
  </div>
</template>

<script>
import MascotaService from "@/services/MascotaService.js";

import "../assets/js/app.js";

export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          nombre: "",
          chip: "",
          foto: null,
          tipo: "",
        };
      },
    },
  },

  data() {
      return {
        mascota: this.item,
        showImage: false,
      };
    },

  methods: {
    crearMascota() {
      console.log(1);
      MascotaService.createMascota(this.item)
        .then((respuesta) => {
          this.showImage = true;
          this.$emit("mascota-creada");
          this.mascota = respuesta.data.mascota;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectFile(event) {
      this.mascota.foto = event.target.files[0];

      let data = new FormData();
      data.append("image", this.mascota.foto);
      MascotaService.selectFile(this.mascota.id, { foto: data })
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

//   methods: {
//     selectFile(event) {
//       this.photo = event.target.value;
//       this.id = event.target.value;
//       console.log(this.photo);
//       MascotaService.selectFile(this.photo)
//         .then((respuesta) => {
//           console.log(respuesta);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },

//     onSubmit() {
//       if (this.mascota.id) {
//         // Actualizar
//         MascotaService.updateMascota(this.mascota.id, this.mascota)

//           .then((respuesta) => {
//             console.log(respuesta.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } else {
//         MascotaService.createMascota(this.mascota)
//           .then((respuesta) => {
//             this.showImage = true;
//             this.$emit("mascota-creado");

//             console.log(respuesta.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       }
//     },
//   },
// };
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
