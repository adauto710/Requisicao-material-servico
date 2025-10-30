// Função para imprimir a requisição
function imprimirRequisicao() {
    window.print();
}

// Função para adicionar nova linha na tabela
function adicionarLinha() {
    const tabela = document.querySelector("#tabelaRequisicao tbody");
    const novaLinha = tabela.rows[0].cloneNode(true);
    // Limpa os valores dos inputs e textareas na nova linha
    novaLinha.querySelectorAll("input, textarea").forEach(element => element.value = "");
    tabela.appendChild(novaLinha);
}

// Função para atualizar os totais
function atualizarTotais() {
    const linhas = document.querySelectorAll("#tabelaRequisicao tbody tr");
    let totalGeral = 0;

    linhas.forEach(linha => {
        const qtd = parseFloat(linha.querySelector(".qtd").value) || 0;
        const valorUnit = parseFloat(linha.querySelector(".valorUnit").value) || 0;
        const total = qtd * valorUnit;
        linha.querySelector(".valorTotal").value = total.toFixed(2);
        totalGeral += total;
    });

    document.getElementById("totalGeral").textContent = totalGeral.toFixed(2);
}

// Função para atualizar o nome do responsável na assinatura
function atualizarNomeResponsavel() {
    const responsavel = document.getElementById("responsavel").value;
    const nomeAssinatura = document.getElementById("responsavel-nome-assinatura");
    nomeAssinatura.textContent = responsavel;
}

// Eventos para atualizar valores automaticamente
document.addEventListener("input", function (event) {
    if (event.target.classList.contains("qtd") || event.target.classList.contains("valorUnit")) {
        atualizarTotais();
    }
    if (event.target.id === "responsavel") {
        atualizarNomeResponsavel();
    }
});
