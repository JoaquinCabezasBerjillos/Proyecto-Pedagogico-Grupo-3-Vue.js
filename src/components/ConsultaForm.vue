<template>
  <form class="settings-form" @submit.prevent="onSubmit">
    <div class="row g-4">
      <div class="mb-3">
      <label for="start" class="form-label">Dia de la Consulta:</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        value="2021-11-01"
        min="2021-10-01"
        max="2028-12-31"
        class="form-control"
      />
    </div>
    </div>
   
      <div class="col-12 col-lg-4">
         <div class="row g-4">
        <div class="mb-3 ">
          <label for="nombre" class="form-label">Nombre Cliente</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="consulta.nombre"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="apellido" class="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="apellido"
            v-model="consulta.Apellido"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="movil" class="form-label">Móvil</label>
          <input
            type="number"
            class="form-control"
            id="movil"
            v-model="consulta.movil"
            required=""
          />
        </div>
      </div>
    
<div class="row g-4">
    <div class="mb-3">
      
      <label for="mascota" class="form-label ">Nombre Mascota:</label>
      <input
        type="text"
        class="form-control"
        list="mascota"
        id="mascota"
        v-model="consulta.mascota"
        required=""
      />
   </div>
    <div class="mb-3">
      <label for="chip" class="form-label ">Chip:</label>
      <input
        type="number"
        min="1"
        max="15"
        class="form-control"
        list="chip"
        id="tipo"
        v-model="consulta.chip"
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
            v-model="consulta.tipo"
            required=""
          >
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otros">Otros</option>
            
          </select>
        </div>
</div>
<div class="row g-4">
    <div class="mb-3">
        <label for="categoria" class="form-label">Categoría</label>
          <select
            type="text"
            class="form-select"
            list="productos"
            placeholder="Seleccione tipo de producto"
            id="categoria"
            v-model="consulta.categoria"
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
      <label for="receta" class="form-label">Receta</label>
      <input
        type="text"
        class="form-control"
        id="nombre"
        v-model="consulta.receta"
        required=""
      />
    </div>
    <div class="mb-3">
      <label for="producto" class="form-label">Dosis</label>
      <input
        type="text"
        class="form-control"
        id="nombre"
        v-model="consulta.producto"
        required=""
      />
    </div>

   
</div>
 <div class="mb-3">
      <label for="diagnostico" class="form-label">Diagnostico</label>
      <textarea
        class="form-control-text"
        v-model="consulta.diagnostico"
        placeholder="Escriba aqui los datos de la consulta"
        required=""
      ></textarea>
    </div>
    <div class="closed-button">
      <button type="submit" class="btn app-btn-primary">Enviar</button>
    </div>
    </div>
    
  </form>
</template>

<script>
import ConsultaService from "@/services/ConsultaService.js";
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
          categoria:"",

        };
      },
    },
  },
  data: () => ({
    photo: null,
  }),
  methods: {
    selectFile(event) {
      const data = new FormData();
      data.append("photo", this.photo);

      axios.post("/api/photo", data);
      // `files` is always an array because the file input may be in multiple mode
      this.photo = event.target.files[0];
    },

    onSubmit() {
      // if (this.producto.id) {
      //   // Actualizar
      //   ProductoService.updateProducto(this.producto.id, this.producto)
      //     .then((respuesta) => {
      //       console.log(respuesta.data);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // } else {
      // Crear
      ConsultaService.createConsulta(this.producto)
        .then((respuesta) => {
          this.$emit("consulta-creada");
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
.row{
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
}
  .form-control {
    width:80%

  }
  .form-select {
    width: 80%;
  }
  .form-control-text{

    width: 80%;
    height: 150px;
  }
  
</style>
