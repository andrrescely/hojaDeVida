const certificaciones = ["Curso A", "Curso B", "Taller C", "Seminario D"];

function mostrarCertificaciones() {
  let ul = document.getElementById("listaCertificaciones");

  for (let i = 0; i < certificaciones.length; i++) {
    let li = document.createElement("li");
    li.textContent = certificaciones[i];
    ul.appendChild(li);
  }
}

window.onload = mostrarCertificaciones;

function mostrarProyectosAnteriores() {
  const cantidadProyectos = prompt(
    "Ingrese la cantidad de proyectos que desea ver:"
  );

  const cantidadProyectosNum = parseInt(cantidadProyectos);

  if (!isNaN(cantidadProyectosNum) && cantidadProyectosNum > 0) {
    const proyectos = [
      "Proyecto 1",
      "Proyecto 2",
      "Proyecto 3",
      "Proyecto 4",
      "Proyecto 5",
    ];

    let proyectosAMostrar =
      cantidadProyectosNum < proyectos.length
        ? cantidadProyectosNum
        : proyectos.length;

    for (let i = 0; i < proyectosAMostrar; i++) {
      alert("Proyecto: " + proyectos[i]);
    }
  } else {
    alert("Por favor, ingrese un número válido mayor que cero.");
  }
}

document
  .getElementById("verProyectosBtn")
  .addEventListener("click", mostrarProyectosAnteriores);


  // funcionalidad de los botones 

function añadirExperiencia() {
    let nombreEmpresa = prompt("Nombre de la empresa:");
    let puesto = prompt("Puesto:");
    let duracion = prompt("Duración:");
    
    if (nombreEmpresa && puesto && duracion) {
        let ul = document.getElementById('experienceList');
        let li = document.createElement('li');
        li.innerHTML = `<strong>${nombreEmpresa}:</strong> ${puesto}<br /><span>Duración: ${duracion}</span>`;
        ul.appendChild(li);
    }
}

function añadirHabilidad() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
}

document.getElementById('addExperience').addEventListener('click', añadirExperiencia);
document.getElementById('addSkill').addEventListener('click', añadirHabilidad);

function saludoPersonalizado() {
    alert("¡Gracias por visitar mi Hoja de vida!");
}

const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}

document.getElementById('saludoBtn').addEventListener('click', saludoPersonalizado);
document.getElementById('calificacionBtn').addEventListener('click', calificarHojaDeVida);


function toggleAccordion(sectionId) {
  var content = document.getElementById(sectionId);
  content.classList.toggle("active");
}
