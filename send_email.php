<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'tess.salinger@gmail.com';
    $subject = 'New Message from Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully.';
    } else {
        echo 'There was a problem sending your message. Please try again later.';
    }
} else {
    echo 'Invalid request';
}
?>
