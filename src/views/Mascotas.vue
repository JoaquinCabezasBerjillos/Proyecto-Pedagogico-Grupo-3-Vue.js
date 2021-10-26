<template>
  <div class="row g-4 mb-4">
    <SearchBoton :showForm="showForm" :item="mascota" />
    <div
      v-for="mascota in mascotas"
      :key="mascota.id"
      class="col-6 col-md-4 col-xl-3 col-xxl-3"
    >
      <MascotaCard
        @mascota-borrada="actualizarListado"
        :mascota="mascota"
      ></MascotaCard>
    </div>
  </div>
</template>

<script>
import SearchBoton from "@/components/SearchBoton.vue";
import MascotaCard from "@/components/MascotaCard.vue";
import MascotaService from "@/services/MascotaService.js";

export default {
    components: {
        MascotaCard,
        SearchBoton,
    },
    data () {
      return {
        mascotas: [
          
        ],
        showForm: "mascotas",
      }
    },
    created() {
          MascotaService
          .getMascotas()
          .then((respuesta) => {
            this.mascotas = respuesta.data
          })
          .catch((error) => {
            console.log(error)
        })
    },
    methods: {
      actualizarListado() {
        this.mascotas = null
          MascotaService
        .getMascotas()
        .then((respuesta) => {
          this.mascotas = respuesta.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
