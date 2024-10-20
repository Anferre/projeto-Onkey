Bem-vindo

OnKey é uma plataforma para gerenciamento de associações de moradores que utiliza a tecnologia Blockchain para realizar registros imobiliários de forma segura e eficiente. Ela também visa a desburocratização e a falta de transparência na gestão da comunidade simplificando a vida dos moradores.

Nossa Missão

Capacitar comunidades através de uma plataforma segura e confiável, facilitando o registro e a gestão de dados.




Com a OnKey, os moradores podem:
Acessar documentos importantes a qualquer hora e lugar.
Participar das decisões da comunidade através de votações online.
Receber notificações sobre eventos e serviços da associação.

Como Funciona?

Uma tabela hash é uma estrutura de dados que você pode usar para armazenar dados no formato chave-valor com acesso direto aos seus itens em tempo constante.
As tabelas de hash são ditas  associativas , o que significa que para cada chave, os dados ocorrem no máximo uma vez. As tabelas de hash nos permitem implementar coisas como listas telefônicas ou dicionários; nelas, armazenamos a associação entre um valor (como uma definição de dicionário da palavra "lamp") e sua chave (a própria palavra "lamp").
Podemos usar tabelas de hash para armazenar, recuperar e excluir dados exclusivamente com base em sua  chave exclusiva .






Utilizando um "hash" para identificação de casas em favelas e como representá-lo em uma tabela. A ideia central é usar características da localização da casa para gerar um identificador único, mesmo na ausência de endereços formais.
Esquema Conceitual:



Características da Localização: Selecione características que identificam unicamente uma casa dentro da favela. Exemplos:

Beco/Vila: Nome ou número do beco ou vila.
Ponto de Referência: Nome de um estabelecimento conhecido, igreja, praça, etc.
Número da Casa (Relativo): Número da casa em relação ao início do beco ou a um ponto de referência. (Ex: 3ª casa à esquerda após o bar do Zé).
Características Físicas: Cor da casa, material de construção (se distintivo). Usar com cautela, pois pode mudar.
Coordenadas GPS (Opcional): Se disponível, oferece maior precisão.

Codificação das Características: Converta as características em valores numéricos ou alfanuméricos. Exemplos:
Beco/Vila: "Beco da Paz" -> BP
Ponto de Referência: "Bar do Zé" -> BZ
Número da Casa (Relativo): 3ª casa -> 03
Características Físicas: Casa Azul -> AZ

Função Hash: Combine os valores codificados usando uma função hash. Uma função hash simples poderia ser a concatenação:
BP-BZ-03-AZ -> BPB 03AZ
Tabela: Organize as informações em uma tabela:








Adaptando o Modelo de Hash Table para Casas

  


A imagem apresenta um modelo básico de tabela hash, onde:
Chaves: São os elementos que queremos armazenar (nomes, no caso do exemplo).
Função Hash: Uma função que transforma essas chaves em índices numéricos para o armazenamento.
Armazenamento: Um array onde os valores associados às chaves são armazenados, indexados pelos resultados da função hash.

Adaptando para Casas:
Vamos adaptar esse modelo para armazenar informações sobre casas. Em vez de nomes, as chaves serão identificadores únicos para cada casa, como um número de cadastro. Os valores associados podem ser informações como endereço, número de quartos, tamanho, etc.



Exemplo:
Chaves:
Número de cadastro da casa (um número único)
Valores:
Endereço completo
Número de quartos
Tamanho em metros quadrados
Valor do imóvel
Data de construção
Função Hash:
Poderia ser uma função que soma os dígitos do número de cadastro e aplica um módulo para obter um índice dentro do array de armazenamento.
Tabela Hash Visual:
Legenda:
Número da Casa: A chave que será usada para encontrar as informações da casa.
Informações da Casa: O valor associado à chave (endereço, número de quartos, etc.).
Índice: A posição no array onde as informações da casa são armazenadas.















Oferecemos uma ”Base de Apoio”



A regularização fundiária, em termos gerais, é o processo que inclui medidas jurídicas, urbanísticas, ambientais e sociais, com a finalidade de integrar assentamentos irregulares ao contexto legal das cidades.
Os assentamentos apresentam normalmente dois tipos de irregularidade fundiária:
A. Irregularidade dominial, quando o possuidor ocupa uma terra pública ou privada, sem qualquer título que lhe dê garantia jurídica sobre essa posse;
B. Urbanística e ambiental, quando o parcelamento não está de acordo com a legislação urbanística e ambiental e não foi devidamente licenciado.

    • Gestão automatizada: Ferramentas intuitivas para gerenciar informações e serviços comunitários.

    •  Suporte abrangente para as necessidades dos associados, desde registros até comunicação.

    • Tecnologia de ponta: Utilizamos Blockchain para garantir segurança e transparência nos registros.
Regularizar assentamentos urbanos

Visa promover a regularização fundiária de comunidades que ocupam áreas urbanas de forma irregular, garantindo segurança jurídica e acesso a serviços públicos para essas famílias.

Quando se trata de assentamentos de população de baixa renda, são necessárias também medidas sociais, de forma a buscar a inserção plena das pessoas à cidade. Lei nº 11.977/2009.



Considerações:
Colisões: A função hash deve minimizar colisões (duas hashes iguais para casas diferentes). Se houver colisões, adicione mais características distintivas.
Manutenção: O sistema precisa ser atualizado se as características das casas mudarem.
Comunidade: A participação da comunidade é essencial para definir as características e manter o sistema.
Privacidade: Evite informações sensíveis no Hash ID.

Benefícios da Plataforma OnKey
1. Aumento da Eficiência Operacional
Automação de Processos: A plataforma DOnKey integra fluxos de trabalho automatizados, acelerando a prestação de serviços e reduzindo o tempo de resposta.
Sistemas de Pagamento Integrados: Através de ferramentas nativas, é possível realizar e gerenciar transações financeiras de forma rápida e segura, garantindo a otimização no fluxo de pagamentos.
2. Redução de Custos e Burocracia
Digitalização de Documentos: Eliminação de papéis e processos manuais, substituindo-os por processos digitais que reduzem a necessidade de recursos físicos e simplificam o gerenciamento de registros.
Eficiência de Recursos: A automação permite uma melhor alocação de recursos humanos e financeiros, impactando diretamente na gestão eficiente e sustentável das operações comunitárias.
3. Transparência e Engajamento
Incentivo à Participação Ativa: Ferramentas colaborativas que promovem a participação direta de moradores, proprietários e associados em decisões comunitárias e eventos.
Gestão Transparente: Acesso centralizado e seguro a informações financeiras e operacionais, promovendo uma comunicação clara e acessível a todos os membros.




Funcionamento da Plataforma
1. Gestão Automatizada de Dados
Organização de Informações: Todos os dados são gerenciados de forma centralizada e automatizada, facilitando a atualização, consulta e distribuição de informações críticas.
2. Registro Imobiliário com Blockchain
Imutabilidade e Segurança: O registro de propriedades e ativos é realizado utilizando a tecnologia Blockchain, garantindo a integridade e a inviolabilidade dos dados, além de proporcionar um histórico transparente de todas as transações e modificações.
Participe da Revolução OnKey
Capacite sua comunidade com uma plataforma que oferece eficiência operacional, transparência total e segurança de ponta a ponta. Junte-se à OnKey e transforme a forma como as comunidades são gerenciadas.
Contato
Site: www.apponkey.xyz
Email: contato@onkey.com

Referências:
*******






















