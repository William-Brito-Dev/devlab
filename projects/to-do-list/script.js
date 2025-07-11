const inputTarefa = document.getElementById('novaTarefa');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const listaDeTarefas = document.getElementById('listaDeTarefas');

botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim(); 

    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!'); 
        return;
    }

    const itemLista = document.createElement('li');
    itemLista.innerHTML = `
        <span>${textoTarefa}</span>
        <div class="botoes-acao">
            <button class="botao-completar">✔️</button>
            <button class="botao-remover">🗑️</button>
        </div>
    `;

    listaDeTarefas.appendChild(itemLista);
    inputTarefa.value = ''; 

    const botaoCompletar = itemLista.querySelector('.botao-completar');
    const botaoRemover = itemLista.querySelector('.botao-remover');

    botaoCompletar.addEventListener('click', () => {
        itemLista.classList.toggle('completa'); 
    });

    botaoRemover.addEventListener('click', () => {
        listaDeTarefas.removeChild(itemLista); 
    });

    
}