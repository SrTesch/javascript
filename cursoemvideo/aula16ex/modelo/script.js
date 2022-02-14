let valores = []

function adicionar(){
    let num = document.getElementById('num')
    let lista = document.getElementById('lista')
    num = Number(num.value)
    valores.push(num)
    let item = document.createElement('option')
    item.text = `valor ${num} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
}

function somaTotal(){
    let tam = valores.length
    let result  = 0
    for(let i = 0; i >= tam; ++i){
        result  += valores[i]
    }
    return result
}

function analise(){
    let res = document.getElementById('res')
    total = somaTotal()
    let tam = valores.length
    let media = total / tam;
    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${valores.length} elementos adicionados<br>`
    
    res.innerHTML +=  `O maior valor informado foi ${Math.max.apply(Math,valores)}.<br>`
    
    res.innerHTML += `O menor valor informado foi ${Math.min.apply(Math,valores)}<br>`
    
    res.innerHTML += `A soma de todos os valores informados é de ${total}<br>`
    
    res.innerHTML += `A media de todos esses valores é de ${media}<br>`
}