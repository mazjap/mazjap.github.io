<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $emailSubject = $_POST['subject'];
        $message = $_POST['body'];

        $emailTo = "jordan.c4922@gmail.com";

        $headers = "From: ".$emailFrom."\r\n";
        $headers .= "Reply To: ".$emailFrom."\r\n";

        $emailBody = "You have received an email from ".$name."\n".
        "Email: $emailFrom.\n".
        "$message.\n";

        mail($emailTo, $emailSubject, $emailBody, $headers);
        header("Location: index.html?mailsend");
    }
?>