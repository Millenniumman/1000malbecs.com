<?php
session_start();
require 'vendor/autoload.php'; // Carga la biblioteca de Mailchimp si usas Composer

use MailchimpMarketing\ApiClient;

// Configuración de Mailchimp
$apiKey = 'ea23fbb007ef069c3fcba13fec5c67bc-us5'; // Reemplaza con tu API Key de Mailchimp
$audienceId = 'e4e709eda9'; // Reemplaza con el ID de tu audiencia
$serverPrefix = 'us5'; // Reemplaza 'X' con el prefijo de tu servidor (ej: us20)

// Generar y almacenar token de seguridad
$token = bin2hex(random_bytes(16));
$_SESSION['download_token'] = $token;

// Validar el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    $apellido = filter_var($_POST['apellido'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING);
    $form_token = $_POST['token'];

    // Validar correo y token
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Correo electrónico inválido.');
    }
    if ($form_token !== $_SESSION['download_token']) {
        die('Error: Token inválido.');
    }

    // Configurar el cliente de Mailchimp
    $mailchimp = new ApiClient();
    $mailchimp->setConfig([
        'apiKey' => $apiKey,
        'server' => $serverPrefix
    ]);

    // Añadir el contacto a la audiencia
    try {
        $response = $mailchimp->lists->addListMember($audienceId, [
            'email_address' => $email,
            'status' => 'subscribed',
            'merge_fields' => [
                'FNAME' => $nombre,
                'LNAME' => $apellido,
                'PHONE' => $telefono ?: '' // Teléfono es opcional
            ]
        ]);
header('Location: /thank-you.php');
exit;
        // Si se añadió correctamente, proceder con la descarga
        $file = 'downloads/guia-cata-vinos.pdf'; // Reemplaza con la ruta al archivo PDF
        if (file_exists($file)) {
            header('Content-Description: File Transfer');
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="' . basename($file) . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            readfile($file);
            exit;
        } else {
            die('Error: El archivo no existe.');
        }
    } catch (Exception $e) {
        die('Error al registrar en Mailchimp: ' . $e->getMessage());
    }
} else {
    die('Por favor, completa el formulario.');
}
?>
