
// Lista de despesas da viagem

const despesas = [
    {
        categoria: "Passagem de avião",
        preco: 1300,
        quantidade: 1
    },

    {
        categoria: "Hospedagem",
        preco: 200,
        quantidade: 5
    },

    {
        categoria: "Alimentação",
        preco: 100,
        quantidade: 5
    },

    {
        categoria: "Transporte",
        preco: 50,
        quantidade: 3
    }
];

// Formatação dos valores em reais

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Local onde as despesas serão exibidas

const lista = document.getElementById("lista-despesas");

let totalGeral = 0;

// Percorre todas as despesas

despesas.forEach(function(despesa) {

    // Calcula o valor final de cada categoria

    const valorFinal = despesa.preco * despesa.quantidade;

    // Soma os valores

    totalGeral = totalGeral + valorFinal;

    // Cria uma linha na tabela

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${despesa.categoria}</td>
        <td>${formatarMoeda(despesa.preco)}</td>
        <td>${despesa.quantidade}</td>
        <td>${formatarMoeda(valorFinal)}</td>
    `;

    lista.appendChild(linha);

});

// Mostra o total da viagem

document.getElementById("total").textContent =
    formatarMoeda(totalGeral);

// Mostra uma mensagem de resumo

document.getElementById("mensagem").textContent =
    "O valor total planejado para a viagem é " +
    formatarMoeda(totalGeral) +
    ". Bom planejamento e boa viagem!";
