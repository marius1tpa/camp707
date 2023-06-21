<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $name = $_POST["name"];
  $age = $_POST["age"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $round = $_POST["round"];

  // Prepare the email content
  $to = "marius.auesnik@gmail.com";
  $subject = "New Summer Camp Registration";
  $body = "Name: $name\n";
  $body .= "Age: $age\n";
  $body .= "Email: $email\n";
  $body .= "Message: $message\n";
  $body .= "Round: $round\n";

  // Set additional headers
  $headers = "From: Summer Camp <noreply@summercamp.com>\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    // Redirect to the thank you page
    header("Location: thank-you.html");
    exit();
  } else {
    // Display an error message
    echo "There was an error sending your message. Please try again.";
  }
}
?>
