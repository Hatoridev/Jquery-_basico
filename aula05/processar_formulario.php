<?php
// Nome do banco de dados SQLite
$dbFile = 'contatos.db';

// Verifica se o banco de dados existe
if (!file_exists($dbFile)) {
    die('O banco de dados "contatos.db" não foi encontrado. Certifique-se de criá-lo usando o arquivo banco_de_dados.sql.');
}

// Conecta ao banco de dados SQLite
$db = new PDO('sqlite:' . $dbFile);

// Recebe os dados do formulário via POST
$name = $_POST['name'];  // Nome
$email = $_POST['email'];  // Email
$message = $_POST['message'];  // Mensagem

// Prepara a consulta para inserir os dados na tabela
$stmt = $db->prepare("INSERT INTO contatos (nome, email, mensagem) VALUES (:name, :email, :message)");

// Bind dos parâmetros para evitar SQL injection
$stmt->bindParam(':name', $name);  // Associa o valor do nome
$stmt->bindParam(':email', $email);  // Associa o valor do email
$stmt->bindParam(':message', $message);  // Associa o valor da mensagem

// Executa a consulta
if ($stmt->execute()) {
    // Mensagem de sucesso
    echo "Obrigado por entrar em contato, suas informações foram recebidas!";
} else {
    // Mensagem de erro
    echo "Erro ao enviar as informações. Tente novamente.";
}
?>

