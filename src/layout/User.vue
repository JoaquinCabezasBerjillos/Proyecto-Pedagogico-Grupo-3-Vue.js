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
                    href="#"
                    role="button"
                    aria-expanded="false"
                    title="Notifications"
                  >
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-basket"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                    <span class="icon-badge">3</span> </a
                  ><!--//dropdown-toggle-->

                  <div
                    class="dropdown-menu p-0"
                    aria-labelledby="notifications-dropdown-toggle"
                  >
                    <div class="dropdown-menu-header p-3">
                      <h5 class="dropdown-menu-title mb-0">Carrito</h5>
                    </div>
                    <!--//dropdown-menu-title-->
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
                          <!--//col-->
                          <div class="col">
                            <div class="info">
                              <div class="desc">Coatex, 60 cápsulas</div>
                              <div class="meta">20,99€</div>
                            </div>
                          </div>
                          <!--//col-->
                        </div>
                        <!--//row-->
                        <a class="link-mask" href="notifications.html"></a>
                      </div>
                      <!--//item-->
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
                            <div class="app-icon-holder">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                class="bi bi-receipt"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                                />
                              </svg>
                            </div>
                          </div>
                          <!--//col-->
                          <div class="col">
                            <div class="info">
                              <div class="desc">
                                You have a new invoice. Proin venenatis interdum
                                est.
                              </div>
                              <div class="meta">1 day ago</div>
                            </div>
                          </div>
                          <!--//col-->
                        </div>
                        <!--//row-->
                        <a class="link-mask" href="notifications.html"></a>
                      </div>
                      <!--//item-->
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
                            <div class="app-icon-holder icon-holder-mono">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                class="bi bi-bar-chart-line"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                                />
                              </svg>
                            </div>
                          </div>
                          <!--//col-->
                          <div class="col">
                            <div class="info">
                              <div class="desc">
                                Your report is ready. Proin venenatis interdum
                                est.
                              </div>
                              <div class="meta">3 days ago</div>
                            </div>
                          </div>
                          <!--//col-->
                        </div>
                        <!--//row-->
                        <a class="link-mask" href="notifications.html"></a>
                      </div>
                      <!--//item-->
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
                              src="../assets/images/profiles/profile-2.png"
                              alt=""
                            />
                          </div>
                          <!--//col-->
                          <div class="col">
                            <div class="info">
                              <div class="desc">
                                James sent you a new message.
                              </div>
                              <div class="meta">7 days ago</div>
                            </div>
                          </div>
                          <!--//col-->
                        </div>
                        <!--//row-->
                        <a class="link-mask" href="notifications.html"></a>
                      </div>
                      <!--//item-->
                    </div>
                    <!--//dropdown-menu-content-->

                    <div class="dropdown-menu-footer p-2 text-center">
                      <a href="notifications.html">View all</a>
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
                    href="#"
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
          <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none"
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
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/usuarios"
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
                  <span class="nav-link-text">Usuarios</span>
                </router-link>
              </li>
              <li class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
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
  methods: {
    logout() {
      this.$store.dispatch('logout')
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