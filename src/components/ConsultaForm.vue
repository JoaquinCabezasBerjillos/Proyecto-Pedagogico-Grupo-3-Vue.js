<template>
  <div class="row g-4 mb-4">
    <div class="col-6">
      <h4> Consulta Vista </h4>
      <br>
      <form class="settings-form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="nombre" class="form-label" >Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="consulta.nombre"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="consulta.apellido"
            required=""
          />
       
        </div>

        <div class="mb-3">

            <label for="nombre" class="form-label ">Nombre del Mascotas:</label>
        <input 
            list="Nombre del Mascotas"  
            class="form-control controledit"
            id="nombre"
            v-model="consulta.tipo"
            required="" />
          
        <datalist id="Nombre del Mascotas">
        <option> Niro </option>
        <option> Jacky </option>
        <option> Saly </option>
        <option> Roro </option>
        <option> Wolf </option>
        </datalist>

        </div>
        

         <div class="mb-3">
         <label for="start" class="form-label" >Dia de la Consulta:</label>

        <input 
      type="date" id="start" 
       name="trip-start"
       value="2021-11-01" 
       min="2021-10-01" max="2028-12-31"
       class="form-control" 
       >
       
         </div>



        <div class="mb-3">
          <label for="nombre" class="form-label">Historial medico</label>
          <textarea
            class="form-control"
            v-model="consulta.diagnostico"
            placeholder="Escriba el historial medico si existe"
            required=""
          > </textarea>
        </div>

        <div class="closed-button">
          <button type="submit" class="btn app-btn-primary">Enviar</button>
        </div>
      </form>
    </div>

    
  </div>
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
          nombre:"",
          fecha: null,
          diagnostico: null,
          tipo: null,

      }
      }

    }
    },
   
 methods:{



  


 }
};
  
</script>

<style scoped>
@import "../assets/css/portal.css";

label {
  font-size: 1rem !important;
}


.controledit{
  width: 6.5vw;
  height: 2.5vw;;
  margin-left: 190px;
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
