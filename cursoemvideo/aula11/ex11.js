function verif(){
    var pais1 = document.querySelector('input#txt')
    var res = document.querySelector('div#res')
    if(pais1.value == 'Brasil'){
        res.innerHTML = 'Então você é brasileiro!!'
    }else{
        res.innerHTML = `Então você, aqui no Brasil, é estrangeiro`
    }
    }