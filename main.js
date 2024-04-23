$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#btn_cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoImagemNova = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
        $(
            `
            <div class="overlay-imagem-link">
                <a href="${enderecoImagemNova}" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `
        ).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(2000);
        $('#endereco-imagem-nova').val('');
    })
})