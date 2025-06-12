const apiBase = "https://rickandmortyapi.com/api/character";
const contenedor = document.getElementById("resultado");

function traducirStatus(statusEsp) {
  const mapa = {
    vivo: "alive",
    muerto: "dead",
    desconocido: "unknown",
  };
  return mapa[statusEsp.toLowerCase()] || "";
}

function traducirGenero(generoEsp) {
  const mapa = {
    femenino: "female",
    masculino: "male",
    "sin genero": "genderless",
    desconocido: "unknown",
  };
  return mapa[generoEsp.toLowerCase()] || "";
}

document.getElementById("btn-todos").addEventListener("click", async () => {
  await obtenerPersonajes(apiBase);
});

document.getElementById("btn-filtrar").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const statusEsp = document.getElementById("status").value;
  const species = document.getElementById("species").value;
  const type = document.getElementById("type").value;
  const genderEsp = document.getElementById("gender").value;

  const status = traducirStatus(statusEsp);
  const gender = traducirGenero(genderEsp);

  const url = `${apiBase}/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`;
  await obtenerPersonajes(url);

  //Busqueda normal
  /*const url = `${apiBase}/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`;
  await obtenerPersonajes(url);*/
});

async function obtenerPersonajes(url) {
  contenedor.innerHTML = "<p>Cargando...</p>";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("No se encontraron resultados");

    const data = await res.json();
    mostrarPersonajes(data.results);
  } catch (error) {
    contenedor.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

function mostrarPersonajes(personajes) {
  contenedor.innerHTML = "";
  personajes.forEach((p) => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.species} - ${p.status}</p>
        <p>${p.gender}</p>
      </div>
    `;
  });
}
