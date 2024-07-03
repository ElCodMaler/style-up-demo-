/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
}

