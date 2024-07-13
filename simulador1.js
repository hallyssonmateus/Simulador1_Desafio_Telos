// Dados de repasses do governo (exemplo simplificado)
const dadosRepasses = [
    {"orgao": "MEC", "data": "01/01/2024", "valor": 500.00, "status": "sucesso"},
    {"orgao": "Ministério da Saúde", "data": "03/01/2024", "valor": 750.00, "status": "sucesso"},
    {"orgao": "MEC", "data": "05/01/2024", "valor": 1000.00, "status": "falha", "motivo": "falta de documentação"},
    {"orgao": "Ministério da Educação", "data": "08/01/2024", "valor": 600.00, "status": "sucesso"},
    {"orgao": "Ministério da Saúde", "data": "10/01/2024", "valor": 900.00, "status": "sucesso"},
    {"orgao": "Ministério da Educação", "data": "12/01/2024", "valor": 300.00, "status": "falha", "motivo": "dados inválidos"},
    {"orgao": "Ministério da Saúde", "data": "15/01/2024", "valor": 1200.00, "status": "sucesso"}
];

// Função customizada filter
function customFilter(array, predicate) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

// Função customizada forEach
function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Função para processar e exibir os dados de repasses do governo
function processarRepasses(dados) {
    // Exibir quantidade total de repasses
    console.log(`Total de repasses processados: ${dados.length}`);

    // Filtrar repasses bem sucedidos e com falha usando as funções customizadas
    const repassesSucesso = customFilter(dados, repasso => repasso.status === 'sucesso');
    const repassesFalha = customFilter(dados, repasso => repasso.status === 'falha');

    // Resumo dos repasses bem sucedidos
    const resumoSucesso = {
        quantidadeTotal: repassesSucesso.length,
        quantidadePorOrgao: {},
        valorTotal: 0,
        valorPorOrgao: {}
    };

    customForEach(repassesSucesso, repasso => {
        resumoSucesso.valorTotal += repasso.valor;
        resumoSucesso.quantidadePorOrgao[repasso.orgao] = (resumoSucesso.quantidadePorOrgao[repasso.orgao] || 0) + 1;
        resumoSucesso.valorPorOrgao[repasso.orgao] = (resumoSucesso.valorPorOrgao[repasso.orgao] || 0) + repasso.valor;
    });

    console.log("Resumo dos repasses bem sucedidos:");
    console.log(`Quantidade total de repasses bem sucedidos: ${resumoSucesso.quantidadeTotal}`);
    console.log("Quantidade total de repasses bem sucedidos por órgão:", resumoSucesso.quantidadePorOrgao);
    console.log(`Valor total de repasses bem sucedidos: ${resumoSucesso.valorTotal}`);
    console.log("Valor total de repasses bem sucedidos por órgão:", resumoSucesso.valorPorOrgao);

    // Resumo dos repasses com falha
    const resumoFalha = {
        quantidadeTotal: repassesFalha.length,
        quantidadePorOrgao: {},
        quantidadePorMotivo: {},
        valorTotal: 0,
        valorPorOrgao: {},
        valorPorMotivo: {}
    };

    customForEach(repassesFalha, repasso => {
        resumoFalha.valorTotal += repasso.valor;
        resumoFalha.quantidadePorOrgao[repasso.orgao] = (resumoFalha.quantidadePorOrgao[repasso.orgao] || 0) + 1;
        resumoFalha.quantidadePorMotivo[repasso.motivo] = (resumoFalha.quantidadePorMotivo[repasso.motivo] || 0) + 1;
        resumoFalha.valorPorOrgao[repasso.orgao] = (resumoFalha.valorPorOrgao[repasso.orgao] || 0) + repasso.valor;
        resumoFalha.valorPorMotivo[repasso.motivo] = (resumoFalha.valorPorMotivo[repasso.motivo] || 0) + repasso.valor;
    });

    console.log("Resumo dos repasses com falha:");
    console.log(`Quantidade total de repasses com falha: ${resumoFalha.quantidadeTotal}`);
    console.log("Quantidade total de repasses com falha por órgão:", resumoFalha.quantidadePorOrgao);
    console.log("Quantidade total de repasses com falha por motivo:", resumoFalha.quantidadePorMotivo);
    console.log(`Valor total de repasses com falha: ${resumoFalha.valorTotal}`);
    console.log("Valor total de repasses com falha por órgão:", resumoFalha.valorPorOrgao);
    console.log("Valor total de repasses com falha por motivo:", resumoFalha.valorPorMotivo);
}

// Chamada da função para processar os repasses
processarRepasses(dadosRepasses);
