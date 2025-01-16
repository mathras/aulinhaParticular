$inicio = 0;
$fim = 40;

for ($i = $inicio; $i <= $fim; $i++) {
    $contagem = '';
    if ($i % 5 === 0) {
        $contagem = 'pamonha';
    } else if ($i % 3 === 0) {
        $contagem = 'pam';
    } else if ($i % 7 === 0) {
        $contagem = 'onha';
    } else {
        $contagem = $i;
    }

    document.write($contagem + "</br>");

}