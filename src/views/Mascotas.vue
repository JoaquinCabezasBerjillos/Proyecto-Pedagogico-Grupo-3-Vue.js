<template>
<div class="row g-4 mb-4">
 <div class="app-card app-card-settings shadow-sm p-3">
  <div class="app-card-body">
      <MascotasForm />
  </div> 
</div> 
  
    <div v-for="mascota in mascotas" :key="mascota.id" class="col-6 col-md-4 col-xl-3 col-xxl-2"> 
      <MascotaCard @mascota-borrada="actualizarListado" :mascota="mascota"></MascotaCard>
    </div>
  </div>
</template>

<script>
import MascotasForm from "@/components/MascotasForm.vue";
import MascotaCard from "@/components/MascotaCard.vue"
import MascotaService from "@/services/MascotaService.js"

export default {
    components: {
        MascotaCard,
        MascotasForm,
    },
    data () {
      return {
        mascotas: [
          {
            nombre: 'Alguien',
            chip: '123456',
            foto: 'C:\Users\ADM\AppData\Local\Temp\c54039199799e640fa6974ddad807900.png',
            tipo: 'algo',
            cliente_id: '1',
          }
        ]
      }
    },
    created() {
          MascotaService
          .getMascotas()
          .then(respuesta => {
            this.mascotas = respuesta.data
          })
          .catch(error => {
            console.log(error)
        })
    },
    methods: {
      actutualizarListado() {
        this.mascotas = null
          MascotaService
        .getMascotas()
        .then(respuesta => {
          this.mascotas = respuesta.data
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
};


</script>

<style>

</style>