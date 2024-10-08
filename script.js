let intentosRestantes = 3;

function login() {
  let usuario = "Allan";
  let contraseña = "123";

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = document.getElementById("username");
  let pass = document.getElementById("password");
  let mensaje = document.getElementById("mensaje");
  let boton = document.getElementById("button");

  if (intentosRestantes > 0) {
    if (username === usuario && password === contraseña) {
      user.style.border = "3px solid white";
      pass.style.border = "3px solid white";
      mensaje.innerHTML = "Acceso exitoso ✅  Redirigiendo...";
      mensaje.style.color = "green"; 
      if(username === usuario && password !== contraseña){
        user.style.border = "3px solid red";
        pass.style.border = "3px solid red";
      }
      else if(username !== usuario && password === contraseña){
        user.style.border = "3px solid red";
        pass.style.border = "3px solid red";
      }
      setTimeout(() => {
        window.location.href = "home.html";
      }, 3000);
    } else {
      intentosRestantes--;
      if (intentosRestantes > 0) {
        mensaje.innerHTML = 
        `Acceso denegado ❌. Te quedan ${intentosRestantes} intentos.`;
        mensaje.style.color = "red";
        user.style.border = "3px solid red";
        pass.style.border = "3px solid red";
      } else {
        mensaje.innerHTML =
          "Has alcanzado el número máximo de intentos. Intenta de nuevo mas tarde.";
        boton.disabled = true;
        setTimeout(() => {
          boton.disabled = false;
          intentosRestantes = 3;
        }, 3000);
      }
    }
  }
}
