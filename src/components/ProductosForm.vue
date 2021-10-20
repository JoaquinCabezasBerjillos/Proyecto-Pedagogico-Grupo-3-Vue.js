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
            v-model="producto.nombre"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="precio" class="form-label">Precio</label>
          <input
            type="text"
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
            id="nombre"
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
        <div class="closed-button">
          <button type="submit" class="btn app-btn-primary">Guardar</button>
        </div>
      </form>
    </div>

    <div v-if="showImage" class="col-6">
      
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
</template>

<script>
import ProductoService from "@/services/ProductoService.js";

import "../assets/js/app.js";
export default {
  props: {
    producto: {
      type: Object,
      default() {
        return {
            nombre: null,
            precio: null,
            categoria: null,            
            descripcion: null,
            // foto: null,
        };
      },
    },
  },

  data () {
    return{
     
      showImage: false,
    }
   },


  methods: {
      created() {
      ProductoService
      .getProductos()
      .then(respuesta => {
        this.producto = respuesta.data
        this.showImage = false;
      })
      .catch(error => {
        console.log(error)
      })
    },
    selectFile(event) {
      this.foto = event.target.value;
      // this.id = event.target.value;
      console.log(this.foto);
      ProductoService.selectFile(this.foto)
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    onSubmit() {
      if (this.producto.id) {
        // Actualizar
        ProductoService.updateProducto(this.producto.id, this.producto)

          .then((respuesta) => {
            console.log(respuesta.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        ProductoService.createProducto(this.producto)
          .then((respuesta) => {
            this.showImage = true;
            this.$emit("producto-creado");

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
  width: 20vw;
  height: 40.041667vh;
  border-radius: 3.1vh;
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
  margin-top: 2vh;
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
  margin-left: 1vw;
 width:25vw;
  
 
}
.modal-dialog {
    max-width: 850px;
    margin: 2rem auto;
}
</style>
