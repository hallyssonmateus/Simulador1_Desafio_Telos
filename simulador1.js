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

// Função para processar e exibir os dados de repasses do governo
function processarRepasses(dados) {
    // Exibir quantidade total de repasses
    console.log(`Total de repasses processados: ${dados.length}`);

    // Aqui você pode adicionar mais lógica para processar ou exibir outros dados conforme necessário
}

// Chamada da função para processar os repasses
processarRepasses(dadosRepasses);
