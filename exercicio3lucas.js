$inicio = 0;
$fim = 100;
$limite = 20;
$i = $inicio;

while($i <= $fim){
    if($limite < $fim){
        $fim = $limite;
    }
        document.write($i + "</br>");
        $i++;
}