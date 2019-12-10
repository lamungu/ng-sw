<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

// all of our endpoints start with /person
// everything else results in a 404 Not Found
if (!in_array($uri[1], array('characters', 'starships', 'planets'))) {
	echo json_encode(array('error' => 'Endpoint does not exist'));
    header("HTTP/1.1 404 Not Found");
    exit();
}

// search parameter
$search = '';
if (isset($uri[2])) {
    $search = $uri[2];
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

if( $requestMethod !== 'GET') {
	echo json_encode(array('error' => 'Endpoint does not exist'));
	header("HTTP/1.1 404 Not Found");
    exit();
}

fetchData($uri[1], $search);

function fetchData($path, $search) {
	$swapiPath = '';
	
	switch($path) {
		case 'characters':
			$swapiPath = 'people';
			break;
		case 'planets':
			$swapiPath = 'planets';
			break;
		case 'starships':
			$swapiPath = 'starships';
			break;
	}
	
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL, "https://swapi.co/api/". $swapiPath. '/?search='. $search);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 15);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);

	$result = curl_exec($ch);
	$arrResult = json_decode($result, true);
	
	echo json_encode($arrResult['results']);
}
