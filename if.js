// document.write('escreveu html');
// console.log('escreveu no console');


// if - condicional pra tomar decisao

//for - contador

//while - contador (enquanto)

// vc está na portaria da balada e precisa verificar idade do usuario, se for 18+ entra, se for 16>= <18
//  - verifica se esta com acompanhante, se for menor de 17, bloqueia entrada.


$idade = 16;
// $acompanhante = false;
$idadeAcompanhante = null;
$nome = "Matheus";

if ($idade >= 18) {
    document.write('Entrada liberada');
}
else if ($idade >= 16) {
    document.write('Está acompanhado? Verificando...');
    if ($idadeAcompanhante == null) {
        document.write('Não está acompanhado');
    } 
    else{
        if ($idadeAcompanhante >= 18) {
            document.write('Está acompanhado! Bem vindo!...');

        }
        else {
            document.write('Está acompanhado de outro menor, ai vc me quebra!');

        }
    }
}
else {
    document.write('Entrada bloqueada');
}