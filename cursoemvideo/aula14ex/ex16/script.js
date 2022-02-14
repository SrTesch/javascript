function tabuada(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('contagem')
    ini = Number(ini.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    if(ini.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        if(passo <=0){
            alert('Passo inválidoo! Considerando PASSO 1')
            passo = 1
        }
        if(ini < fim){
            for(let x = ini; x<= fim; x += passo){
                res.innerHTML += `\u{1F449} ${x} `
            }
        }else{
            for(let x = ini; x >= fim; x -= passo){
                res.innerHTML += `\u{1F449} ${x} `
            }  
        }
    res.innerHTML += '\u{1F60B}'
    }
}