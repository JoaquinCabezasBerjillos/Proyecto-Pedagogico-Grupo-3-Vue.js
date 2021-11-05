<template>
  <div class="app-search-box col">
    <form class="app-search-form">
      <input v-model="name"
        type="text"
        placeholder="Search..."
        name="search"
        class="form-control search-input"
      />
      <button @click.prevent="filterByName()" type="submit" class="btn search-btn btn-primary" value="Search">
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
</template>

<script>
import "../assets/js/app.js";

export default {
  props: ["clientes"],
  data() {
  

    return { name:[]}
  },
  methods: {
    filterByName() {
      const formatName = this.name.toLowerCase();
      const results = this.clientes.filter((request) => {
        const requestName = this.clientes.nombre.toLowerCase();

        if (requestName.includes(formatName)) {
          return request;
        }
      });

    console.log(results)
    console.log(this.name)
    },
  },
};
</script>

<style scoped>
@import "../assets/css/portal.css";

.app-search-form .search-btn {
  padding: 0rem 1rem !important;
}
</style>