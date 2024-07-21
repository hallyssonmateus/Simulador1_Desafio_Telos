// Dados de repasses do governo (exemplo simplificado)
const dadosRepasses = [
    { "orgao": "MEC", "data": "01/01/2024", "valor": 500.00, "status": "sucesso" },
    { "orgao": "Ministério da Saúde", "data": "03/01/2024", "valor": 750.00, "status": "sucesso" },
    { "orgao": "MEC", "data": "05/01/2024", "valor": 1000.00, "status": "falha", "motivo": "falta de documentação" },
    { "orgao": "Ministério da Educação", "data": "08/01/2024", "valor": 600.00, "status": "sucesso" },
    { "orgao": "Ministério da Saúde", "data": "10/01/2024", "valor": 900.00, "status": "sucesso" },
    { "orgao": "Ministério da Educação", "data": "12/01/2024", "valor": 300.00, "status": "falha", "motivo": "dados inválidos" },
    { "orgao": "Ministério da Saúde", "data": "15/01/2024", "valor": 1200.00, "status": "sucesso" },
    { "orgao": "Ministério da Educação", "data": "15/01/2024", "valor": 600.00, "status": "falha" },
    { "orgao": "MEC", "data": "17/01/2024", "valor": 800.00, "status": "sucesso" },
    { "orgao": "MEC", "data": "17/01/2024", "valor": 500.00, "status": "falha", "motivo": "" },
    { "orgao": "Ministério da Educação", "data": "20/01/2024", "valor": 400.00, "status": "sucesso" },
    { "orgao": "MEC", "data": "22/01/2024", "valor": 1100.00, "status": "falha", "motivo": "falta de verba" },
    { "orgao": "Ministério da Educação", "data": "23/01/2024", "valor": 500.00, "status": "falha", "motivo": "dados inválidos" }
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

//   ------  Historia de usuario 1
// Função para processar e exibir os dados de repasses do governo
function processarRepasses(dados) {
    // Exibir quantidade total de repasses
    console.log(`Total de repasses processados: ${dados.length}`);

//  ----- Historia de Usuario 2
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

//  ----- Historio de Usuario 3
function RepasseMaiorValor(dados) {
    return dados.reduce((maiorRepasso, repasso) => repasso.valor > maiorRepasso.valor ? repasso : maiorRepasso);
}
console.log("Detalhes do repasse com maior valor:", RepasseMaiorValor(dados));

function RepasseMenorValor(dados) {
    return dados.reduce((menorRepasso, repasso) => repasso.valor < menorRepasso.valor ? repasso : menorRepasso);
}
console.log("Detalhes do repasse com menor valor:", RepasseMenorValor(dados));

function DiaMaisRepasses(dados) {
    const repassesPorDia = dados.reduce((acumulador, repasso) => {
        acumulador[repasso.data] = (acumulador[repasso.data] || 0) + 1;
        return acumulador;
    }, {});

    return Object.keys(repassesPorDia).reduce((maxDia, dia) => 
        repassesPorDia[dia] > repassesPorDia[maxDia] ? dia : maxDia
    );
}

console.log("Dia com mais repasses:", DiaMaisRepasses(dados));

function OrgaoMaisRepasses(dados) {
    const repassesPorOrgao = dados.reduce((acumulador, repasso) => {
        acumulador[repasso.orgao] = (acumulador[repasso.orgao] || 0) + 1;
        return acumulador;
    }, {});

    return Object.keys(repassesPorOrgao).reduce((maxOrgao, orgao) => 
        repassesPorOrgao[orgao] > repassesPorOrgao[maxOrgao] ? orgao : maxOrgao
    );
}
console.log("Órgão com mais repasses:", OrgaoMaisRepasses(dados));

function OrgaoMaisRepassesSucesso(dados) {
    const repassesSucessoPorOrgao = dados.reduce((acumulador, repasso) => {
        if (repasso.status === 'sucesso') {
            acumulador[repasso.orgao] = (acumulador[repasso.orgao] || 0) + 1;
        }
        return acumulador;
    }, {});

    return Object.keys(repassesSucessoPorOrgao).reduce((maxOrgao, orgao) => 
        repassesSucessoPorOrgao[orgao] > repassesSucessoPorOrgao[maxOrgao] ? orgao : maxOrgao
    );
}
console.log("Órgão com mais repasses com sucesso:", OrgaoMaisRepassesSucesso(dados));

function OrgaoMaisRepassesFalha(dados) {
    const repassesFalhaPorOrgao = dados.reduce((acumulador, repasso) => {
        if (repasso.status === 'falha') {
            acumulador[repasso.orgao] = (acumulador[repasso.orgao] || 0) + 1;
        }
        return acumulador;
    }, {});

    return Object.keys(repassesFalhaPorOrgao).reduce((maxOrgao, orgao) => 
        repassesFalhaPorOrgao[orgao] > repassesFalhaPorOrgao[maxOrgao] ? orgao : maxOrgao, Object.keys(repassesFalhaPorOrgao)[0]
    );
}
console.log("Órgão com mais repasses falhados:", OrgaoMaisRepassesFalha(dados));

function MotivoFalhaMaisRepasses(dados) {
    const falhasPorMotivo = dados.reduce((acumulador, repasso) => {
        if (repasso.status === 'falha') {
            acumulador[repasso.motivo] = (acumulador[repasso.motivo] || 0) + 1;
        }
        return acumulador;
    }, {});

    return Object.keys(falhasPorMotivo).reduce((maxMotivo, motivo) => 
        falhasPorMotivo[motivo] > falhasPorMotivo[maxMotivo] ? motivo : maxMotivo, Object.keys(falhasPorMotivo)[0]
    );
}
console.log("Motivo de falha com mais repasses:", MotivoFalhaMaisRepasses(dados));

//  ----- Historia de Usuario 5
function TransacoesSemMotivoOrgao(dados) {
    return dados.filter(repasso => repasso.status === 'falha' && (repasso.motivo === undefined || repasso.motivo === ""));
}

// Exibir detalhes das transações com falha e sem motivo
const transacoesSemMotivo = TransacoesSemMotivoOrgao(dados);
console.log("Transações que não foram processadas com sucesso:", transacoesSemMotivo);


//  ----- Historia de usuario 5
const dadosRepassesInvalidos = [
    { "orgao": "MEC", "data": "01/01/2024", "valor": 500.00, "status": "sucesso" },
    { "orgao": "Ministério da Saúde", "data": "03/01/2024", "valor": 750.00, "status": "sucesso" },
    { "orgao": "MEC", "data": "05/01/2024", "valor": 1000.00, "status": "sucesso" },
    { "orgao": "Ministério da Educação", "data": "08/01/2024", "valor": 600.00, "status": "sucesso" },
    { "orgao": "Ministério da Saúde", "data": "10/01/2024", "valor": 900.00, "status": "sucesso" },
    { "orgao": "Ministério da Saúde", "data": "10/01/2024", "valor": 600.00, "status": "falha", "motivo": "" },
    { "orgao": "Ministério da Educação", "data": "12/01/2024", "valor": 300.00, "status": "falha", "motivo": "dados inválidos" },
    { "orgao": "Ministério da Saúde", "data": "15/01/2024", "valor": 1200.00, "status": "sucesso" },
    { "orgao": "Ministério da Saúde", "data": "15/01/2024", "valor": 200.00, "status": "falha", "motivo": "" },
    { "orgao": "MEC", "data": "17/01/2024", "valor": 800.00, "status": "falha", "motivo": "falta de verba" },
    { "orgao": "Ministério da Educação", "data": "20/01/2024", "valor": 400.00, "status": "falha", "motivo": "falta de limite" },
    { "orgao": "MEC", "data": "22/01/2024", "valor": 1100.00, "status": "falha" }
];

function exibirTratamentosErros(dados) {
    const repassesInvalidos = dados.filter(repasso => 
        repasso.status === 'falha' && (!repasso.motivo || repasso.motivo.trim() === '')
    );
    
    console.log("------ Detalhes das transações com FALHA e motivo vazio -------");
    repassesInvalidos.forEach(repasso => {
        console.log(`Órgão: ${repasso.orgao}, Data: ${repasso.data}, Valor: ${repasso.valor}`);
    });
}

// Executa a função com os dados fornecidos
exibirTratamentosErros(dadosRepassesInvalidos);

//   ------  Historia de usuario 6
function AjusteEstatisticas(dados) {
    return dados.filter(repasso => repasso.motivo !== "");
}

const repassesValidos = AjusteEstatisticas(dados);
console.log(`------ O total de Repasses válidos ficou: ${repassesValidos.length}`);
}

// Chamada da função para processar os repasses
processarRepasses(dadosRepasses);
