let dv = document.querySelectorAll(".cDescription");
let dvd = document.getElementById("dvd");
let dva = document.getElementById("dva");
let s1 = document.getElementById("service1");
let s2 = document.getElementById("service2");
let s3 = document.getElementById("service3");
let body = document.body;

function cambioParrafo(opcion) {
  dvd.querySelector("h2").textContent = "Descripción";
  dva.querySelector("h2").textContent = "Actividades";
  for (let i = 0; i < 2; i++) {
    dv[i].style.padding = "40px";
    dv[i].querySelector("h2").style.marginBottom = "10px";
  }

  switch (opcion) {
    case 1:
      dvd.querySelector("p").innerText =
        "Servicio programado (diario, semanal o quincenal) para mantener la higiene y el orden en espacios de trabajo. Es el servicio más demandado y la base del negocio.";
      dva.querySelector("ul").innerHTML =
        "<li>Aspirado y fregado de suelos.</li><li>Limpieza y desinfección de baños.</li><li>Eliminación de residuos y cambio de bolsas.</li><li>Limpieza de superficies.</li><li>Polvo de muebles, estanterías y elementos de decoración.</li><li>Limpieza de puertas de vidrio y zonas comunes.</li>";
      break;
    case 2:
      dvd.querySelector("p").innerText =
        "Servicio más exhaustivo y detallado que se realiza de forma puntual (cada 3, 6 o 12 meses) para alcanzar áreas que no se cubren en la limpieza diaria.";
      dva.querySelector("ul").innerHTML =
        "<li>Lavado de paredes y limpieza de zócalos.</li><li>Limpieza interior de ventanas y cristales altos.</li><li>Desempolvado de lámparas, difusores de aire acondicionado y rejillas de ventilación.</li><li>Limpieza profunda de alfombras y moquetas.</li><li>Limpieza de muebles altos y detrás de equipos.</li><li>Pulido y encerado de suelos (en el caso de suelos duros como terrazo o vinílico).</li>";
      break;
    case 3:
      dvd.querySelector("p").innerText =
        "Servicio especializado para dejar un espacio impecable después de un evento con una gran concentración de personas.";
      dva.querySelector("ul").innerHTML =
        "<li>Recogida masiva de basura y reciclaje.</li><li>Limpieza de suelos pegajosos o con derrames.</li><li>Limpieza y reorganización de mobiliario.</li><li>Aseo y reabastecimiento de baños públicos.</li>";
      break;
  }

  if (!document.querySelector(".Schedule")) {
    const btn1 = document.createElement("button");
    btn1.className = "Schedule";
    btn1.innerText = "Agenda tu servicio";

    document.body.appendChild(btn1);
  }
}

s1.addEventListener("click", () => cambioParrafo(1));
s2.addEventListener("click", () => cambioParrafo(2));
s3.addEventListener("click", () => cambioParrafo(3));
