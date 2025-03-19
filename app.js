
const amigos = [];
const uResultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombresDeAmigos = document.getElementById("amigo").value;
    console.log(nombresDeAmigos);
    if (nombresDeAmigos === "") {
        alert("Por favor, inserte un nombre.");
        }
        else{
            amigos.push(nombresDeAmigos);
            nombresDeAmigos = document.getElementById("amigo").value = "";
            console.log(amigos);
        }
}


actualizarLista();


function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement(li);
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}


function sortearAmigo() {
    let random = Math.floor(Math.random()* amigos.length);
    let amigoSecreto = amigos[random];
    uResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto} </li>`;
}
