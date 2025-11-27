const baseURL = "https://backend-5f15.onrender.com"; 
const respuesta = document.getElementById("respuesta");

async function consultarAPI(endpoint) {
  respuesta.innerHTML = '<p class="loading">Cargando...</p>';
  try {
    const res = await fetch(`${baseURL}${endpoint}`);
    if (!res.ok) throw new Error("Error en la respuesta del servidor");
    const data = await res.json();

    respuesta.innerHTML = '';

    // Usuarios
    if(endpoint === "/users") {
      data.data.forEach(u => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${u.nombre}</h3><p>Email: ${u.email}</p><p>ID: ${u.id}</p>`;
        respuesta.appendChild(card);
      });
    } 
    // Estado API
    else if(endpoint === "/status") {
      respuesta.innerHTML = `<div class="card"><h3>Estado de API</h3><p>Status: ${data.data.status}</p><p>Timestamp: ${new Date(data.data.timestamp).toLocaleString()}</p></div>`;
    } 
    // Info de EduMultiPro
    else if(endpoint === "/info") {
      const info = data.data;
      respuesta.innerHTML = `<div class="card"><h3>${info.name} v${info.version}</h3><p>${info.description}</p><p>Autor: ${info.author}</p></div>`;
    } 
    // Bienvenida u otros
    else {
      respuesta.innerHTML = `<div class="card"><p>${data.message}</p></div>`;
    }

  } catch (error) {
    respuesta.innerHTML = '<p class="error">¡Error al conectar con la API!</p>';
    console.error(error);
  }
}

document.getElementById("btnRaiz").addEventListener("click", () => consultarAPI("/"));
document.getElementById("btnStatus").addEventListener("click", () => consultarAPI("/status"));
document.getElementById("btnInfo").addEventListener("click", () => consultarAPI("/info"));
document.getElementById("btnUsers").addEventListener("click", () => consultarAPI("/users"));
