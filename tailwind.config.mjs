/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Escanea todo el proyecto
  ],
  theme: {
    extend: {}, // Aquí puedes extender colores, tipografías, etc.
  },
  plugins: [], // Puedes agregar plugins de Tailwind más adelante
};

