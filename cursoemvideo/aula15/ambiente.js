let num = [5, 8, 2, 9, 3]
num.push(7) // adiciona um valor no fim do array
num.length //pra mostrar o tamanho
num.sort() // ordena em ordem crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}