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
          class="svg-inline--fa fa-search fa-w-16"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path></svg
        ><!-- <i class="fas fa-search"></i> Font Awesome fontawesome.com -->
      </button>
    </form>
  </div>
  <div class="app-search-box col-6">
    <div class="createButton">
      <button class="btn app-btn-primary">
        <a href="src/components/ProductosForm"></a>
       
        Crear Producto
      </button>
    </div>
  </div>
</template>

<script>
import "../assets/js/app.js";
export default {

  

 
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
.createButton {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
