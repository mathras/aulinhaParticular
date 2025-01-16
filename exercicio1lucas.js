$sexo = 'M';
$nome = 'lucas';
$horario = new Date();
$mensagem = '';
$horas = $horario.getHours(); 

if ($horas >= 6 && $horas < 12) {
    $mensagem = 'Bom dia';
} else if ($horas < 18) {
    $mensagem = 'Boa tarde';
} else {
    $mensagem = 'Boa noite';
}

if ($sexo == 'M') {
    $sexo = 'Sr.';
} else if ($sexo == 'F') {
    $sexo = 'Sra.';
} else {
    $sexo = 'Sre.';
}

document.write($mensagem + ' ' + $sexo + ' ' + $nome);
