<?php
    
$name = trim ($_POST ['name']);

if ($name == '') {
    echo 'You must input name!';
}else{
    file_put_contents ('hw11js6.txt', "$name \n", FILE_APPEND);
    echo '1';
}