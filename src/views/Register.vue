<template>
  <div class="app app-signup p-0">    	
    <div class="row g-0 app-auth-wrapper">
	    <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div class="d-flex flex-column align-content-end">
			    <div class="app-auth-body mx-auto">	
				    <div class="app-auth-branding mb-4"><a class="app-logo" href="index.html"><img class="logo-icon me-2" src="assets/images/avatardefault_92824.svg" alt="logo"></a></div>
					<h2 class="auth-heading text-center mb-4">Crear cuenta</h2>					
	
					<div class="auth-form-container text-start mx-auto">
						<form class="auth-form auth-signup-form">         
							<div class="email mb-3">
								<label class="sr-only" for="signup-email">Nombre</label>
								<input id="signup-name" name="signup-name" type="text" class="form-control signup-name" placeholder="Nombre*" required="required">
							</div>
							<div class="email mb-3">
							<label class="sr-only" for="signup-email">Apellido</label>
								<input id="signup-name" name="signup-name" type="text" class="form-control signup-name" placeholder="apellido*" required="required">
							</div>
							<div class="email mb-3">
								<label class="sr-only" for="signup-email">Email</label>
								<input id="signup-email" name="signup-email" type="email" class="form-control signup-email" placeholder="Email*" required="required">
							</div>
							<div class="password mb-3">
								<label class="sr-only" for="signup-password">Contraseña</label>
								<input id="signup-password" name="signup-password" type="password" class="form-control signup-password" placeholder="Contraseña" required="required">
							</div>
							<div class="extra mb-3">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="RememberPassword">
									<label class="form-check-label" for="RememberPassword">
									Esoty de acuerdo<a href="#" class="app-link">Términos de uso</a> y <a href="#" class="app-link">Política de Privacidad</a>.
									</label>
								</div>
							</div><!--//extra-->
							
							<div class="text-center">
								<button type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto">Registrarse</button>
							</div>
						</form><!--//auth-form-->
						
						<div class="auth-option text-center pt-5">Si tienes ya cuenta con nosotros <a class="text-link" href="login.html" >inicie sesión</a></div>
					</div><!--//auth-form-container-->	
					
					
				    
			    </div><!--//auth-body-->
		    
			    <footer class="app-auth-footer">
				    <div class="container text-center py-3">
				         <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
			        <small class="copyright">Diseñado<i class="fas fa-heart" style="color: #fb866a;"></i>por <a class="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Equipo 3</a></small>
				       
				    </div>
			    </footer><!--//app-auth-footer-->	
		    </div><!--//flex-column-->   
	    </div><!--//auth-main-col-->
	    <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
		    <div class="auth-background-holder">			    
		    </div>
		    <div class="auth-background-mask"></div>
		    <div class="auth-background-overlay p-3 p-lg-5">
			    <div class="d-flex flex-column align-content-end h-100">
				    <div class="h-100"></div>
				    
				    </div>
				</div>
		    </div><!--//auth-background-overlay-->
	    </div><!--//auth-background-col-->
    
    </div><!--//row-->


</template>

<script>
export default {

}
</script>

<style>
@import "/assets/css/dashboard/portal.css";

.auth-background-holder {

	background:url("/img/background/istockphoto-951990444-612x612.jpg") no-repeat center center;
}
</style>
