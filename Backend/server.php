<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    // Validate and sanitize inputs
    $fname = isset($_GET['fname']) ? htmlspecialchars(trim($_GET['fname'])) : '';
    $lname = isset($_GET['lname']) ? htmlspecialchars(trim($_GET['lname'])) : '';
    $email = isset($_GET['email']) ? htmlspecialchars(trim($_GET['email'])) : '';
    $message = isset($_GET['message']) ? htmlspecialchars(trim($_GET['message'])) : '';

    // Basic validation (you should add more robust validation)
    if (empty($fname) || empty($lname) || empty($email) || empty($message)) {
        $error = "All fields are required.";
        echo $error; // Simple error display for this example
        exit; 
    }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $error = "Invalid email format";
                echo $error;
                exit;
        }


    // Email sending (using mail() function - requires server configuration)
    $to = "brucenshuti2@gmail.com"; 
    $subject = "New message from contact form";
    $body = "First Name: " . $fname . "\n";
    $body .= "Last Name: " . $lname . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message: " . $message;
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-type: text/plain\r\n"; // Important for correct formatting


    if (mail($to, $subject, $body, $headers)) {
        // Redirect to a thank you page or display a success message
        header("Location: thank_you.php"); // Create thank_you.php
        exit;
    } else {
        $error = "An error occurred while sending the message.";
        echo $error;
    }

} else {
    // If the form is not submitted via GET, handle it appropriately
    // (e.g., display an error message or redirect)
    echo "Invalid request.";
}

?>