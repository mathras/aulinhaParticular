let numero = 100;
let soma = 0;

for (i = 1; i <= numero; i++){
    if (i % 2 !== 0) {
        soma += i;
    }
}

document.write("A soma dos números ímpares até " + numero + " é igual a " + soma );