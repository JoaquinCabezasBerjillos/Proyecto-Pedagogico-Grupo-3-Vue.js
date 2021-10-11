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
                  href="#"
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
                          class="row gx-2 justify-content-between align-items-center"
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
                              <div class="desc">
                                Coatex, 60 cápsulas
                              </div>
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
                          class="row gx-2 justify-content-between align-items-center"
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
                          class="row gx-2 justify-content-between align-items-center"
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
                          class="row gx-2 justify-content-between align-items-center"
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
                    ><img src="../assets/images/user.png" alt="user profile"
                  /></a>
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
                src="../assets/images/app-logo.svg"
                alt="logo"
              /><span class="logo-text">PORTAL</span></a
            >
          </div>

          <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
            <ul class="app-menu list-unstyled accordion" id="menu-accordion">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'Consulta' }"
                  exact-active-class="active"
                >
                  <span class="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-house-door"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Consulta</span>
                </router-link>
              </li>
              <!--//nav-item-->
              <li class="nav-item">
                <a class="nav-link" href="docs.html">
                  <span class="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-folder"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Clientes</span> </a
                ><!--//nav-link-->
              </li>
              <!--//nav-item-->
              <li class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                <router-link
                  to="/mascotas"
                  exact-active-class="active"
                  class="nav-link"
                >
                  <span class="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-card-list"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                      />
                      <circle cx="3.5" cy="5.5" r=".5" />
                      <circle cx="3.5" cy="8" r=".5" />
                      <circle cx="3.5" cy="10.5" r=".5" />
                    </svg>
                  </span>
                  <span class="nav-link-text">Mascotas</span> </router-link
                ><!--//nav-link-->
              </li>
              <!--//nav-item-->
              <li class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                <router-link
                  :to= "{name: 'Productos'}"
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

              <li class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                <a class="nav-link" href="">
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
                  <span class="nav-link-text">Pedidos</span> </a
                ><!--//nav-link-->
              </li>
              <!--//nav-item-->

              <li class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                <router-link to="/" class="nav-link">
                  <span class="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-question-circle"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                      />
                    </svg>
                  </span>
                  <span @click="logout" class="nav-link-text"
                    >Salir</span
                  > </router-link
                ><!--//nav-link-->
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
      <footer class="app-footer">
        <small class="copyright"
          >Diseñado por
          <a class="app-link" href="#" target="_blank">Equipo 3</a></small
        >
      </footer>
      <!--//app-footer-->
    </div>
    <!--//app-wrapper-->
  </div>
</template>

<script>
import "../assets/js/app.js";
import AuthService from "../services/AuthService.js";

export default {

  methods: {
    logout() {
      AuthService.logout()
        .then((res) => {
          localStorage.removeItem("token");
          localStorage.removeIten("usuario");
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
.app-utility-item>a {
    color: white;
}
</style>
