var input = document.querySelector('.header_input')
var filtro = document.querySelectorAll('.noticia_titulo')
var noticias = document.querySelectorAll('.noticias_container');


input.onkeyup = function() {
    var valorInput = input.value;
    for (var i = 0; i < noticias.length; i++) {
        var conteudoTitulo = filtro[i].innerText;
        var corresponde = conteudoTitulo.toLowerCase().indexOf(valorInput) >= 0;
        noticias[i].style.display = corresponde ? '' : 'none';
    }
};


/* por onde vou pesquisar ? pelo titulo entao ele será meu filtro  classe noticia_titulo


\*/