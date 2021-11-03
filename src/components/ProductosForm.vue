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
            v-model="producto.nombre"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="precio" class="form-label">Precio</label>
          <input
            type="number"
            class="form-control"
            id="precio"
            v-model="producto.precio"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="categoria" class="form-label">Categoría</label>
          <select
            type="text"
            class="form-select"
            list="productos"
            placeholder="Seleccione tipo de producto"
            id="categoria"
            v-model="producto.categoria"
            required=""
          >
            <option selected value="option-1">Todos</option>
            <option value="option-2">Medicamento</option>
            <option value="option-3">Alimentación</option>
            <option value="option-4">Vacunas</option>
            <option value="option-5">Otros</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <textarea
            class="form-control"
            id="descripcion"
            v-model="producto.descripcion"
            placeholder="Breve descripción del Producto"
            required=""
          ></textarea>
        </div>
      </form>
    </div>
    <div v-show="showImage" class="col-6">
      <div
        id="Previewimg"
        :style="{ 'background-image': `url(${producto.foto})` }"
      ></div>

      <span>
        <label for="fileinput"><span>Añadir imagen</span></label>
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
    <button @click="crearProducto" type="button" class="btn btn-primary">
      Guardar
    </button>
  </div>
</template>

<script>
import ProductoService from "@/services/ProductoService.js";
import { uploadFile } from "@/services/file-upload.js";

import "../assets/js/app.js";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          nombre: "",
          precio: "",
          categoria: "",
          descripcion: "",
          foto: null,
        };
      },
    },
  },

  data() {
    return {
      producto: this.item,
      showImage: false,
      uploadFieldName: "photos",
      previewImage: null,
    };
  },

  methods: {
    crearProducto() {
      console.log(1);
      ProductoService.createProducto(this.item)
        .then((respuesta) => {
          this.showImage = true;
          this.$emit("producto-creado");
          this.producto = respuesta.data.producto;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    save(formData) {
      // upload data to the server
      console.log(formData);
      uploadFile(formData)
        .then((x) => {
          console.log(x);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map((x) => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      let reader = new FileReader();
      reader.onload = (e) => {
        this.producto.foto = e.target.result;
        console.log(this.previewImage);
      };
      reader.readAsDataURL(fileList[0]);
      // save it
      this.save(formData);
    },
    selectFile(fieldName, fileList) {
      console.log(fieldName, fileList);
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map((x) => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      // save it
      ProductoService.uploadFile(formData)
        .then((respuesta) => {
          console.log(respuesta.data);
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

.btn-primary {
  background: #053189;
  color: #fff;
  border-color: #053189;
  width: 15%;
  justify-content: flex-end !important;
}
.form-control {
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
}
#Previewimg {
  width: 20vw;
  height: 41vh;
  border-radius: 3.1vh;
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
  margin-top: 4vh;
  margin-left: 3vw;
  margin-bottom: 2vh;
  background-image: cover;
}
input[type="file"]#fileinput {
  position: absolute;
  z-index: -1;
  overflow: hidden;
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
}
label[for="fileinput"] {
  font-size: 1.1vw;
  font-weight: 600;
  color: #ffffff;
  background-color: #053189;
  display: inline-block;
  cursor: pointer;
  padding: 2vh 2vw !important;
  width: fit-content;
}
.modal-dialog {
  max-width: 850px;
  margin: 2rem auto;
}
</style>
