<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['messageField'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .=  "Mime-Version: 1.0  \r\n";
$header .= "Content-Type: text/plain";


$comment .= "This message was sent by: " . $name . " \r\n";
$comment .= "His email is: " . $email . " \r\n";
$comment .= "The message is: ". $message ." \r\n";


$for = 'blackmaxxgdl18@hotmail.com';
$subject = 'You have a new email from your website!';

mail($for, $subject, utf8_decode($comment), $header);

// server response!
$nombre = $_POST['nombre'];

echo json_encode(array(
	'message' => sprintf('Your email has been received %s', $name),
));
