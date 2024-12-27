$(document).ready(function() { // Garante que o código só seja executado quando o DOM estiver pronto
    // Quando um item de menu for clicado
    $('#menu li').click(function() {
        var target = $(this).data('target');  // Obtém o valor do atributo data-target do item clicado
        $('.section').hide();  // Esconde todas as seções
        $('#' + target).show();  // Exibe a seção correspondente ao item clicado
    });

    // Quando o formulário de contato for enviado
    $('#contactForm').submit(function(e) {
        e.preventDefault();  // Impede o envio padrão do formulário

        var name = $('#name').val();  // Obtém o valor do campo "nome"
        var email = $('#email').val();  // Obtém o valor do campo "email"
        var message = $('#message').val();  // Obtém o valor do campo "mensagem"

        // Envia os dados para o arquivo PHP via AJAX
        $.ajax({
            type: 'POST',
            url: 'processar_formulario.php',  // Arquivo PHP que processará os dados
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function(response) {
                $('#contactResult').html('<h3>Informações Recebidas</h3><p>' + response + '</p>');  // Exibe mensagem de sucesso
            }
        });

        // Limpa os campos do formulário após o envio
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });
});

