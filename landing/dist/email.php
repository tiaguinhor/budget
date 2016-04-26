<?php
$headers = "MIME-Version: 1.1".PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8".PHP_EOL;
$headers .= "From: ".$_GET['email'].PHP_EOL; // remetente
$headers .= "Return-Path: ".$_GET['email'].PHP_EOL; // return-path
$texto = 'Virtual Budget'.PHP_EOL.PHP_EOL;
$texto .= 'Estimate: '.$_GET['totalValue'].PHP_EOL;
$texto .= 'Days: '.$_GET['totalDays'].PHP_EOL;

$texto .= PHP_EOL.'Values: '.PHP_EOL;
foreach(json_decode($_GET['values']) as $value){
    $texto .= $value.PHP_EOL;
}

$texto .= PHP_EOL.'Other: '.PHP_EOL;
foreach(json_decode($_GET['other']) as $another){
    $texto .= $another.PHP_EOL;
}

$texto .= PHP_EOL.'User: '.PHP_EOL;
foreach(json_decode($_GET['user']) as $user){
    $texto .= $user.PHP_EOL;
}

$envio = mail("tiaguinhor@gmail.com", "Virtual Budget", $texto, $headers);

if($envio)
    echo "Email successfully sent!";
else
    echo "Something went wrong, try again later or contact me directly by email <strong>tiaguinhor [at] gmail [.] com</strong>... Thank you!";