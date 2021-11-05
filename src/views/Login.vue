<template>
  <div class="app app-login p-0">
    <div class="row g-0 app-auth-wrapper">
      <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div class="auth-background-holder"></div>
        <div class="auth-background-mask"></div>
        <div class="auth-background-overlay p-3 p-lg-5">
          <div class="d-flex flex-column align-content-end h-100">
            <div class="h-100"></div>
          </div>
        </div>
      </div>

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
            <h2 class="auth-heading text-center mb-5">Iniciar sesión</h2>
            <div class="auth-form-container text-start">
              <form @submit.prevent="login" class="form-floating">
                <div class="email mb-3">
                  <label class="sr-only" for="floatingInputInvalid"
                    >Email</label
                  >
                  <input
                    id="floatingInputInvalid"
                    name="signin-email"
                    type="email"
                    v-model="form.email"
                    class="form-control is-inavalid"
                    placeholder="Email@ejemplo.com* "
                    required="required"
                  />
                </div>
                <!--//form-group-->
                <div class="password mb-3">
                  <label class="sr-only" for="signin-password">Password</label>
                  <input
                    id="signin-password"
                    name="signin-password"
                    type="password"
                    v-model="form.password"
                    class="form-control signin-password"
                    placeholder="Contraseña*"
                    required="required"
                  />
                  <!-- <div class="col">
                    <label for="password"></label>
                    <div style="margin-top:15px;">
                      <input
                        style="margin-left:20px;"
                        type="checkbox"
                        id="mostrar_contrasena"
                        title="clic para mostrar contraseña"
                      />
                      &nbsp;&nbsp;Mostrar Contraseña
                    </div> 
                  </div> -->
                  <div class="extra mt-3 row justify-content-between">
                    <div class="col-6">
                      <div class="form-check"></div>
                    </div>
                  </div>
                  <!--//extra-->
                </div>
                <!--//form-group-->
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn app-btn-primary w-100 theme-btn mx-auto"
                  >
                    Entrar
                  </button>
                </div>
              </form>
              <div class="auth-option text-center pt-5">
                Todavía no tiene cuenta con nosotros? Entre<a
                  class="text-link"
                  href=""
                  >aqui</a
                >.
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
    </div>
    <!--//auth-background-col-->
  </div>
  <!--//row-->
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      errors: null,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          this.$router.push({ name: "AdminLayout" });
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
  background: url("../assets/images/background/istockphoto-1214325113-612x612.jpg") !important;
  background-size: 1080px !important;
  min-height: 100% !important;
}

.app-btn-primary {
  background: #053189;
}
.app-btn-primary:hover {
  background: #f98d0d;
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
