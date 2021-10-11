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
          images: [],
        };
      },
    },
  },
  data() {
    return {};
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
    },
  },
};
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
</style>
