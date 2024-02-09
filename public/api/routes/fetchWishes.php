<?php
require "../functions/header.php";
require "../functions/response.php";

if (isset($_SERVER['HTTP_AUTH_TOKEN'])) {
    require('../_config.php');
    require('../functions/jende.php');

    $auth = $_SERVER['HTTP_AUTH_TOKEN'];
    $ec = Token::Verify($auth, "JENDE");

    if ($ec !== false) {
        $sql = 'SELECT `category` FROM `Employee` WHERE `status`="free" AND `ec`="' . $ec . '"';
        $data = mysqli_query($conn, $sql);
        $total = mysqli_num_rows($data);
        if ($total > 0) {
            $result = mysqli_fetch_assoc($data);
            if ($result['category'] == "*") {
                $sql2 = 'SELECT `id`, `category`, `title`, `details` FROM `Orders` WHERE `status`="open"';
                $data2 = mysqli_query($conn, $sql2);
                $total2 = mysqli_num_rows($data2);
                if ($total2 > 0) {
                    $result2 = mysqli_fetch_all($data2);
                    response(200, "Successfull", $result2);
                } else {
                    response(200, "Successfull", []);
                }
            } else {
                $sql2 = 'SELECT `id`, `category`, `title`, `details` FROM `Orders` WHERE `status`="open" AND `category`="' . $result['category'] . '"';
                $data2 = mysqli_query($conn, $sql2);
                $total2 = mysqli_num_rows($data2);
                if ($total2 > 0) {
                    $result2 = mysqli_fetch_all($data2);
                    response(200, "Successfull", $result2);
                } else {
                    response(200, "Successfull", []);
                }
            }
        } else {
            response(200, "Successfull", []);
        }

    } else {
        response(400, "Invalid User", null);
    }
} else {
    response(400, "Invalid User", null);
}
