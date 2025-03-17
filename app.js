
let amigos = [];


function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Error: No puedes ingresar un nombre vacío.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Error: Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; 
}


function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Error: Debes agregar al menos dos amigos para el sorteo.");
        return;
    }

    let participantes = [...amigos]; 
    let resultado = [];
    let emparejamientos = {}; 

    
    let mezclados = [...amigos].sort(() => Math.random() - 0.5);

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let amigoSecreto = mezclados[i];

      
        if (amigo === amigoSecreto) {
            return sortearAmigo(); 
        }

        emparejamientos[amigo] = amigoSecreto;
        resultado.push(`${amigo} → ${amigoSecreto}`);
    }

    mostrarResultado(resultado);
}

// Función para mostrar los resultados del sorteo
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    resultado.forEach((texto) => {
        const li = document.createElement("li");
        li.textContent = texto;
        listaResultado.appendChild(li);
    });
}
