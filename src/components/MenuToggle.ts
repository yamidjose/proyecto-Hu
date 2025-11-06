export default function menuToggle() {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (btn && menu) {
      const svg = btn.querySelector("svg"); // tu ícono hamburguesa
      const originalPath = svg?.innerHTML; // guarda el dibujo original (las tres rayas)

      let isOpen = false;

      // Asegura que el menú inicie oculto
      menu.classList.add("hidden");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        isOpen = !isOpen;

        if (svg) {
          // Cambia a X cuando está abierto, y vuelve al original cuando se cierra
          svg.innerHTML = isOpen
            ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`
            : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
        }
      });
    }
  });
}
