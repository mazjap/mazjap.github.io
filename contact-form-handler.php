<?php
//  Not currently used, but I left it here to use in a future version
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $emailSubject = $_POST['subject'];
        $message = $_POST['body'];

        $emailTo = "jordan.c4922@zoho.com";

        $headers = "From: ".$emailFrom."\r\n";
        $headers .= "Reply To: ".$emailFrom."\r\n";

        $emailBody = "You have received an email from ".$name."\n\n".
        "Email:\n".$emailFrom."\n".
        "$message.\n";

        if (mail($emailTo, $emailSubject, $emailBody, $headers)) {
            echo '<p>Your message has been sent!</p>';
        }
        else {
            echo '<p>Your message could not be sent. Please try again later</p>';
        }
        header("Location: index.html?mailsend");
    }
?>