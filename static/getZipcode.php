<?php
header('Access-Control-Allow-Origin: *');
/**
 * @author      PhpStorm version 4 and 5
 * @author: odette.simons@bisonline.com
 * @date: 10/25/2018
 * @time: 10:42 AM
 * @copyright 2018 Business Information Systems
 * @project:
 * @link:
 * @description:
 * @deprecated: No
 */


function getZipCodeInfo($city, $state)
{
	//ind APi document it is turend around first naicid then vin number
	$APIlink = 'www.zipcodeapi.com/rest/HtrFuIlesbl1A81SQzUmWteR2ow6LOr27opX2BsvuXVT7EvaVoCnho4ca8xeCaN9/city-zips.json/'.$city.'/'.$state;

	// create a new cURL resource

	$header = array();
	$header[] = 'Content-length: 0';
	$header[] = 'Content-type: application/json';

	$ch = curl_init();
	// Set the necessary parameters
	curl_setopt($ch, CURLOPT_URL, $APIlink);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,  0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");

	$return=curl_exec($ch);

	// Check if any error occurred
	if (curl_errno($ch)) {
		$info = curl_getinfo($ch);
		var_dump($info);
		die();
	}
	$info = curl_getinfo($ch);
	curl_close($ch);


	return $return;
}

$zipcodes = getZipCodeInfo($_REQUEST['city'], $_REQUEST['state']);

echo json_encode($zipcodes);