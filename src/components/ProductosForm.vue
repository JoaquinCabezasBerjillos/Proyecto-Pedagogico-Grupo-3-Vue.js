<template>
  <div class="app-card app-card-settings shadow-sm p-3">
    <div class="app-card-body">
      <h1 class="app-page-title">Medicamentos y Alimentación</h1>

      <form class="settings-form">
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
          <label for="nombre" class="form-label">Precio</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="producto.precio"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Categoría</label>
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
          <label for="nombre" class="form-label">Descripción</label>
          <input
            type="textarea"
            class="form-control"
            id="nombre"
            v-model="producto.descripción"
            required=""
          />
        </div>
      </form>
      <!-- <div>
        <img id="Previewimg" />

        <span>
          <input
            type="file"
            name="imgadd"
            id="fileinput"
            accept=".pdf,.jpg,.png"
            onchange="previewImage()"
            v-on="producto.foto"
            required
          />
        </span>
        <label for="fileinput"><span>Añadir imagen</span></label>
        <button @click="cargarImagenes" class="btn app-btn-primary">
          Cargar Imágen
        </button>
        <div class ="FotosProductos" v-if="imagedesc" !=false>
          <div v-for="img in images" v-bind:key="img">
            <img width="200" height="200" :src="img" alt="foto descriptiva del producto">
          </div>
      </div> -->

      <div class="closed-button" @submit.prevent="onSubmit">
        <button type="submit" class="btn app-btn-primary">Guardar</button>
      </div>
      <div class="app-card app-card-basic d-flex flex-column ">
        <h4 class="app-card-title">Coatex</h4>
        <div class="app.card-body">
          <div class="fotos">
            <!-- probar poniendo esta clase a imagen para el marco img-thumbnail -->
          </div>

          <div class="app-card-footer p-4 mt-auto">
            <a class="btn app-btn-secondary" href="#"
              >20,99€<br />Cápsulas para el pelo de mascotas</a
            >
          </div>
        </div>
      </div>
    </div>
    </div>
 
</template>

<script>
import ProductoService from "@/services/ProductoService.js";

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
          images:[],
        };
      },
    },
  },
  data() {
    return {
     

    };
  },
  methods: {
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
        // Crear
        ProductoService.createProducto(this.producto)
          .then((respuesta) => {
            this.$emit("producto-creado");
            console.log(respuesta.data);
          })
          .catch((error) => {
            console.log(error);
          });
      

      }
    }
  }
};

    //   ProductosService.previewImage() {    

    //     ref.child('/images')
    //     .listAll()
    //     .then((res) => {
    //       // console.log(respuesta)
    //       // primero mapear la respuesta de las imágenes. En el item puedo ver el location path que es lo que necesito para poder cargar la imagen
    //       res.items.map( (item) =>
    //             ref.child.items.location.path_)
    //               .getDownloadURL ()
    //               .then( (url) =>
    //               this.imagedesc = true
    //               this.images.push(url))
    //                 console.log(this.images)
      
    //     }
    // }



        
 


</script>

<style scoped>

label {
  font-size: 1rem !important;
}
.app-btn-primary {
  background: #053189;
  color: #fff;
  border-color: #053189;
}

.closed-button {
  display: flex;
  justify-content: center;
}
.app-content {
  height: 600px !important;
}
.app-card-basic {
  align-items: center !important;
}

.fotos {
  display: flex;
  margin-top: 30px;
  background: url("../assets/images/coatex.jpg") no-repeat !important;
  width: 290px;
  height: 200px;
  border-color: #053189;
  align-content: center;
}
h4 {
  font-size: 2rem !important;
}
.app-btn-secondary:hover {
  color: #053189;
  border: 1px solid #053189;
  background: #fff;
}

.app-content {
  padding: 0px !important;
  margin: 0px !important;
}
#Previewimg {
  background-color: #ffffff;
  width: 49vw;
  height: 40.041667vh;
  border-radius: 3.1vh;
  border: 0.1vh solid rgba(81, 98, 111, 0.5);
}

input[type="file"]#fileinput {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

/* label[for="fileinput"] {
  font-size: 1.1vw;
  font-weight: 600;
  font-family: Montserrat;
  color: #ffffff;
  background-color: #dc001b;
  display: inline-block;
  cursor: pointer;
  padding: 2vh 2vw !important;
  width: fit-content;
  text-align: center;
  border-radius: 4.1vh;
  margin-left: 29vw;
} */
</style>
