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


    