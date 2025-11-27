async function consultarAPI() {
  const res = await fetch("TU_URL_DEL_BACKEND");
  const data = await res.json();
  document.getElementById("respuesta").innerText = data.message;
}
