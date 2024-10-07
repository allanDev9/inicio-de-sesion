function login(){

    let usuario = "Allan";
    let contraseña = "123"
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let mensaje = document.getElementById('mensaje')
    
    if (username === usuario && password === contraseña){
            mensaje.innerHTML = "Acceso exitoso ✅";
    }
    else{
        mensaje.innerHTML = "Acceso denegado ❌";
    }
}
