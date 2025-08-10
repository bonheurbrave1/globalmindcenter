import tailwindcssPostcss from "@tailwindcss/postcss";

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          dark: '#1E40AF'
        },
        secondary: {
          DEFAULT: '#10B981',
          dark: '#059669'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindcssPostcss],
};

export default config;
