/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			grayscale: {
  				background: '#FCFCFC',
  				background_weak: '#F7F7F7',
  				input: '#EFF0F6',
  				line: '#D9DBE9',
  				placeholder: '#A0A3BD',
  				label: '#6E7191',
  				body: '',
  				header_weak: '#262338',
  				header: '#14142B',
  				title_active: '',
  				white: '#FFFFFF'
  			},
  			primary: {
  				background: '',
  				background_strong: '#FA9D39',
  				DEFAULT: '#FA8507',
  				weak: '',
  				strong: ''
  			},
  			secondary: {
  				DEFAULT: '',
  				weak: '',
  				strong: ''
  			},
  			error: {
  				DEFAULT: '#FB4E4E',
  				weak: '',
  				strong: ''
  			},
  			success: {
  				DEFAULT: '#2AC769',
  				weak: '',
  				strong: '#1AB759'
  			},
  			warning: {
  				DEFAULT: '',
  				background: '',
  				background_strong: '',
  				weak: '',
  				strong: ''
  			}
  		},
  		backgroundImage: {
  			'gradient-dark-overlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0.08) 8%, rgba(0, 0, 0, 0.93) 93%)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
