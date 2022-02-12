function calcular(){
var txtv = document.querySelector('input#txtvel')
var res = document.querySelector('div#res')
var vel = Number(txtv.value)
res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`
if(vel > 60){
    res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade pois o limite é de 60km/h</p>`
}
res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}