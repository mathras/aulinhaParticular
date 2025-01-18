let vogais = ['a', 'e', 'i', 'o', 'u']; 
let vogaisAchadas = []; 
let quantidadeVogais = 0; 
let frase = "Hello world"; 

for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i].toLowerCase())) { 
        vogaisAchadas.push(frase[i]);
        quantidadeVogais++;
    }
}

document.write("A quantidade de vogais encontradas é " + quantidadeVogais + ". As vogais encontradas foram: " + vogaisAchadas.join(", ") + ".");
