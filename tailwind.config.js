/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
     // lg: '960px',
      lg: '860px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
    
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },

  // theme: {
  //   fontFamily: {
  //     primary: 'Orbitron',
  //     secondary: 'Rajdhani',
  //     tertiary: 'Aldrich',
  //   },
  //   extend: {
  //     colors: {
  //       primary:'#0a0a0a',
  //       accent:'#B809C3',
  //       white:'#FFFFFF'
  //     },
  //   },
  //   colors: {
  //     primary:'#0a0a0a',
  //     accent:'#B809C3',
  //   },
  //   backgroundImage: {
  //     site: "url('./assets/site-bg.jpg')",
  //     about: "url('./assets/about.png')",
  //   },
  // },
  plugins: [],
}

