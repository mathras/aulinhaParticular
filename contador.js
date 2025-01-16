// for

// for($inicio;$enquanto;$oQueFazeNoLoop)
$de = 40;
$ate = 100;

if(($ate-$de) > 20){
    $ate = $de + 20;
}

for ($i = $de; $i <= $ate; $i++) {
    document.write($i);
    document.write('<br>');
}