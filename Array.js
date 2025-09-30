let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

console.log("Terceiro nome:", nomes[2]);

nomes.push("Fernanda");       // Adiciona ao final
nomes.unshift("Gabriel");     // Adiciona ao início


nomes.pop();                  // Remove o último
console.log("Array atualizado:", nomes);

let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Valores dobrados:", dobrados);

let lista = [1, 3, 5, 7, 9];
let maioresQueCinco = lista.filter(num => num > 5);
console.log("Números maiores que 5:", maioresQueCinco);
