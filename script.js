const baseURL = "https://backend-5f15.onrender.com";
const respuesta = document.getElementById("respuesta");

async function consultarAPI(endpoint) {
  respuesta.textContent = "Cargando...";
  try {
    const res = await fetch(`${baseURL}${endpoint}`);
    if (!res.ok) throw new Error("Error en la respuesta del servidor");
    const data = await res.json();
    respuesta.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    respuesta.textContent = "¡Error al conectar con la API!";
    console.error(error);
  }
}

document.getElementById("btnRaiz").addEventListener("click", () => consultarAPI("/"));
document.getElementById("btnStatus").addEventListener("click", () => consultarAPI("/status"));
document.getElementById("btnInfo").addEventListener("click", () => consultarAPI("/info"));
document.getElementById("btnUsers").addEventListener("click", () => consultarAPI("/users"));
