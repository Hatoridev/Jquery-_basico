$(document).ready(function() {  // Garante que o código só será executado quando o DOM estiver pronto
    $('#menu li').click(function() {  // Quando um item do menu for clicado
        var target = $(this).data('target');  // Obtém o valor do atributo 'data-target'
        $('.section').hide();  // Esconde todas as seções
        $('#' + target).show();  // Mostra a seção correspondente ao item do menu
    });

    $('#commentForm').submit(function(e) {  // Quando o formulário de comentários for enviado
        e.preventDefault();  // Impede o envio padrão do formulário
        var comment = $('#commentInput').val();  // Obtém o valor do campo de comentário
        $('#commentsList').append('<p>' + comment + '</p>');  // Adiciona o comentário à lista
        $('#commentInput').val('');  // Limpa o campo de entrada de texto
    });
});

