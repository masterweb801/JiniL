<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "if0_34673012_logic_realm";

$conn = mysqli_connect($hostname, $username, $password, $dbname);

if (!$conn) {

    echo "Database connection error" . mysqli_connect_error();

}
;