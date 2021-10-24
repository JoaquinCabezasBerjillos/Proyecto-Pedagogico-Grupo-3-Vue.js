<template>
  <div class="app-card app-card-doc shadow-sm h-100">
    <div class="app-card-thumb-holder p-3">
      <div class="app-card-thumb">
        <img class="thumb-image" src="{{ mascota.foto }}" alt="">
      </div>
      <a class="app-card-link-mask" href="#file-link"></a>
    </div>
    <div class="app-card-body p-3 has-card-actions">
      <h4 class="app-doc-title truncate mb-0">
        <a href="#file-link">{{ mascota.nombre }}</a>
      </h4>
      <div class="app-doc-meta">
        <ul class="list-unstyled mb-0">
          <li><span class="text-muted">Tipo:</span> {{ mascota.tipo }}</li>
          <li><span class="text-muted">Chip:</span> {{ mascota.chip }}</li> 
        </ul>
      </div>
      <!--//app-doc-meta-->

      <div class="app-card-actions">
        <div class="dropdown">
          <div
            class="dropdown-toggle no-toggle-arrow"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-three-dots-vertical"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
              ></path>
            </svg>
          </div>
          <!--//dropdown-toggle-->
          <ul class="dropdown-menu">
            <li>
              <button
                class="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                ><svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pencil me-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  ></path></svg
                >Editar</button
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button class="dropdown-item" @click="borrarMascota()"
                ><svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-trash me-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  ></path></svg
                >Borrar</button
              >
            </li>
          </ul>
        </div>
        <!--//dropdown-->
      </div>
      <!--//app-card-actions-->
    </div>
    <!--//app-card-body-->
  </div>
  <!--//app-card-->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar Mascota</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"></div>
          <MascotasForm :mascota="mascota"></MascotasForm>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button type="button" class="btn btn-primary">Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MascotaService from '@/services/MascotaService.js';
import EditMascotas from "@/components/EditMascotas.vue";
import MascotasForm from "@/components/MascotasForm.vue";

export default {
  components: {
    EditMascotas,
    MascotasForm,
  },
	props: {
      mascota: {
        type: Object,
        required: true
      }
    },
    methods: {
      borrarMascota() {
        MascotaService.deleteMascota(this.mascota.id)
        .then((respuesta) => {
          this.$emit('mascota-borrada')
            console.log(respuesta)
        }).catch((error) => {
            console.log(error);
        });
      },
    },
};
</script>

<style>
</style>