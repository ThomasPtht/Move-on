/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jaldi: ["Jaldi", "sans-serif"],
        roboto: ["Roboto mono", "sans-serif"],
      },
    },
    clipPath: {
      custom: "polygon(91% 9%, 90% 10%, 29% 82%, 18% 71%)",
    },
  },
  plugins: [],
};
