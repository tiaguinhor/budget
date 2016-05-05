<?php
$headers = "MIME-Version: 1.1".PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8".PHP_EOL;
$headers .= "From: ".$_GET['email'].PHP_EOL; // remetente
$headers .= "Return-Path: ".$_GET['email'].PHP_EOL; // return-path

$texto = 'Virtual Budget'.PHP_EOL.PHP_EOL;
$texto .= 'Estimate: '.number_format($_GET['totalValue'], 2, ',', '.').PHP_EOL;
$texto .= 'Days: '.$_GET['totalDays'].PHP_EOL;

$texto .= PHP_EOL.'*User: '.PHP_EOL;
foreach(json_decode($_GET['user']) as $key => $user):
	$texto .= ucwords(strtolower($key)).": {$user}".PHP_EOL;
endforeach;

$texto .= PHP_EOL.'*Values: '.PHP_EOL;
foreach(json_decode($_GET['values']) as $value):
	$value = explode('-', $value);
	$texto .= strtoupper($value[0]).': '.number_format($value[1], 2, ',', '.').PHP_EOL;
endforeach;

$texto .= PHP_EOL.'*Extras: '.PHP_EOL;
foreach(json_decode($_GET['extras']) as $extra):
	$extra = explode('-', $extra);
	$texto .= strtoupper($extra[0]).': '.number_format($extra[1], 2, ',', '.').PHP_EOL;
endforeach;

$texto .= PHP_EOL.'*Pages: '.PHP_EOL;
foreach(json_decode($_GET['pages']) as $pages):
	$texto .= '-----------------'.PHP_EOL;

	foreach($pages as $key => $page):
		switch($key){
			case 'description':
			case 'title':
				$response = ucwords(strtolower($key)).": {$page}";
				break;
			case 'type':
				$page = explode('-', $page);
				$response = "Type: {$page[0]}".PHP_EOL."Value: ".number_format($page[1], 2, ',', '.');
				break;
			default:
				$response = '';
				break;
		}
		$texto .= $response.PHP_EOL;
	endforeach;
endforeach;

$envio = mail($_GET['emailOrigin'], "Virtual Budget", $texto, $headers);

if($envio)
	echo $_GET['success'];
else
	echo $_GET['error'];