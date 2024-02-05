<?php
function response($response_code, $response_desc, $response_data)
{
    $response['response_code'] = $response_code;
    $response['response_desc'] = $response_desc;
    $response['response_data'] = $response_data;

    $json_response = json_encode($response);
    echo $json_response;
}