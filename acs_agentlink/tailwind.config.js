/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          background: '#FCFCFC',
          background_weak: '',
          input: '',
          line: '#D9DBE9',
          placeholder: '#A0A3BD',
          label: '#6E7191',
          body: '',
          header_weak: '#262338',
          header: '#14142B',
          title_active: '',
          white: '#FFFFFF',
        },
        primary: {
          background: '',
          background_strong: '',
          DEFAULT: '#FA8507',  // Default color
          weak: '', // Light shade for weaker emphasis
          strong: '', // Darker shade for stronger emphasis
        },
        secondary: {
          DEFAULT: '',
          weak: '',
          strong: '',
        },
        error: {
          DEFAULT: '',
          weak: '',
          strong: '',
        },
        success: {
          DEFAULT: '',
          weak: '',
          strong: '',
        },
        warning: {
          DEFAULT: '',
          background: '',
          background_strong: '',
          weak: '',
          strong: '',
        }
      },
      backgroundImage: {
                'gradient-dark-overlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0.08) 8%, rgba(0, 0, 0, 0.93) 93%)',

      }
    },
  },
  plugins: [],
};
