<?php
function response($response_code, $response_desc, $response_data)
{
    // Sanitize the response_data array
    $sanitized_response_data = sanitize_response_data($response_data);

    // Construct the response array
    $response = [
        'response_code' => $response_code,
        'response_desc' => $response_desc,
        'response_data' => $sanitized_response_data
    ];

    // Encode the response array to JSON
    $json_response = json_encode($response);

    // Check if JSON encoding was successful
    if ($json_response === false) {
        // JSON encoding failed, handle the error
        $error_message = 'Error encoding response to JSON';
        $error_response = [
            'response_code' => 500,
            'response_desc' => $error_message,
            'response_data' => null
        ];
        $json_response = json_encode($error_response);
        if ($json_response === false) {
            // If encoding the error response fails, echo a basic error message
            echo '{"response_code":500,"response_desc":"Internal Server Error","response_data":null}';
        } else {
            // Echo the error response
            echo $json_response;
        }
    } else {
        // JSON encoding was successful, echo the response
        echo $json_response;
    }
}

function sanitize_response_data($data)
{
    if (is_array($data)) {
        // If $data is an array, recursively sanitize each element
        return array_map('sanitize_response_data', $data);
    } elseif (is_string($data)) {
        // If $data is a string, sanitize it using htmlspecialchars
        return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    } else {
        // If $data is neither an array nor a string, return it as is
        return $data;
    }
}