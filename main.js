// Obtener el elemento del botón de alternar de navegación usando querySelector
// querySelector selecciona el primer elemento del documento que coincida con el selector CSS especificado.
const navToggle = document.querySelector(".nav-toggle");

// Obtener el elemento del menú de navegación usando querySelector
const navMenu = document.querySelector(".nav-menu");

// Agregar un evento de clic al botón de alternar usando addEventListener
// addEventListener se usa para registrar un evento a un objeto en específico. En este caso, añade un evento de clic al botón de alternar.
navToggle.addEventListener("click", () => {
  // Alternar la visibilidad del menú de navegación al hacer clic en el botón de alternar usando classList.toggle
  // toggle añade la clase especificada si no está presente, y la elimina si está presente.
  navMenu.classList.toggle("nav-menu_visible");

  // Cambiar el atributo "aria-label" del botón de alternar para mejorar la accesibilidad
  // classList.contains verifica si el elemento tiene la clase especificada.
  if (navMenu.classList.contains("nav-menu_visible")) {
    // Si el menú está visible, cambiar el "aria-label" a "Cerrar menú" usando setAttribute
    // setAttribute añade o cambia el valor de un atributo especificado en el elemento.
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    // Si el menú está oculto, cambiar el "aria-label" a "Abrir menú" usando setAttribute
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
