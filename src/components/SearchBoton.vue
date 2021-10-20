<template>
  <div class="app-search-box col-6">
    <form class="app-search-form">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        class="form-control search-input"
      />

     <button type="submit" class="btn search-btn btn-primary" value="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          /></svg
        ><!-- <i class="fas fa-search"></i> Font Awesome fontawesome.com -->
      </button>
    </form>
  </div>
  <div class="app-search-box col-6">
    <div class="createButton">
      <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Crear {{ this.$route.name }} 
      </button>
    </div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Alta Producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ProductosForm />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import ProductosForm from "../components/ProductosForm";
import "../assets/js/app.js";
export default {

  components: {

 ProductosForm,  },

 
};
</script>

<style scoped>
@import "../assets/css/portal.css";

label {
  font-size: 1rem !important;
}
.btn-primary {
  background: #053189 !important;
  color: #fff !important;
  border-color: #053189 !important;
 
}

 .app-search-form .search-btn {
  padding: .0rem 1rem !important;
}

</style>
