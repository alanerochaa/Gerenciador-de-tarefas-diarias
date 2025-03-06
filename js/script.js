// 1️⃣ Criar um array para armazenar as tarefas como objetos e adicionar uma tarefa inicial
let tarefas = [
    { id: 1, titulo: "Finalizar o projeto", status: "pendente" }
];

// 2️⃣ Selecionar elementos do DOM
const inputTarefa = document.getElementById("tarefa-input");
const botaoAdicionar = document.getElementById("adicionar-btn");
const botaoFiltrar = document.getElementById("filtrar-btn");
const listaPendentes = document.getElementById("pendentes-lista");
const listaEmAndamento = document.getElementById("em-andamento-lista");
const listaConcluidas = document.getElementById("concluidas-lista");

// 3️⃣ Criar função para adicionar uma nova tarefa
function adicionarTarefa() {
    const titulo = inputTarefa.value.trim();

    if (titulo !== "") {
        const novaTarefa = {
            id: Date.now(),
            titulo,
            status: "pendente"
        };

        tarefas.push(novaTarefa);
        alert("✅ Tarefa adicionada com sucesso!");
        inputTarefa.value = "";
        renderizarTarefas();
    } else {
        alert("⚠️ Digite uma tarefa válida.");
    }
}

