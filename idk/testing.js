function calc(){
    let ida1 = document.querySelector('input#id1')
    let ida2 = document.querySelector('input#id2')
    let res = document.querySelector('div.result')
    let idade1 = Number(ida1.value)
    let idade2 = Number(ida2.value)
    let media = (idade1 + idade2)/2
    res.innerHTML = `<p>A média de idade entre essas duas pessoas é de <strong>${media} anos!</strong></p>`
}