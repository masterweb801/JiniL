<?php
require "../functions/header.php";
require "../functions/response.php";

if (isset($_SERVER['HTTP_AUTH_TOKEN'])) {
    require('../functions/jende.php');

    $auth = $_SERVER['HTTP_AUTH_TOKEN'];
    $ec = Token::Verify($auth, "JENDE");

    if ($ec !== false) {
        $json = file_get_contents('php://input');
        $data = json_decode($json);

        if ($data !== null) {
            require('../_config.php');

            $id = $data->id;

            $sql = 'SELECT * FROM `Orders` WHERE `id`=' . $id;
            $data = mysqli_query($conn, $sql);
            $total = mysqli_num_rows($data);
            if ($total > 0) {
                $result = mysqli_fetch_assoc($data);
                response(200, "Successful", $result);
            } else {
                response(400, "Something Went Wrong!", null);
            }
        }
    } else {
        response(400, "Invalid User", null);
    }
} else {
    response(400, "Bad Request", null);
}