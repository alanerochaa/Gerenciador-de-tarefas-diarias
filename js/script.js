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

// 4️⃣ Função para renderizar tarefas nas colunas corretas
function renderizarTarefas() {
    // Limpa as listas antes de renderizar novamente
    listaPendentes.innerHTML = "";
    listaEmAndamento.innerHTML = "";
    listaConcluidas.innerHTML = "";

    tarefas.forEach((tarefa) => {
        const li = document.createElement("li");
        li.textContent = tarefa.titulo;

        // Botão para mover para "Em Andamento"
        if (tarefa.status === "pendente") {
            const botaoIniciar = document.createElement("button");
            botaoIniciar.textContent = "Iniciar ⏳";
            botaoIniciar.addEventListener("click", () => atualizarStatusTarefa(tarefa.id, "em-andamento"));
            li.appendChild(botaoIniciar);

            // Botão de Editar
            const botaoEditar = document.createElement("button");
            botaoEditar.textContent = "Editar ✏️";
            botaoEditar.addEventListener("click", () => editarTarefa(tarefa.id, li));
            li.appendChild(botaoEditar);

            // Botão de Excluir
            const botaoExcluir = document.createElement("button");
            botaoExcluir.textContent = "Excluir 🗑️";
            botaoExcluir.addEventListener("click", () => excluirTarefa(tarefa.id));
            li.appendChild(botaoExcluir);

            listaPendentes.appendChild(li);
        }

        // Botão para concluir a tarefa
        else if (tarefa.status === "em-andamento") {
            const botaoConcluir = document.createElement("button");
            botaoConcluir.textContent = "Concluir ✅";
            botaoConcluir.addEventListener("click", () => atualizarStatusTarefa(tarefa.id, "concluida"));
            li.appendChild(botaoConcluir);
            listaEmAndamento.appendChild(li);
        }

        // Exibir tarefas concluídas sem botões
        else if (tarefa.status === "concluida") {
            listaConcluidas.appendChild(li);
        }
    });

    listarTarefasMaiusculas();
}

// 5️⃣ Função para atualizar o status de uma tarefa
function atualizarStatusTarefa(id, novoStatus) {
    tarefas = tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, status: novoStatus } : tarefa
    );
    renderizarTarefas();
}

