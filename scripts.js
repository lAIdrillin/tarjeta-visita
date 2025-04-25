const btnInsertar = document.getElementById("insertar");
const tarjetas = document.getElementById("tarjetas");

btnInsertar.addEventListener('click', () => {  // Asegúrate de usar 'click' en minúsculas
    const nombre = document.getElementById("nombre").value;
    const fondo = document.getElementById("fondo").value;
    const colTexto = document.getElementById("texto").value;
    const fuente = document.getElementById("fuente").value;
    const puesto = document.getElementById("puesto").value;

    // Validación de los campos
    if (nombre === "" || puesto === "") {
        alert("Por favor, rellene los campos");
        return;
    }

    // Crear la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.classList.add("tarjeta");
    tarjeta.style.backgroundColor = fondo;
    tarjeta.style.color = colTexto;
    tarjeta.style.fontFamily = fuente;
    tarjeta.style.padding = '10px';

    // Crear contenido para la tarjeta
    const titulo = document.createElement('h1');
    titulo.textContent = nombre;
    const subtitulo = document.createElement('h3');
    subtitulo.textContent = puesto;

    // Añadir contenido a la tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(subtitulo);

    // Insertar la tarjeta en el contenedor
    tarjetas.appendChild(tarjeta);

    // Mostrar un mensaje
    alert(`Hola me llamo ${nombre}`);
});
function toggleModo() {
    document.body.classList.toggle("oscuro");
}