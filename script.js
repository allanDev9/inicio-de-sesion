let intentosRestantes = 3;

        function login() {
            let usuario = "Allan";
            let contraseña = "123";
            
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
            let mensaje = document.getElementById('mensaje');
            let boton = document.getElementById('button');

            if (intentosRestantes > 0) {
                if (username === usuario && password === contraseña) {
                    mensaje.innerHTML = "Acceso exitoso ✅";
                    setTimeout(() => {
                        window.location.href="home.html"
                    }, 2000);
                } else {
                    intentosRestantes--;
                    if (intentosRestantes > 0) {
                        mensaje.innerHTML = `Acceso denegado ❌. Te quedan ${intentosRestantes} intentos.`;
                    } else {
                        mensaje.innerHTML = "Has alcanzado el número máximo de intentos. Intenta de nuevo más tarde.";
                        boton.disabled = true; 
                        setTimeout(() => {
                            boton.disabled = false; 
                            intentosRestantes = 3;
                        }, 3000); 
                    }
                }
            } 
        }