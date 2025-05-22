<?php
session_start();
require 'vendor/autoload.php'; // Carga la biblioteca de Mailchimp

use MailchimpMarketing\ApiClient;

// Configuración de Mailchimp
$apiKey = 'ea23fbb007ef069c3fcba13fec5c67bc-us5'; // Reemplaza con tu API Key de Mailchimp
$audienceId = 'e4e709eda9'; // Reemplaza con el ID de tu audiencia
$serverPrefix = 'us5'; // Prefijo del servidor (ej: us5)

// Generar y almacenar token de seguridad (si no existe)
if (!isset($_SESSION['download_token'])) {
    $_SESSION['download_token'] = bin2hex(random_bytes(16));
}

// Validar el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitizar y validar datos del formulario
    $nombre = filter_var($_POST['nombre'] ?? '', FILTER_SANITIZE_STRING);
    $apellido = filter_var($_POST['apellido'] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $telefono = filter_var($_POST['telefono'] ?? '', FILTER_SANITIZE_STRING);
    $form_token = $_POST['token'] ?? '';

    // Validar correo y token
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: /error.php?message=Correo+electrónico+inválido');
        exit;
    }
    if ($form_token !== $_SESSION['download_token']) {
        header('Location: /error.php?message=Token+inválido');
        exit;
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
                'PHONE' => $telefono ?: ''
            ]
        ]);

        // Proceder con la descarga del archivo
        $file = 'downloads/guia-cata-vinos.pdf'; // Ruta al archivo PDF
        if (file_exists($file)) {
            header('Content-Description: File Transfer');
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="' . basename($file) . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            readfile($file);
            // Limpiar el token después de la descarga exitosa
            unset($_SESSION['download_token']);
            exit;
        } else {
            header('Location: /error.php?message=El+archivo+no+existe');
            exit;
        }
    } catch (Exception $e) {
        header('Location: /error.php?message=Error+al+registrar+en+Mailchimp:+' . urlencode($e->getMessage()));
        exit;
    }
} else {
    header('Location: /error.php?message=Por+favor,+completa+el+formulario');
    exit;
}
?>
