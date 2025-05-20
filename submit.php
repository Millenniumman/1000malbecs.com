<?php
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php'; // Instala PHPMailer: composer require phpmailer/phpmailer

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitizar y validar datos
    $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    $apellido = filter_var($_POST['apellido'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING) ?: 'Not provided';
    $lang = filter_var($_POST['lang'], FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: /error.html');
        exit;
    }

    // Configuración del correo
    $mail = new PHPMailer(true);
    try {
        // Configura tu servidor SMTP (ajusta según tu proveedor, ej. SendGrid)
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com'; // Ejemplo: smtp.sendgrid.net
        $mail->SMTPAuth = true;
        $mail->Username = 'tu-usuario';
        $mail->Password = 'tu-contraseña';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Remitente y destinatario
        $mail->setFrom('no-reply@1000malbecs.com', '1000 Malbecs');
        $mail->addAddress($email, "$nombre $apellido");

        // Contenido del correo según el idioma
        $mail->isHTML(true);
        if ($lang === 'en') {
            $mail->Subject = 'Your Free Wine Tasting Guide';
            $mail->Body = "
                <h2>Thank you for signing up, $nombre!</h2>
                <p>Click the following link to download your <strong>Free Wine Tasting Guide</strong>:</p>
                <p><a href='https://1000malbecs.com/files/guia-cata-vinos.pdf' style='color: #6B2D5C; text-decoration: none;'>Download Guide</a></p>
                <p>Enjoy and discover the art of wine tasting with 1000 Malbecs!</p>
            ";
        } elseif ($lang === 'de') {
            $mail->Subject = 'Ihr kostenloser Weinkostführer';
            $mail->Body = "
                <h2>Vielen Dank für Ihre Anmeldung, $nombre!</h2>
                <p>Klicken Sie auf den folgenden Link, um Ihren <strong>kostenlosen Weinkostführer</strong> herunterzuladen:</p>
                <p><a href='https://1000malbecs.com/files/guia-cata-vinos.pdf' style='color: #6B2D5C; text-decoration: none;'>Führer herunterladen</a></p>
                <p>Genießen Sie und entdecken Sie die Kunst der Weinkost mit 1000 Malbecs!</p>
            ";
        } else {
            // Por defecto, español
            $mail->Subject = 'Tu Guía Gratis de Cata de Vinos';
            $mail->Body = "
                <h2>¡Gracias por registrarte, $nombre!</h2>
                <p>Haz clic en el siguiente enlace para descargar tu <strong>Guía de Cata de Vinos</strong>:</p>
                <p><a href='https://1000malbecs.com/files/guia-cata-vinos.pdf' style='color: #6B2D5C; text-decoration: none;'>Descargar Guía</a></p>
                <p>¡Disfruta y descubre el arte de la cata con 1000 Malbecs!</p>
            ";
        }

        $mail->send();
        header('Location: /' . $lang . '/gracias.html');
        exit;
    } catch (Exception $e) {
        header('Location: /error.html');
        exit;
    }
} else {
    // Redirigir si se accede directamente a submit.php
    header('Location: /es/guia-cata.html');
    exit;
}
?>
