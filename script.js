// 2. Função da Calculadora de Nota
function calcularNota() {
    let nota1trim = Number(prompt("Digite a nota do primeiro trimestre:"));
    let nota2trim = Number(prompt("Digite a nota do segundo trimestre:"));
    
    let resultado = 180 - (nota1trim + nota2trim);
    
    if (resultado <= 0) {
        alert("Parabéns! Você já está aprovado.");
    } else {
        alert("Você ainda precisa tirar " + resultado + " no terceiro trimestre.");
    }
}

// 4. Função para a atividade de Ímpar ou Par
function verificarImparPar() {
    let numero = Number(prompt("Digite um número para saber se é Ímpar ou Par:"));
    
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido!");
    } else if (numero % 2 === 0) {
        alert("O número " + numero + " é PAR!");
    } else {
        alert("O número " + numero + " é ÍMPAR!");
    }
}