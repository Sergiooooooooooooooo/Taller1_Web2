let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = numbers.filter(function(numero){
    return numero %2 === 0
}) 
console.log("Numeros pares: ", numerosPares)

let numerosMultiplicados = numerosPares.map(function(numeros){
    return numeros * 2
})
console.log("Multiplicados por 2: ",numerosMultiplicados)