<?php
require "../functions/header.php";
require "../functions/response.php";

if (isset($_SERVER['HTTP_AUTH_TOKEN'])) {
    require('../functions/jende.php');

    $auth = $_SERVER['HTTP_AUTH_TOKEN'];
    $ec = Token::Verify($auth, "JENDE");

    if ($ec !== false) {
        require('../_config.php');

        $sql = 'SELECT `pid` FROM `Employee` WHERE `status`="busy" AND `ec`="' . $ec . '"';
        try {
            $data = mysqli_query($conn, $sql);
            $total = mysqli_num_rows($data);
            if ($total > 0) {
                $result = mysqli_fetch_assoc($data);
                $sql2 = 'SELECT * FROM `Orders` WHERE `id`=' . $result['pid'];
                $data2 = mysqli_query($conn, $sql2);
                $total2 = mysqli_num_rows($data2);
                if ($total2 > 0) {
                    $result2 = mysqli_fetch_assoc($data2);

                    // Validate and sanitize the text data
                    $validated_text = filter_var($result2['details'], FILTER_SANITIZE_STRING);

                    if ($validated_text !== false) {
                        $result2['details'] = $validated_text;
                        response(200, "Successful", $result2);
                    } else {
                        response(400, "Invalid data received from database", null);
                    }
                } else {
                    response(400, "Something Went Wrong!", []);
                }
            } else {
                response(200, "Successfull", []);
            }
        } catch (mysqli_sql_exception $e) {
            response(500, "Database error: " . $e->getMessage(), null);
        } catch (Exception $e) {
            response(500, "Internal server error: " . $e->getMessage(), null);
        }
    } else {
        response(400, "Invalid User", null);
    }
} else {
    response(400, "Bad Request", null);
}