<template>
  <div class="row g-4 mb-4">
    <div v-bind:class="{ 'col-12': !showImage, 'col-6': showImage }">
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
          <label for="tipo" class="form-label">Tipo Mascota</label>
          <select
            type="text"
            class="form-select"
            list="mascotas"
            placeholder="Seleccione tipo de producto"
            id="tipo"
            v-model="mascota.tipo"
            required=""
          >
            <option selected value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otros">Otros</option>
            
          </select>
        </div>
        <div class="mb-3">
            <label for="cliente" class="form-label">Cliente</label>
              <select v-model="mascota.user_id" id="clientes" class="form-select">
                <option v-for="cliente in clientes" :value="cliente.id" :key="cliente">{{ cliente.nombre }}</option>  
              </select>
          </div>
      </form>
    </div>

    <div v-if="showImage" class="col-6">
      <h4>Imagen del mascota</h4>
      <img id="Previewimg" />

      <span>
        <input
          type="file"
          multiple
          :name="uploadFieldName"
          @change="filesChange($event.target.name, $event.target.files)"
          accept="image/*"
        />
      </span>
    </div>
  </div>
  <div class="row">
    <button @click="crearMascota" type="button" class="btn btn-primary">
      Guardar
    </button>
  </div>
</template>

<script>
import MascotaService from "@/services/MascotaService.js";
import ClienteService from "@/services/ClienteService.js";

import "../assets/js/app.js";

export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          nombre: "",
          chip: "",
          foto: "",
          tipo: "",
          user_id: "",
        };
      },
    },
  },

  created(){
    ClienteService.getClientes()
    .then((respuesta) => {
      this.clientes = respuesta.data
    })
    .catch((error) => {
      console.log(error)
    })
  },

  data() {
      return {
        mascota: this.item,
        clientes: {},
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
