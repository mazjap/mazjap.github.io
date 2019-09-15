<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$email_subject = $_POST['subject'];


$email_from = 'portfolio@contactform.com';

$email_body = "Name: $name.\n".
"Email: $visitor_email.\n".
"$message.\n";


$to = "jordan.c4922@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: Website Name");



?>