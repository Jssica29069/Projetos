//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
        input.focus();
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('um nome deve ser adicionado!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indiceSorteado];

    // Remover o nome sorteado da lista
    amigos.splice(indiceSorteado, 1);

    exibirResultado(sorteado);
}

// Função para exibir o resultado do sorteio na interface
function exibirResultado(sorteado) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `o nome sorteado de seu amigo secreto é: ${sorteado}`;
}

