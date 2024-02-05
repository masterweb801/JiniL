<?php
require "../functions/header.php";
require "../functions/response.php";

$json = file_get_contents('php://input');
$data = json_decode($json);
if ($data !== null) {
    require('../_config.php');
    require('../functions/jende.php');
    $email = $data->email;
    $password = $data->password;

    $sql = 'SELECT `ec`, `password` FROM `employee` WHERE `email`="' . $email . '"';
    $data = mysqli_query($conn, $sql);
    $total = mysqli_num_rows($data);
    if ($total > 0) {
        $result = mysqli_fetch_assoc($data);
        if ($result['password'] === md5($password)) {
            $token = Token::Sign($result['ec'], "JENDE");
            response(200, "Succesfull", $token);
        } else {
            response(400, "Invalid Credentials", null);
        }
    } else {
        response(400, "Invalid Credentials", null);
    }

} else {
    response(400, "Bad Request", null);
}