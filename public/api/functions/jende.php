<?php
class Token
{
    static function Sign($payload, $secret)
    {
        $header_encoded = base64_encode(json_encode(["algo" => "HS256", "type" => "HWT"]));
        $payload_encoded = base64_encode(json_encode($payload));
        $signature = hash_hmac("SHA256", $header_encoded . $payload_encoded, $secret);
        $signature_encoded = base64_encode($signature);
        return $header_encoded . "." . $payload_encoded . "." . $signature_encoded;
    }

    static function Verify($token, $secret)
    {
        $token_parts = explode(".", $token);
        $signature = base64_encode(hash_hmac("SHA256", $token_parts[0] . $token_parts[1], $secret));
        if ($signature != $token_parts[2]) {
            return false;
        } else {
            $payload = json_decode(base64_decode($token_parts[1]), true);
            return $payload;
        }
    }
}