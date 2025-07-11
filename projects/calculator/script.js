const resultadoInput = document.getElementById('resultado');
const botoes = document.querySelectorAll('.btn');

let expressaoAtual = '';
let resultadoFinal = 0;
let operacaoPendente = null;

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valorBotao = botao.textContent;

        if (botao.classList.contains('numero') || valorBotao === '.') {
            expressaoAtual += valorBotao;
            resultadoInput.value = expressaoAtual;
        } else if (botao.classList.contains('operacao')) {
            if (expressaoAtual !== '') {
                if (operacaoPendente) {
                    resultadoFinal = calcular(resultadoFinal, parseFloat(expressaoAtual), operacaoPendente);
                    resultadoInput.value = resultadoFinal;
                    expressaoAtual = ''; 
                } else {
                    resultadoFinal = parseFloat(expressaoAtual);
                    expressaoAtual = '';
                }
                operacaoPendente = valorBotao;
            }
        } else if (botao.classList.contains('clear')) {
            expressaoAtual = '';
            resultadoFinal = 0;
            operacaoPendente = null;
            resultadoInput.value = '';
        } else if (botao.classList.contains('igual')) {
            if (expressaoAtual !== '' && operacaoPendente) {
                resultadoFinal = calcular(resultadoFinal, parseFloat(expressaoAtual), operacaoPendente);
                resultadoInput.value = resultadoFinal;
                expressaoAtual = String(resultadoFinal); 
                operacaoPendente = null; 
            }
        }
    });
});

function calcular(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Erro';         default:
            return num2;
    }
}

