<?php
$configFile = __DIR__ . '/db_config.local.php';
$dbConfig = is_file($configFile) ? require $configFile : [];

$getConfigValue = static function (string $key, string $environmentVariable) use ($dbConfig): string {
    $value = $dbConfig[$key] ?? getenv($environmentVariable);
    return is_string($value) ? trim($value) : '';
};

$servername = $getConfigValue('host', 'DB_HOST');
$username = $getConfigValue('username', 'DB_USERNAME');
$password = $getConfigValue('password', 'DB_PASSWORD');
$dbname = $getConfigValue('database', 'DB_DATABASE');
$portValue = $dbConfig['port'] ?? getenv('DB_PORT') ?: '3306';
$port = filter_var($portValue, FILTER_VALIDATE_INT);

if ($servername === '' || $username === '' || $dbname === '' || $port === false) {
    error_log("Falta configurar la conexión a MySQL.");
    http_response_code(500);
    exit(
        "Configura PHP/db_config.local.php a partir de PHP/db_config.example.php "
        . "con los datos de MySQL de tu hosting."
    );
}

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
    $conn->set_charset("utf8mb4");

    $conn->query(
        "CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            usuario VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            correo VARCHAR(100) DEFAULT NULL,
            fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )"
    );
} catch (mysqli_sql_exception $exception) {
    error_log("Error de conexión a la base de datos: " . $exception->getMessage());
    http_response_code(500);
    exit(
        "No se pudo conectar a MySQL. Verifica la configuración en "
        . "PHP/db_config.local.php y confirma que la base exista."
    );
}
?>
