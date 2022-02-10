var agora = new Date()
var hora = agora.getHours()
var mins = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${mins}.`)
if(hora <5){
    console.log('Boa madrugada!')
}else if (hora < 12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}