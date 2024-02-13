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

            if (isset($data->password)) {
                $password = $data->password;
                $sql = 'SELECT `password` FROM `Employee` WHERE `ec`="' . $ec . '"';
                $query = mysqli_query($conn, $sql);

                if (mysqli_num_rows($query) > 0) {
                    $result = mysqli_fetch_assoc($query);
                    if ($result['password'] === md5($password)) {
                        if (isset($data->passwordNew)) {
                            $passwordNew = $data->passwordNew;
                            $pass = md5($passwordNew);
                            $sql2 = 'UPDATE `Employee` SET `password`="' . $pass . '" WHERE `ec`="' . $ec . '"';
                            mysqli_query($conn, $sql2);
                            response(200, "Successful", true);
                        } else if (isset($data->email)) {
                            $email = $data->email;
                            $sql2 = 'UPDATE `Employee` SET `email`="' . $email . '" WHERE `ec`="' . $ec . '"';
                            mysqli_query($conn, $sql2);
                            response(200, "Successful", true);
                        } else if (isset($data->phone)) {
                            $phone = $data->phone;
                            $sql2 = 'UPDATE `Employee` SET `phone`="' . $phone . '" WHERE `ec`="' . $ec . '"';
                            mysqli_query($conn, $sql2);
                            response(200, "Successful", true);
                        } else if (isset($data->img)) {
                            $img = $data->img;
                            $sql2 = 'UPDATE `Employee` SET `img`="' . $img . '" WHERE `ec`="' . $ec . '"';
                            mysqli_query($conn, $sql2);
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