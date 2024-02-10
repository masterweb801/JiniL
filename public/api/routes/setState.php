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
            $state = $data->state;

            $sql = 'SELECT `stc` FROM `Orders` WHERE `id`="' . $id . '"';
            $data = mysqli_query($conn, $sql);
            $total = mysqli_num_rows($data);

            if ($total > 0) {
                if ($state == 100) {
                    $sql2 = 'UPDATE `Orders` SET `status`="checking", `stc`=' . $state . ' WHERE `id`=' . $id;
                    mysqli_query($conn, $sql2);
                    response(200, "Successfull", true);
                } else {
                    $sql2 = 'UPDATE `Orders` SET `stc`=' . $state . ' WHERE `id`=' . $id;
                    mysqli_query($conn, $sql2);
                    response(200, "Successfull", true);
                }
            } else {
                response(400, "Invalid User", null);
            }

        } else {
            response(400, "Invalid User", null);
        }

    } else {
        response(400, "Invalid User", null);
    }
} else {
    response(400, "Bad Request", null);
}