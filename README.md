# Monitoramento de Repasses Governamentais

Em uma agência governamental responsável por gerenciar os recursos financeiros destinados a diferentes setores, como educação, saúde e infraestrutura, a equipe financeira enfrenta desafios diários para acompanhar os repasses efetuados pelo governo. Com um volume significativo de transações ocorrendo regularmente, é essencial garantir que os fundos sejam distribuídos corretamente e que não haja erros ou irregularidades nos repasses.

No entanto, o processo manual de monitoramento e análise dos repasses tem se mostrado demorado e propenso a erros. A equipe financeira precisa constantemente revisar grandes conjuntos de dados fornecidos pelo governo, identificar transações relevantes e investigar possíveis problemas ou discrepâncias.

Diante desse cenário, surge a necessidade de um sistema automatizado que possa receber os dados dos repasses do governo, analisá-los e apresentar informações relevantes de forma clara e acessível para a equipe financeira. Esse sistema permitirá que os membros da equipe acompanhem os repasses de forma mais eficiente, identifiquem padrões e tendências, e tomem decisões informadas para garantir a correta alocação dos recursos.

Assim, a sua equipe ficou responsável de implementar o monitorador de repasses governamentais para atender às necessidades da equipe financeira, fornecendo uma ferramenta poderosa para analisar e gerenciar os repasses do governo de maneira eficaz e eficiente.

## Atividades

### História de Usuário 1: Recebimento e Exibição de Dados do Governo

- **Descrição:** Como membro da equipe financeira, desejo receber e exibir os dados dos repasses do governo, para acompanhar as transações efetuadas.
- **Critérios de aceitação:**
  1. A quantidade total de repasses no arquivo deverá ser exibida no console.
     - **Exemplo:**
       ```plaintext
       Total de repasses processados: 30
       ```

### História de Usuário 2: Análise de Transações por Status

- **Descrição:** Como membro da equipe financeira, desejo analisar as transações para compreender os repasses efetuados pelo governo.
- **Critérios de aceitação:**
  1. O sistema deverá exibir um resumo dos repasses bem sucedidos. Esse resumo deve ter as seguintes informações:
     - Quantidade total de repasses bem sucedidos
     - Quantidade total de repasses bem sucedidos por órgão
     - Valor total de repasses bem sucedidos
     - Valor total de repasses bem sucedidos por órgão
  2. O sistema deverá exibir um resumo dos repasses com falha. Esse resumo deve ter as seguintes informações:
     - Quantidade total de repasses com falha
     - Quantidade total de repasses com falha por órgão
     - Quantidade total de repasses com falha por motivo
     - Valor total de repasses com falha
     - Valor total de repasses com falha por órgão
     - Valor total de repasses com falha por motivo

### História de Usuário 3: Estatísticas de Repasses por Critérios

- **Descrição:** Como membro da equipe financeira, desejo analisar as transações para compreender os repasses efetuados pelo governo.
- **Critérios de aceitação:**
  1. O sistema deverá exibir os seguintes repasses:
     - Detalhes do repasse com maior valor
     - Detalhes do repasse com menor valor
     - Dia com mais repasses
     - Órgão com mais repasses
     - Órgão com mais repasses com sucesso
     - Órgão com mais repasses falhados
     - Motivo de falha com mais repasses

### História de Usuário 4: Apresentação Automática de Detalhes de Transações

- **Descrição:** Como membro da equipe financeira, desejo analisar detalhadamente as transações de repasses efetuados por um determinado órgão que eu irei definir antes de começar o processamento do arquivo.
- **Critérios de aceitação:**
  1. O sistema deve ser capaz de identificar automaticamente transações que atendam ao critério de órgão responsável.
  2. Os resultados da busca devem ser exibidos no console de forma organizada, apresentando todos os detalhes das transações encontradas.
  3. A busca por transações deve ser realizada pelo sistema automaticamente, sem a necessidade de interação do usuário.

# PLOT TWIST!

Um revés inesperado abala a rotina da equipe financeira quando começam a surgir transações inválidas nos dados fornecidos pelo sistema do governo. Algumas dessas transações são marcadas como "FALHA", mas sem qualquer explicação no campo "MOTIVO DA FALHA".

A descoberta desse problema coloca a equipe em alerta, levantando questionamentos sobre a confiabilidade dos dados e a integridade do sistema governamental. A necessidade de uma investigação rápida e eficaz se torna evidente, pois o impacto dessas transações potencialmente incorretas nas finanças do setor é uma preocupação imediata.

Com a pressão aumentando, a equipe se mobiliza para entender a origem dessas transações fantasmas e encontrar uma solução para corrigir o problema. Enquanto buscam respostas, enfrentam desafios técnicos e logísticos, mas estão determinados a restaurar a normalidade e garantir a precisão dos dados financeiros.

### História de Usuário 5: Tratamento de Erros

- **Descrição:** Como membro da equipe financeira, desejo saber se houve algum problema no processamento das transações. É considerado um problema no processamento quando uma transação tem o status "FALHA" mas não tem um valor no campo "MOTIVO DA FALHA".
- **Critérios de aceitação:**
  1. O sistema deverá exibir detalhes das transações que não foram processadas com sucesso.

### História de Usuário 6: Ajustes nas Estatísticas

- **Descrição:** Todas as outras estatísticas implementadas nas histórias anteriores não deverão levar em consideração as transações inválidas.
- **Critérios de aceitação:**
  1. O sistema não deverá levar em consideração as transações inválidas para efetuar os cálculos anteriormente realizados.
