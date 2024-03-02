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
        try {
            if ($data !== null && isset($data->id)) {
                require('../_config.php');

                // Using prepared statement to prevent SQL injection
                $id = mysqli_real_escape_string($conn, $data->id);
                $stmt = $conn->prepare('SELECT * FROM `Orders` WHERE `id`=?');
                $stmt->bind_param('s', $id);
                $stmt->execute();
                $result = $stmt->get_result();

                if ($result->num_rows > 0) {
                    $order = $result->fetch_assoc();

                    // Validate and sanitize the text data
                    $validated_text = filter_var($order['details'], FILTER_SANITIZE_STRING);

                    if ($validated_text !== false) {
                        $order['details'] = $validated_text;
                        response(200, "Successful", $order);
                    } else {
                        response(400, "Invalid data received from database", null);
                    }
                } else {
                    response(400, "Order not found", null);
                }
            } else {
                response(400, "Invalid request data", null);
            }
        } catch (mysqli_sql_exception $e) {
            response(500, "Database error: " . $e->getMessage(), null);
        } catch (Exception $e) {
            response(500, "Internal server error: " . $e->getMessage(), null);
        }
    } else {
        response(401, "Unauthorized", null);
    }
} else {
    response(400, "Bad Request", null);
}
