function verficar() {
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.querySelector('input#nasc')
    let res = document.querySelector('div#res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(nasc.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'images/babyboy.png')
            }else if (idade < 18){
                img.setAttribute('src', 'images/teenboy.png')
            }else if (idade <26){
                img.setAttribute('src', 'images/youngman.png')
            }else if(idade < 50){
                img.setAttribute('src', 'images/adultman.png')
            }else{
                img.setAttribute('src', 'images/oldman.png')
            }
        }else {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'images/babygirl.png')
            }else if (idade < 18){
                img.setAttribute('src', 'images/teengirl.png')
            }else if (idade <26){
                img.setAttribute('src', 'images/youngwoman.png')
            }else if(idade < 50){
                img.setAttribute('src', 'images/adultwoman.png')
            }else{
                img.setAttribute('src', 'images/oldwoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}