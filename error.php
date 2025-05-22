<?php
$message = urldecode($_GET['message'] ?? 'Ocurrió un error desconocido.');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Error</title>
</head>
<body>
    <h1>Error</h1>
    <p><?php echo htmlspecialchars($message); ?></p>
    <a href="/index.html">Volver al formulario</a>
</body>
</html>
