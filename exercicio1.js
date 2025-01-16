// # ex1:
// # fazer uma condicional que printa bom dia, boa tarde ou boa noite Sr. ou Sra. $Nome
// # Entrada: $sexo / $nome // Bom dia Sr. Matheus
// # saida: Bom dia Senhor Matheus
// # descoberta: como pegar o horário do dia

$nome = 'Matheus';
$sexo = 'M'; // M ou F;
$cumprimentoHorario = '';


$dataCompleta = new Date();
$hora = $dataCompleta.getHours();

if($hora>=6 && $hora <12 ){
    $cumprimentoHorario = 'Bom dia';
} else if($hora>=12 && $hora <18 ){
    $cumprimentoHorario = 'Boa tarde';
} else{
    $cumprimentoHorario = 'Boa noite';
};

if($sexo == 'M'){
    $sexo = 'Sr.'
} else if($sexo == 'F') {
$sexo = 'Sra.'
} else { 
$sexo = 'Sre.'
}

document.write($cumprimentoHorario + ' ' + $sexo + ' ' + $nome);