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
          <input
            type="text"
            class="form-control"
            list="productos"
            placeholder="Seleccione tipo de producto"
            id="categoria"
            v-model="producto.categoria"
            required=""
          />
          <datalist id="productos">
            <option>Medicamento</option>
            <option>Alimentación</option>
            <option>Vacunas</option>
            <option>Otros</option>
          </datalist>
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

      /* this.producto.foto = event.target.files[0];
      

      let data = new FormData();
      data.append("image", this.producto.foto);
      ProductoService.selectFile(this.producto.id, { foto: data })
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((error) => {
          console.log(error);
        }); */
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
  background-image: cover ;
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
  margin-left: 1vw;
  width: 25vw;
}
.modal-dialog {
  max-width: 850px;
  margin: 2rem auto;
}
</style>
