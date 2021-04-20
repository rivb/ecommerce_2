<?php
/**
 * Clase para Configurar el cliente
 * @Filename: Config.class.php
 * @version: 2.0
 * @Author: flow.cl
 * @Email: csepulveda@tuxpan.com
 * @Date: 28-04-2017 11:32
 * @Last Modified by: Carlos Sepulveda
 * @Last Modified time: 28-04-2017 11:32
 */
 
 $COMMERCE_CONFIG = array(
 	"APIKEY" => "1FA88251-778C-483F-A5A0-7D30C58LAB26", // Registre aquí su apiKey
 	"SECRETKEY" => "c6c3f8517bd3ced4460ad5313761c8650c6cc7c4", // Registre aquí su secretKey
 	"APIURL" => "https://sandbox.flow.cl/api", // Producción EndPoint o Sandbox EndPoint
 	"BASEURL" => "https://www.diezrios.cl/apiFlow" //Registre aquí la URL base en su página donde instalará el cliente
 );
 
 class Config {
 	
	static function get($name) {
		global $COMMERCE_CONFIG;
		if(!isset($COMMERCE_CONFIG[$name])) {
			throw new Exception("The configuration element thas not exist", 1);
		}
		return $COMMERCE_CONFIG[$name];
	}
 }