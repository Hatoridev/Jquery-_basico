-- Criação da tabela "contatos" para armazenar os dados do formulário
CREATE TABLE IF NOT EXISTS contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- ID único para cada contato
    nome TEXT NOT NULL,                   -- Nome do contato
    email TEXT NOT NULL,                  -- Email do contato
    mensagem TEXT NOT NULL,               -- Mensagem enviada pelo contato
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Data e hora do registro
);

-- Inserção de dados fictícios (opcional)
INSERT INTO contatos (nome, email, mensagem) VALUES
('Exemplo 1', 'exemplo1@email.com', 'Mensagem de teste 1'),
('Exemplo 2', 'exemplo2@email.com', 'Mensagem de teste 2');

