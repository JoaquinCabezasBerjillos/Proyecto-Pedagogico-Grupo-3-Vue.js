<template>
  <div class="row g-4 mb-4">
    <div class="col-6">
      <h4> Consulta Vista </h4>
      <form class="settings-form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="nombre" class="form-label" >Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="producto.nombre"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="producto.Apellido"
            required=""
          />
       
        </div>

        <div class="mb-3">

            <label for="nombre" class="form-label ">Nombre del Mascotas:</label>
        <input 
            list="Nombre del Mascotas"  
            min="1" max="100"
            class="form-control controledit"
            id="nombre"
            v-model="producto.categoria"
            required="" />
          
                  <datalist id="Nombre del Mascotas">
                  <option value="Niro">
                  <option value="Jacky">
                  <option value="Saly">
                  <option value="Roro">
                  <option value="Wolf">
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
            v-model="producto.description"
            placeholder="Escriba el historial medico si existe"
            required=""
          ></textarea>
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
          nombre: null,
          precio: null,
          categoria: null,
          descripcion: null,

      }
      }

    }
    },
   data: () => ({
        photo: null,
        
    }),
 methods:{



  



 }
};
  
</script>

<style scoped>
@import "../assets/css/portal.css";

label {
  font-size: 1rem !important;
}


 /* .row{
   background-image: url("https://pandaveterinaria.com/wp-content/uploads/2019/05/Enfermedades-en-perros-y-gatos.jpg");
  
 } */
.controledit{
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
  margin-left: 2vw;
}

</style>
