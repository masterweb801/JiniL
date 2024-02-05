<?php
require "../functions/header.php";
require "../functions/response.php";

$json = file_get_contents('php://input');
$data = json_decode($json);
if ($data !== null) {
    require('../_config.php');
    require('../functions/jende.php');
    $auth = $data->authtoken;
    $ec = Token::Verify($auth, "JENDE");
    if ($ec !== false) {
        $sql = 'SELECT `category` FROM `employee` WHERE `ec`="' . $ec . '"';
        $data = mysqli_query($conn, $sql);
        $total = mysqli_num_rows($data);
        if ($total > 0) {
            $result = mysqli_fetch_assoc($data);
            if ($result['category'] == "*") {
                $sql2 = 'SELECT `id`, `category`, `title`, `details` FROM `orders`';
                $data2 = mysqli_query($conn, $sql2);
                $total2 = mysqli_num_rows($data2);
                if ($total2 > 0) {
                    $result2 = mysqli_fetch_all($data2);
                    response(200, "Successfull", $result2);
                } else {
                    response(200, "Successfull", []);
                }
            } else {
                $sql2 = 'SELECT `id`, `category`, `title`, `details` FROM `orders` WHERE `category`="' . $result['category'] . '"';
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
            response(400, "Invalid User", null);
        }

    } else {
        response(400, "Invalid User", null);
    }

} else {
    response(400, "Bad Request", null);
}