async function consultarAPI() {
  const res = await fetch("https://backend-5f15.onrender.com");
  const data = await res.json();
  document.getElementById("respuesta").innerText = data.message;
}
