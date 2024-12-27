$(document).ready(function() {  // Garante que o código só será executado quando o DOM estiver pronto
    $('#btnAdd').click(function() {  // Quando o botão 'Adicionar Item' for clicado
        $('#lista').append('<li>Item adicionado</li>');  // Adiciona um novo item na lista
    });

    $('#btnRemove').click(function() {  // Quando o botão 'Remover Item' for clicado
        $('#lista li:last').remove();  // Remove o último item da lista
    });
});

