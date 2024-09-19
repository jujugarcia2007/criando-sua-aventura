const avanca = document.querySelectorALL('.bnt-proximo') ;

avanca.forEach (button => {
button.addEventlistener ('click', function() {
    const atual = document.querySelector ('.ativo') ;
    const proximoPasso = 'passo-' + this.getAttribute('data-proxima');
    
    atual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
})

})