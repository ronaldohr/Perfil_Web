const fecha = document.getElementById("fecha");
const hoy = new Date();
fecha.textContent = "Última actualización: " + hoy.toLocaleDateString() + " " + hoy.toLocaleTimeString();