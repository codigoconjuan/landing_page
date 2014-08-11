<?php
// video PHP
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";


$comentario .= "Este mensaje fue enviado por: " . $nombre . " \r\n";
$comentario .= "Su e-mail es: " . $email . " \r\n";
$comentario .= "Su mensaje es: ". $mensaje ." \r\n";

$para = 'blackmaxxgdl18@hotmail.com';
$asunto = 'Contacto desde pagina web';

mail($para, $asunto, utf8_decode($comentario), $header);

// video validar
$nombre = $_POST['nombre'];

echo json_encode(array(
    'Mensaje' => sprintf('Se recibió tu mail %s', $nombre),
));
