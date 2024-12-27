$(document).ready(function() {  // Garante que o código só será executado quando o DOM estiver pronto
    $('#btnShow').click(function() {  // Quando o botão 'Mostrar Caixa' for clicado
        $('#caixa').fadeIn();  // Animação para mostrar a caixa (fade-in)
    });

    $('#btnHide').click(function() {  // Quando o botão 'Esconder Caixa' for clicado
        $('#caixa').fadeOut();  // Animação para esconder a caixa (fade-out)
    });

    $('#btnMove').click(function() {  // Quando o botão 'Mover Caixa' for clicado
        $('#caixa').animate({  // Inicia a animação
            left: '+=100px',  // Mover a caixa para a direita
            top: '+=50px'     // Mover a caixa para baixo
        });
    });
});

