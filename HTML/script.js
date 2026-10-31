// Mostrar fecha y hora actual en index
function mostrarFechaHora() {
    const fechaHora = document.getElementById("fechaHora");
    if (fechaHora) {
        const ahora = new Date();
        fechaHora.textContent = ahora.toLocaleString("es-MX", { dateStyle: "full", timeStyle: "medium" });
    }
}
if (document.getElementById("fechaHora")) {
    setInterval(mostrarFechaHora, 1000);
}

// Convertidor a pesos
function convertirAPesos() {
    const usd = document.getElementById("usd");
    const resultado = document.getElementById("resultadoPesos");
    if (!usd || !resultado) return;

    const valor = parseFloat(usd.value);
    const tasa = 18; // ejemplo: 1 USD = 18 MXN
    if (!isNaN(valor)) {
        resultado.textContent = (valor * tasa) + " pesos";
    }
}

// Calculadora básica
function calcular() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operacion = document.getElementById("operacion");
    const resultado = document.getElementById("resultadoCalc");
    if (!num1 || !num2 || !operacion || !resultado) return;

    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);
    const simbolo = operacion.value;
    let total = 0;

    if (simbolo === "+") total = valor1 + valor2;
    else if (simbolo === "-") total = valor1 - valor2;
    else if (simbolo === "*") total = valor1 * valor2;
    else if (simbolo === "/") total = valor1 / valor2;

    resultado.textContent = "Resultado: " + total;
}

// Cuestionario interactivo
function verificarCuestionario() {
    const respuesta = document.querySelector('input[name="pregunta1"]:checked');
    if (respuesta) {
        if (respuesta.value === "HTML") {
            alert("¡Correcto!");
        } else {
            alert("Respuesta incorrecta, intenta de nuevo.");
        }
    } else {
        alert("Selecciona una opción.");
    }
}

// Validación de formularios
function validarFormulario() {
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");

    if (nombre && apellidos) {
        const nombreValor = nombre.value.trim();
        const apellidosValor = apellidos.value.trim();
        if (nombreValor === "" || apellidosValor === "") {
            alert("Por favor llena todos los campos obligatorios.");
            return false;
        }
    }

    const pass = document.getElementById("password");
    const confirmPass = document.getElementById("confirm_password");
    const passEdit = document.getElementById("passwordEdit");
    const confirmPassEdit = document.getElementById("confirmPasswordEdit");

    const validarContrasenas = (passInput, confirmInput) => {
        if (passInput && confirmInput) {
            if (passInput.value !== confirmInput.value) {
                alert("Las contraseñas no coinciden.");
                return false;
            }
            if (passInput.value.length > 0 && passInput.value.length < 6) {
                alert("La contraseña debe tener al menos 6 caracteres.");
                return false;
            }
        }
        return true;
    };

    if (!validarContrasenas(pass, confirmPass)) return false;
    if (!validarContrasenas(passEdit, confirmPassEdit)) return false;

    return true;
}

function validarLoginFormulario() {
    const usuario = document.getElementById("usuarioLogin");
    const password = document.getElementById("passwordLogin");

    if (!usuario || !password) {
        return true;
    }

    if (usuario.value.trim() === "") {
        alert("Debes escribir tu usuario.");
        return false;
    }

    if (password.value.trim() === "") {
        alert("Debes escribir tu contraseña.");
        return false;
    }

    return true;
}

function confirmarEliminacion() {
    const usuario = document.getElementById("usuarioDelete");
    if (usuario && usuario.value.trim() === "") {
        alert("Escribe el usuario que deseas eliminar.");
        return false;
    }

    return confirm("¿Estás seguro de que deseas eliminar este usuario?");
}
