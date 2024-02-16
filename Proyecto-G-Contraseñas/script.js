function generarContrasena(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(randomIndex);
    }

    return contrasena;
}

document.getElementById('generateBtn').addEventListener('click', function() {
    const longitud = 12; // Longitud de la contraseña
    const contrasenaGenerada = generarContrasena(longitud);
    document.getElementById('password').value = contrasenaGenerada;
});