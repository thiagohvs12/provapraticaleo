document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos HTML e armazena em variáveis para fácil acesso
    const taskInput = document.getElementById('tarefa');
    const addButton = document.getElementById('addtarefa');
    const taskList = document.getElementById('taskList');
    const prioridadeCheck = document.getElementById('prioridade');
    const taskPrioridadeList = document.getElementById('taskprioridade');
    const taskPendenteList = document.getElementById('taskpendente');
    const completedTasksList = document.getElementById('completedTasks');

    