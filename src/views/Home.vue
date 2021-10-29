<template>
  <!-- HEADER-Barra de navegación -->

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div style="width: 100%;" class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img
            src="../assets/images/logosinfondo.png"
            alt=""
            width="120"
            height="120"
            class="d-inline-block align-text-top"
          />

          <a class="navbar-brand" href="#">Centro Veterinario Victoria</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item-home ">
            <a class="nav-link active" aria-current="page" href="#"
              >Quienes somos</a
            >
          </li>
          <li class="nav-item home">
            <a class="nav-link" href="#">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >Productos</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >Donde estamos
            </a>
          </li>
          <li class="nav-item-home">
            <router-link :to="{ name: 'Register' }" class="nav-link-home"
              >Registrarse
            </router-link>
            </li>
             <li class="nav-item-home">
            <router-link  :to=" { name: 'Login'}" class="nav-link-home">Iniciar Sesión

            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- SECCION ABOUT -->
  <div class="contenedor">
    
    <section class="action" id="quienes">
      <div class="container">
        <div class="left-text hidden-xs" id="quienes">
          <h4>Quienes somos</h4>
          <p>
            En el <strong>Centro Veterinario Victoria</strong> trabajamos para
            ser la mejor clínica veterinaria de Andalucía, capacitada para dar
            el mejor trato y los mejores servicios a nuestros clientes. Nuestro
            principal trabajo esta dedicado a los gatos, con una fuente de
            formación y material necesario para garantizar la mejor seguridad a
            nuestro amigo felino.
          </p>
        </div>
        <div class="right-image hidden-xs">
          <img
            src="../assets/images/background/clinica.jpg"
            class="img-fluid"
            alt="Foto descriptiva de la fachade de la clínica veterinaria"
          />
        </div>
      </div>
    </section>
    <!-- SECCION SERVICIOS GALERIA -->
    <section class="gallery" id="servicios">
      <div class="text-center">
        <h2>Servicios</h2>
        <p>
          En nuestro Centro Veterinario Victoria te ofrecemos una gran variedad
          de servicios entre los que puedes encontrar:<br />
        </p>
      </div>
      <div class="container">
        <div class="container1">
          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/istockphoto-154902723-612x612.jpg"
                height="180px"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Medicina General</h4>
                <p>
                  Consultas veterinarias sobre medicina general y de
                  especialista.
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/istockphoto-485629581-612x612.jpg"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Cirugía</h4>
                <p>Chequeo preoperatorio, anestesia y control del dolor.</p>
              </figcaption>
            </figure>
          </div>

          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/istockphoto-843827698-612x612.jpg"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Hospitalización</h4>
                <p>
                  Zona donde nuestros pacientes pueden permanecer las 24 horas
                  del día.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="container1">
          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/istockphoto-1196017263-612x612.jpg"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Radiología</h4>
                <p>Extensa formación en Radiología.</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/istockphoto-966384466-612x612.jpg"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Análisis Clínicos</h4>
                <p>Pruebas para establecer un diagnóstico certero.</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/istockphoto-875811032-612x612.jpg"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Peluquería</h4>
                <p>
                  Equipada para el cuidado y la higiene de su mascota, ya sea
                  perro o gato.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery" id="productos">
      <div class="text-center">
        <h2>Productos</h2>
        <p>
          Gran variedad de alimentación, tratamientos veterinarios y accesorios
          para tu mascota<br />
        </p>
      </div>
      <div class="container">
        <div class="container1">
          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/Alimentacion.jpg"
                height="180px"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Alimentación</h4>
                <p>
                  El mejor pienso y comida húmeda para tu mascota.
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/Medicina4.jpg"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Tratamientos</h4>
                <p>Para cuidar la salud de tu mascota.</p>
              </figcaption>
            </figure>
          </div>

          <div class="col-md-3">
            <figure class="effect-marley">
              <img
                src="../assets/images/Accesorios3.jpg"
                alt=""
                class="img-fluid"
              />
              <figcaption>
                <h4>Accesorios</h4>
                <p>
                  Todo tipo de accesorios para tu mascota. día.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCION CONTACTO -->
    <section class="action" id="mapa">
      <div class="container">
        <div class="left-text hidden-xs">
          <h4>Contacto</h4>
          <p>
            Centro Veterinario Victoria<br />
            Barriada La Oliva<br />
            Edificio Giralda Sur, nº2<br />
            41013 - SEVILLA<br /><br />
            <strong>Tfno: 954 240 228</strong><br /><br />
            Agustín Segura<br />
          </p>
        </div>

        <div class="right-image hidden-xs">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.9166105860895!2d-5.971626185050272!3d37.368149979835465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126e8ef98edfd5%3A0x1ac8146b9cbfa17e!2sCentro%20Veterinario%20Victoria!5e0!3m2!1ses!2ses!4v1634241798359!5m2!1ses!2ses"
            width="550"
            height="350"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
  <div class="sub-footer">
    <div class="container">
      <div class="footer">
        <div class="copyright">
          <span>
            <a href="#/">
              Aviso Legal y Política de privacidad&nbsp;|&nbsp;Directiva de
              Cookies</a
            >
          </span>
        </div>
      </div>

      <div class="copyright">
        <span>
          <a href="#/"> Copyright © 2021 Grupo-3 Don Bosco-Factoría F5</a></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../assets/css/home/home.css";

</style>
