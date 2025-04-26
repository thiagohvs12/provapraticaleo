document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos HTML e armazena em variáveis para fácil acesso
    const taskInput = document.getElementById('tarefa');
    const addButton = document.getElementById('addtarefa');
    const taskList = document.getElementById('taskList');
    const prioridadeCheck = document.getElementById('prioridade');
    const taskPrioridadeList = document.getElementById('taskprioridade');
    const taskPendenteList = document.getElementById('taskpendente');
    const completedTasksList = document.getElementById('completedTasks');

    // Seleciona os elementos onde os contadores serão exibidos
    const prioridadeCountSpan = document.createElement('span');
    prioridadeCountSpan.textContent = ' (0)';  // Inicializa com 0
    document.querySelector('.taskprioridade').appendChild(prioridadeCountSpan);

    const pendenteCountSpan = document.createElement('span');
    pendenteCountSpan.textContent = ' (0)';    // Inicializa com 0
    document.querySelector('.taskpendente').appendChild(pendenteCountSpan);

    const concluidaCountSpan = document.createElement('span');
    concluidaCountSpan.textContent = ' (0)';  // Inicializa com 0
    document.querySelector('.taskconcluidas').appendChild(concluidaCountSpan);

// Função para atualizar os contadores
function updateCounts() {
    prioridadeCountSpan.textContent = ` (${taskPrioridadeList.children.length})`;
    pendenteCountSpan.textContent = ` (${taskPendenteList.children.length})`;
    concluidaCountSpan.textContent = ` (${completedTasksList.children.length})`;
}
// Chamada inicial para exibir os contadores com os valores iniciais
updateCounts();

// Adiciona o evento de botão "Adicionar Tarefa"
addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
// Verifica se o texto da tarefa não está vazio
if (taskText) {
    // Cria um novo item de lista  para representar a tarefa
    const li = document.createElement('li');
    li.textContent = taskText; // Define o texto do item da lista com o texto da tarefa

    // Cria um checkbox para marcar a tarefa como concluída
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox"; // Define o tipo do input como checkbox

    // Adiciona um ouvinte de evento ao checkbox para lidar com a conclusão da tarefa
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Se o checkbox estiver marcado, a tarefa foi concluída
            li.classList.add('completed'); // Adiciona a classe 'completed' para aplicar estilo de tarefa concluída
            completedTasksList.appendChild(li); // Move a tarefa para a lista de tarefas concluídas
// Remove a tarefa da lista de prioridades ou da lista de pendentes, dependendo de onde estava
if (prioridadeCheck.checked) {
    taskPrioridadeList.removeChild(li);
} else {
    taskPendenteList.removeChild(li);
}
updateCounts(); // Atualiza os contadores após a alteração
} else {
// Se o checkbox estiver desmarcado, a tarefa não está mais concluída
li.classList.remove('completed'); // Remove a classe 'completed'

// Move a tarefa de volta para a lista de prioridades ou para a lista de pendentes
if (prioridadeCheck.checked) {
    taskPrioridadeList.appendChild(li);
} else {
    taskPendenteList.appendChild(li);
}
completedTasksList.removeChild(li); // Remove a tarefa da lista de concluídas
updateCounts(); // Atualiza os contadores após a alteração
}
});
li.appendChild(checkbox); // Adiciona o checkbox ao item da lista
// Cria um botão para remover a tarefa da lista
const removeButton = document.createElement('button');
removeButton.textContent = "Remover"; // Define o texto do botão
removeButton.classList.add('remove-button'); // Adiciona uma classe para estilo (opcional)

// Adiciona um ouvinte de evento ao botão de remover para excluir a tarefa
removeButton.addEventListener('click', function() {
li.remove(); // Remove o item da lista (tarefa) quando o botão é clicado

// Remove a tarefa da lista de prioridades ou pendentes, se estiver em alguma delas
if (prioridadeCheck.checked) {
taskPrioridadeList.removeChild(li);
} else {
taskPendenteList.removeChild(li);
}
completedTasksList.removeChild(li); // Remove da lista de concluídas também, se estiver lá
updateCounts(); // Atualiza os contadores após a remoção
});
li.appendChild(removeButton); // Adiciona o botão de remover ao item da lista

// Adiciona a tarefa à lista de prioridades ou à lista de pendentes, dependendo do checkbox
if (prioridadeCheck.checked) {
taskPrioridadeList.appendChild(li); // Adiciona à lista de prioridades
} else {
taskPendenteList.appendChild(li);   // Adiciona à lista de pendentes
}

taskInput.value = '';         // Limpa o campo de entrada após adicionar a tarefa
prioridadeCheck.checked = false; // Desmarca o checkbox de prioridade
updateCounts(); // Atualiza os contadores após adicionar a tarefa
}
});
});



    