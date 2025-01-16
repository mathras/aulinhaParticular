$inicio = 0;
$fim = 40;

for ($i = $inicio; $i <= $fim; $i++) {
    $contagem = '';
if ($i % 5 === 0) {
    $contagem = 'pamonha';
}
if ($i % 3 === 0) {
    $contagem = 'pam';
}
if ($i % 7 === 0) {
    $contagem = 'onha';
}

if ($contagem === '') {
    $contagem = $i;
}

document.write($contagem + "</br>");

}