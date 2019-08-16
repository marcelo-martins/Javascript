var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    e.preventDefault();//nao eh pro menu subir junto com o scroll de tela
});

exit.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
});

