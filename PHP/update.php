<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $conn->real_escape_string($_POST['usuario']);
    $nuevo_correo = $conn->real_escape_string($_POST['correo']);
    $nuevo_password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($nuevo_password !== $confirm_password) {
        echo "Las contraseñas no coinciden.";
        exit;
    }

    $sql = "UPDATE usuarios SET correo = ?";
    $params = [$nuevo_correo];
    $tipos = "s";

    if (!empty($nuevo_password)) {
        $password_hash = password_hash($nuevo_password, PASSWORD_DEFAULT);
        $sql .= ", password = ?";
        $tipos .= "s";
        $params[] = $password_hash;
    }

    $sql .= " WHERE usuario = ?";
    $tipos .= "s";
    $params[] = $usuario;

    $stmt = $conn->prepare($sql);
    $stmt->bind_param($tipos, ...$params);

    if ($stmt->execute()) {
        echo "Usuario modificado correctamente.";
    } else {
        echo "Error al modificar usuario: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
} else {
    echo "Método no permitido.";
}
?>
