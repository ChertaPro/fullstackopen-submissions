// ==========================================================
// Plantilla de login — lógica de validación e interacción
// Basado en la Constraint Validation API del navegador
// (checkValidity, setCustomValidity, validity.*)
// ==========================================================

const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("toggle-password");
const statusMessage = document.getElementById("status-message");

// Mensajes de error personalizados por campo y por tipo de problema.
const errorMessages = {
  email: {
    valueMissing: "El correo electrónico es obligatorio.",
    typeMismatch: "Escribe un correo electrónico válido, como tu@correo.com.",
  },
  password: {
    valueMissing: "La contraseña es obligatoria.",
    tooShort: "La contraseña debe tener al menos 8 caracteres.",
  },
};

// Devuelve el mensaje adecuado según el estado de validez del campo.
function getErrorMessage(input) {
  const validity = input.validity;
  const messages = errorMessages[input.name];

  if (validity.valid) return "";
  if (validity.valueMissing) return messages.valueMissing;
  if (validity.typeMismatch) return messages.typeMismatch;
  if (validity.tooShort) return messages.tooShort;

  // Mensaje por defecto del navegador como último recurso.
  return input.validationMessage;
}

// Valida un campo, muestra u oculta su mensaje de error
// y marca visualmente el campo como "tocado".
function validateField(input) {
  const field = input.closest(".field");
  const errorEl = document.getElementById(`${input.id}-error`);

  field.classList.add("touched");
  const message = getErrorMessage(input);
  errorEl.textContent = message;

  return message === "";
}

// Validar en tiempo real mientras el usuario escribe o cambia de campo.
[emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => validateField(input));
  input.addEventListener("blur", () => validateField(input));
});

// Mostrar u ocultar la contraseña en texto plano.
togglePasswordBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePasswordBtn.textContent = isHidden ? "Ocultar" : "Mostrar";
  togglePasswordBtn.setAttribute(
    "aria-label",
    isHidden ? "Ocultar contraseña" : "Mostrar contraseña"
  );
});

// Envío del formulario.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isEmailValid = validateField(emailInput);
  const isPasswordValid = validateField(passwordInput);

  if (!isEmailValid || !isPasswordValid) {
    statusMessage.textContent = "Revisa los campos marcados en rojo.";
    statusMessage.className = "status-message error";
    return;
  }

  // Punto de conexión con un backend real:
  // aquí es donde harías el fetch() a tu servidor de autenticación.
  const credentials = {
    email: emailInput.value,
    password: passwordInput.value,
    remember: document.getElementById("remember").checked,
  };

  console.log("Datos listos para enviar al servidor:", credentials);

  statusMessage.textContent = "Formulario válido. Lista para conectar con tu backend.";
  statusMessage.className = "status-message success";
});
