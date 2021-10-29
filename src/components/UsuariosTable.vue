<template>
  <div class="app-card app-card-orders-table shadow-sm mb-">
    <div class="app-card-body">
      <div class="table-responsive">
        <table class="table app-table-hover mb-0 text-left">
          <thead>
            <tr>
              <th class="cell">Nombre Usuario</th>
              <th class="cell">Apellido</th>
              <th class="cell">Móvil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="cell">Nombre mascota</td>
              <td class="cell">
                <span class="truncate"
                  >Idetificador Mascota</span
                >
              </td>
              <td class="cell">Historial clínico mascota</td>
            </tr>
            <tr>
              <td class="cell">Nombre mascota 2</td>
              <td class="cell">
                <span class="truncate">Idetificador Mascota 2</span>
              </td>
              <td class="cell">Historial clínico mascota 2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//table-responsive-->
    </div>
    <!--//app-card-body-->
  </div>
</template>

<script>
import "../assets/js/app.js";
export default {
  

};
</script>

<style>
.cell{
  font-size:20px;
}
</style>