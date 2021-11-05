<template>
  <div class="app app-signup p-0">
    <div class="row g-0 app-auth-wrapper">
      <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
        <div class="d-flex flex-column align-content-end">
          <div class="app-auth-body mx-auto">
            <div class="app-auth-branding mb-4">
              <a class="app-logo" href=""
                ><img
                  class="logo-icon me-2"
                  src="../assets/images/logosinfondo.png"
                  alt="logo"
              /></a>
            </div>
            <h2 class="auth-heading text-center mb-4">Crear cuenta</h2>

            <div class="auth-form-container text-start mx-auto">
              <form @submit.prevent="register" class="auth-form auth-signup-form">
                <div class="email mb-3">
                  <label class="sr-only" for="signup-name">Nombre</label>
                  <input
                    id="signup-name"
                    name="signup-name"
                    type="text"
                    v-model="form.nombre"
                    class="form-control signup-name"
                    placeholder="Nombre*"
                    required="required"
                  />
                </div>
                <div class="email mb-3">
                  <label class="sr-only" for="signup-apellido">Apellidos</label>
                  <input
                    id="signup-apellido"
                    name="signup-apellido"
                    type="text"
                    v-model="form.apellidos"
                    class="form-control signup-apellido"
                    placeholder="Apellido*"
                    required="required"
                  />
                </div>
                <div class="email mb-3">
                  <label class="sr-only" for="signup-movil">Movil</label>
                  <input
                    id="signup-movil"
                    name="signup-movil"
                    type="number"
                    v-model="form.movil"
                    class="form-control signup-movil"
                    placeholder="Movil*"
                    required="required"
                  />
                </div>
                <div class="email mb-3">
                  <label class="sr-only" for="signup-email">Email</label>
                  <input
                    id="signup-email"
                    name="signup-email"
                    type="email"
                    v-model="form.email"
                    class="form-control signup-email"
                    placeholder="Email*"
                    required="required"
                  />
                </div>
                <div class="password mb-3">
                  <label class="sr-only" for="signup-password"
                    >Contraseña</label
                  >
                  <input
                    id="signup-password"
                    name="signup-password"
                    type="password"
                    v-model="form.password"
                    class="form-control signup-password"
                    placeholder="Contraseña"
                    required="required"
                  />
                  </div>
                  <div class="password mb-3">
                  <label class="sr-only" for="confirm-password"
                    >Confirmar Contraseña</label
                  >
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    v-model="form.confirm_password"
                    class="form-control confirm-password"
                    placeholder="Repetir Contraseña"
                    required="required"
                  />
                  </div>
                <div class="extra mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="RememberPassword"
                    />
                    <label class="form-check-label" for="RememberPassword">
                      Estoy de acuerdo<a href="" class="app-link"
                        >Términos de uso</a
                      >
                      y <a href="" class="app-link">Política de Privacidad</a>.
                    </label>
                  </div>
                </div>
                <!--//extra-->

                <div class="text-center">
                  <button
                    type="submit"
                    class="btn app-btn-primary w-100 theme-btn mx-auto"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
              <!--//auth-form-->

              <div class="auth-option text-center pt-5">
                Si tienes ya cuenta con nosotros
                <a class="text-link" href="login.html">inicie sesión</a>
              </div>
            </div>
            <!--//auth-form-container-->
          </div>
          <!--//auth-body-->

       <footer class="app-auth-footer">
            Diseñado por Equipo 3- Factoría F5- Fundación Don Bosco.
          </footer>
          <!--//app-auth-footer-->
        </div>
        <!--//flex-column-->
      </div>
      <!--//auth-main-col-->
      <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div class="auth-background-holder"></div>
        <div class="auth-background-mask"></div>
        <div class="auth-background-overlay p-3 p-lg-5">
          <div class="d-flex flex-column align-content-end h-100">
            <div class="h-100"></div>
          </div>
        </div>
      </div>
      <!--//auth-background-overlay-->
    </div>
    <!--//auth-background-col-->
  </div>
  <!--//row-->
</template>

<script>
import '../assets/js/app.js';

export default {
  data() {
    return {
      form: {
        nombre: null,
        apellidos: null,
        movil: null,
        email: null,
        password: null,
        confirm_password: null,
      },
      errors: null,
    };
  },

  methods: {
    register() {
      this.$store
        .dispatch("register", this.form)
         .then(() => {
          this.$router.push({ name: "Login" });
        })
        
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>

<style scoped>
.auth-background-holder {
  background: url("../assets/images/background/istockphoto-951990444-612x612.jpg") !important;
  background-size: 1080px !important;
  min-height: 100% !important;
}

.app-btn-primary {
  background: #053189 !important;
}
.app-btn-primary:hover {
  background: #f98d0d !important;
}
.form-check-input {
  background-color: #053189 !important;
}
.form-check-input:hover {
  background: #f98d0d !important;
}
.auth-heading {
  color: #053189;
}
footer {
  background: white;
}

.app-auth-footer .copyright {
  font-size: 0.5rem;
}
label {
  font-size: 16px;
}
</style>
