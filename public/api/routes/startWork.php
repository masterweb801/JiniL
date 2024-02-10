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

            $sql = 'SELECT `category` FROM `Employee` WHERE `ec`="' . $ec . '"';
            $data = mysqli_query($conn, $sql);
            $total = mysqli_num_rows($data);

            if ($total > 0) {
                $result = mysqli_fetch_assoc($data);
                $sql2 = 'UPDATE `Orders` SET `status`="started" WHERE `id`=' . $id;
                mysqli_query($conn, $sql2);
                $sql3 = 'UPDATE `employee` SET `nop`=`nop`+1, `status`="busy", `stc`=15, `pid`=' . $id . ' WHERE `ec`="' . $ec . '"';
                mysqli_query($conn, $sql3);
                response(200, "Successful", true);
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