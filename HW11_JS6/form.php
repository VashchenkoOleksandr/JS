<?php
$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);
$name = trim($data['name']);
if ($name == '') {
    echo 'You must input name!';
} else {
    file_put_contents('hw11js6.txt', "$name \n", FILE_APPEND);
    echo '1';
}