<?php
header("Content-Type:application/json");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST");
header('Access-Control-Max-Age: 1000');
header("Access-Control-Allow-Headers: X-API-KEY, X-Auth-Token, Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Allow-Origin, auth-token");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");