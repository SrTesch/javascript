var a = document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar(){
    a.innerText = 'Clicou!';
    a.style.background = 'red';
}

function entrar() {
    a.innerText = 'Entrou!';
    a.style.borderRadius= '20px';
}

function sair() {
    a.innerText = 'Saiu!';
    a.style.backgroundColor= '#2a8b2a';
    a.style.borderRadius= '0px';
}