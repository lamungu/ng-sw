<?php
header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once(__DIR__ . '/Helpers/Validation.php');
require_once(__DIR__ . '/Helpers/Utils.php');

$validation = new \Helpers\Validation();
$utils = new \Helpers\Utils();
$uri = $utils->parseUrl();

if( $validation->isValidRequest($uri[1])) {
	require_once(__DIR__ . '/Helpers/Curl.php');
	
	$curl = new \Helpers\Curl();
	$curl->setOptions();
	$endpoint = $utils->formatSwapiEndpoint($uri[1]);
	$curl->setEndpoint($endpoint);
	$curl->setSearch($uri[2]);
	$curl->buildApiPath();
	$curl->get();
	$response = $curl->getResponse();
	$arrResult = json_decode($response, true);
	
	echo json_encode($arrResult['results']);
}
else {
	echo json_encode($validation->getErrorMessage());
}
