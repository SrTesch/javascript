function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let mins = data.getMinutes()
    let cump = document.querySelector('div#cump')
    msg.innerHTML = `${hora} horas e ${mins} minutos!<br>`
    if (hora < 12){
        //bomdia
        img.src = 'images/manha.png'
        document.body.style.background = '#e2cd9f'
        cump.innerHTML = '<strong>BOM DIA!</strong>'
    }else if(hora<18){
        //boa tarde
        img.src = 'images/tarde.png'
        document.body.style.background = '#b9846f'
        cump.innerHTML = '<strong>BOA TARDE!</strong>'
    }else{
        //boa noite
        img.src = 'images/noite.png'
        document.body.style.background = '#515154'
        cump.innerHTML = '<strong>BOA NOITE!</strong>'
    }
}