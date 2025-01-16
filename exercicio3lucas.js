
$limite = 20;
$de = 0;
$ate = 100;

if(($ate-$de) > $limite){
    $ate = $de + $limite;
}

for ($i = $de; $i <= $ate; $i++) {
    document.write($i);
    document.write('<br>');
}