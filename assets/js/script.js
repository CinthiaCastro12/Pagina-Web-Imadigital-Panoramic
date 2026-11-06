


// =================================================
// CARRUSEL CON SWIPE (SIN ANIMACIÓN AUTOMÁTICA)
// =================================================
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel-track");

  if (!carousel) return;

  let startX = 0;
  let isDown = false;

  // --- Soporte para dispositivos táctiles ---
  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = startX - endX;

    if (Math.abs(delta) > 50) {
      carousel.scrollBy({
        left: delta > 0 ? carousel.offsetWidth : -carousel.offsetWidth,
        behavior: "smooth",
      });
    }
  });

  // --- Soporte para arrastre con el mouse (opcional en PC) ---
  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    carousel.style.cursor = "grabbing";
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (startX - x) * 1.5;
    carousel.scrollLeft += walk;
  });
});

// =================================================
// HEADER SCROLL
// =================================================
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// MENU RESPONSIVE
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle"); // botón de menú
  const menu = document.getElementById("nav-menu");      // lista del menú

  if (toggle && menu) {
    // Alterna la clase "show" al hacer clic en la hamburguesa
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    // Cierra el menú si se hace clic fuera del menú y del botón
    document.addEventListener("click", (e) => {
      // Si el clic NO fue dentro del menú y NO fue en el botón
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("show"); // cierra el menú
      }
    });
  }
});