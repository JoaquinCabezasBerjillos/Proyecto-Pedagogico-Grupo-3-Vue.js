<template>
  <div class="app">
    <header class="app-header fixed-top">
      <div class="app-header-inner">
        <div class="container-fluid py-2">
          <div class="app-header-content">
            <div class="row justify-content-between align-items-center">
              <div class="col-auto">
                <a
                  id="sidepanel-toggler"
                  class="sidepanel-toggler d-inline-block d-xl-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    role="img"
                  >
                    <title>Menu</title>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M4 7h22M4 15h22M4 23h22"
                    ></path>
                  </svg>
                </a>
              </div>
              <!--//col-->
              <div class="search-mobile-trigger d-sm-none col">
                <i class="search-mobile-trigger-icon fas fa-search"></i>
              </div>
              <!--//col-->

              <div class="app-utilities col-auto">
                <div
                  class="app-utility-item app-notifications-dropdown dropdown"
                >
                  <a
                    class="dropdown-toggle no-toggle-arrow"
                    id="notifications-dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href=""
                    role="button"
                    aria-expanded="false"
                    title="Notifications"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-basket"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                 
                  </a>
                  <div
                    class="dropdown-menu p-0"
                    aria-labelledby="notifications-dropdown-toggle"
                  >
                    <div class="dropdown-menu-header p-3">
                      <h5 class="dropdown-menu-title mb-0">Carrito</h5>
                    </div>

                    <div class="dropdown-menu-content">
                      <div class="item p-3">
                        <div
                          class="
                            row
                            gx-2
                            justify-content-between
                            align-items-center
                          "
                        >
                          <div class="col-auto">
                            <img
                              class="profile-image"
                              src="../assets/images/profiles/coatex.jpg"
                              alt=""
                            />
                          </div>

                          <div class="col">
                            <div class="info">
                              <div class="desc">Coatex, 60 cápsulas</div>
                              <div class="meta">20,99€</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="dropdown-menu-footer p-2 text-center">
                      <a href="notifications.html">Ver todo</a>
                    </div>
                  </div>
                  <!--//dropdown-menu-->
                </div>
                <!--//app-utility-item-->

                <!--//app-utility-item-->

                <div class="app-utility-item app-user-dropdown dropdown">
                  <a
                    id="user-dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href=""
                    role="button"
                    aria-expanded="false"
                    ><img
                      src="../assets/images/logosinfondo.png"
                      alt="user profile"
                    />{{ this.$store.state.user.nombre }}</a
                  >
                </div>
                <!--//app-user-dropdown-->
              </div>
              <!--//app-utilities-->
            </div>
            <!--//row-->
          </div>
          <!--//app-header-content-->
        </div>
        <!--//container-fluid-->
      </div>
      <!--//app-header-inner-->
      <div id="app-sidepanel" class="app-sidepanel">
        <div id="sidepanel-drop" class="sidepanel-drop"></div>
        <div class="sidepanel-inner d-flex flex-column">
          <a href="" id="sidepanel-close" class="sidepanel-close d-xl-none"
            >&times;</a
          >
          <div class="app-branding">
            <a class="app-logo" href="index.html"
              ><img
                class="logo-icon me-2"
                src="../assets/images/logosinfondo.png"
                alt="logo"
              /><span class="logo-text">Clínica Victoria</span></a
            >
          </div>
          <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
            <ul class="app-menu list-unstyled accordion" id="menu-accordion">
              <li v-show="this.$store.state.user.is_admin" class="nav-item">
                <router-link
                  class="nav-link"
                  to="/consulta"
                  exact-active-class="active"
                >
                  <span class="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Consulta</span>
                </router-link>
              </li>
              <!--//nav-item-->
              <li v-show="this.$store.state.user.is_admin" class="nav-item">
                <router-link
                  to="/clientes"
                  exact-active-class="active"
                  class="nav-link"
                >
                  <span class="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Clientes</span> </router-link
                ><!--//nav-link-->
              </li>
              <!--//nav-item-->
              <li v-show="this.$store.state.user.is_admin" class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                <router-link
                  to="/mascotas"
                  exact-active-class="active"
                  class="nav-link"
                >
                  <span class="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ionicon"
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                    >
                      <title>Mascotas</title>
                      <path
                        d="M457.74 170.1a30.26 30.26 0 00-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76-14.23 34.18-7.68 69.15 14.74 78.14a30.21 30.21 0 0011.15 2.1c20.27 0 43.2-19 55.17-47.76 14.13-34.18 7.48-69.15-14.84-78.14zM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.91 50.91 0 00-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2 31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 00-3.7-19.25c-12-33.55-60-36.71-83.8-76.07zM192.51 196a26.53 26.53 0 004-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.53 26.53 0 00-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196zM366.92 136.15c5.26-36.32-9.23-68.48-32.44-71.85a26.53 26.53 0 00-4-.3c-21.73 0-42.47 25.61-47.43 59.85-5.26 36.32 9.23 68.48 32.44 71.85a26.53 26.53 0 004 .3c21.73 0 42.51-25.71 47.43-59.85zM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.21 30.21 0 00-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.21 30.21 0 0011.15-2.1z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Mascotas</span> </router-link
                ><!--//nav-link-->
              </li>
              <!--//nav-item-->
              <li v-show="this.$store.state.user.is_admin" class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                <router-link
                  :to="{ name: 'Productos' }"
                  exact-active-class="active"
                  class="nav-link"
                >
                  <span class="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-list-ul"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Productos</span>
                </router-link>
                <!--//nav-link-->
              </li>
              <!--//nav-item-->

              <li v-show="this.$store.state.user.is_admin" class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                <router-link
                  to="/pedidos"
                  exact-active-class="active"
                  class="nav-link"
                >
                  <span class="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-shop-window"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Pedidos</span> </router-link
                ><!--//nav-link-->
              </li>
              <!--//nav-item-->
              <li v-show="!this.$store.state.user.is_admin" class="nav-item">
               
                <router-link
                  to="/perfil"
                  exact-active-class="active"
                  class="nav-link"
                >
                  <span class="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-shop-window"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text"
                    >Perfil de Usuario</span
                  > </router-link
                ><!--//nav-link-->
              </li>
              <!--//nav-item-->
              <li v-show="!this.$store.state.user.is_admin" class="nav-item">
               <!--//nav-link-->
              </li>
              <!--//nav-item-->
              <li class="nav-item">
                
                <div class="nav-link">
                  <span class="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-door-closed"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"
                      />
                      <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                    </svg>
                  </span>
                  <span @click="logout" class="nav-link-text">Salir</span>
                </div>
                <!--//nav-link-->
              </li>
              <!--//nav-item-->
            </ul>
            <!--//app-menu-->
          </nav>
          <!--//app-nav-->
          <div class="app-sidepanel-footer">
            <nav class="app-nav app-nav-footer"></nav>
          </div>
          <!--//app-sidepanel-footer-->
        </div>
        <!--//sidepanel-inner-->
      </div>
      <!--//app-sidepanel-->
    </header>
    <!--//app-header-->

    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <!-- Contenido -->
          <router-view />
        </div>
        <!--//container-fluid-->
      </div>
      <!--//app-content-->
    </div>
    <!--//app-wrapper-->
  </div>
</template>

<script>
import "../assets/js/app.js";

export default {
  created() {
    this.$store.dispatch("getAuthUser");
  },

  methods: {
    logout() {
      this.$store.dispatch('logout')
      .then(() => {
          this.$router.push({ name: "Home" });
        })
    }
  },
};
</script>

<style scoped>
@import "../assets/css/portal.css";

footer {
  background: white;
}
.app-sidepanel .sidepanel-inner {
  background-color: #053189;
}
.app-sidepanel {
  font-size: 1.2rem !important;
}

.container-fluid {
  background-color: #053189;
}
.logo-text {
  color: white;
}

.nav-link {
  background-color: #053189;
  color: white !important;
  cursor: pointer !important;
}
.nav-link.active {
  background-color: white !important;
  color: #053189 !important;
}

.app-auth-footer .copyright {
  font-size: 0.5rem;
}
label {
  font-size: 16px;
}
.app-utility-item > a {
  color: white;
}
</style>
