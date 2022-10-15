<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require  "PHPMailer/src/Exception.php";
require  "PHPMailer/src/PHPMailer.php";
require  "PHPMailer/src/SMTP.php";

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'host6.name.am';
$mail->SMTPAuth = true;  
$mail->Username = 'noreply@siriuslogistics.am';
$mail->Password = 'Z04CgoaT0GaSOwzp'; 
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->CharSet = "UTF-8"; 
$mail->IsHTML(true); 

$name = $_POST["name"]; 
$email = $_POST["email"]; 
$message = $_POST["message"]; 


$email_template = "template_mail.html";
$body = file_get_contents($email_template);
$body = str_replace('%name%', $name, $body); 
$body = str_replace('%email%', $email, $body); 
$body = str_replace('%message%', $message, $body);


$mail->addAddress("office@siriuslogistics.am");
$mail->MsgHTML($body);
$mail->setFrom($email,$name);
$mail->Subject = 'Submitting from a form Sirius Logistics';

$mail->send();
$mail->clearAddresses();
$mail->setFrom("office@siriuslogistics.am");
$mail->addAddress($email);
$mail->msgHTML('<h1>Your letter has been successfully sent!</h1>');
$mail->Subject = ' Sirius Logistics';

if (!$mail->send()) {
  $message = "Ошибка отправки";

} else {

  $message = "Данные отправлены!";
}

$response = ["message" => $message];

header('Content-type: application/json');
echo json_encode($response);
?>