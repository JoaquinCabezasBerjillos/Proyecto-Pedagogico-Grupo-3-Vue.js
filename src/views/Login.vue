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
      <!--//auth-background-overlay-->
      <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
        <div class="d-flex flex-column align-content-end">
          <div class="app-auth-body mx-auto">
            <div class="app-auth-branding mb-4">
              <a class="app-logo" href="#"
                ><img
                  class="logo-icon me-2"
                  src="/assets/images/mobile_me_icon-icons.com_59217.svg"
                  alt="logo"
              /></a>
            </div>
            <h2 class="auth-heading text-center mb-5">Iniciar sesión</h2>
            <div class="auth-form-container text-start">
              <form @submit.prevent="login" class="auth-form login-form">
                <div class="email mb-3">
                  <label class="sr-only" for="signin-email">Email</label>
                  <input
                    id="signin-email"
                    name="signin-email"
                    type="email"
                    v-model="email"
                    class="form-control signin-email"
                    placeholder="Email* "
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
                    v-model="password"
                    class="form-control signin-password"
                    placeholder="Contraseña*"
                    required="required"
                  />
                  <div class="extra mt-3 row justify-content-between">
                    <div class="col-6">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="RememberPassword"
                        />
                        <label class="form-check-label" for="RememberPassword">
                          Recuérdame
                        </label>
                      </div>
                    </div>
                    <!--//col-6-->
                    <div class="col-6">
                      <div class="forgot-password text-end">
                        <a href="reset-password.html">Olvidó su contraseña?</a>
                      </div>
                    </div>
                    <!--//col-6-->
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
                  href="#"
                  >aqui</a
                >.
              </div>
            </div>
            <!--//auth-form-container-->
          </div>
          <!--//auth-body-->

          <footer class="app-auth-footer">
            <div>
              <small class="copyright"
                >Diseñado<i class="fas fa-heart" style="color: #fb866a;"></i> by
                <a
                  class="app-link"
                  href="http://themes.3rdwavemedia.com"
                  target="_blank"
                  >Equipo 3</a
                ></small
              >
            </div>
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
//Import especificos de Login

import AuthService from "@/services/AuthService.js";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password,
        
      };

      AuthService.login(data)

        .then((respuesta) => {
          //para guardar los datos que estamos recibiendo los tenemos que guardar en el localStore
          localStorage.setItem("token", JSON.stringify(respuesta.data.data.token));
          localStorage.setItem("usuario", JSON.stringify(respuesta.data.data.usuario));
          // Cuando ya tenemos el login llevar a la vista Dashboard o Bienvenida.
          this.$router.push({ name:"admin" });
        })
        .catch((error) => {
          console.log(error);
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
.form-check-input:hover{
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
label{
  
    font-size: 16px;

}
</style>
