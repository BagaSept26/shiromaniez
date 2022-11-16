module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      body: '#E5E5E5',
      blue: {
        DEFAULT: '#000958',
        secondary: '#67698B',
      },
      orange: {
        DEFAULT: '#FF4917',
        secondary: '#FFCE9D',
        tertiary: '#FFF0E1',
        quaternary: '#FFFAF5',
        hover: '#FB3D08',
      },
      yellow: {
        DEFAULT: '#40bfe6',
        secondary: '#f2b8e6',
      },
      white: '#fff',
      pink: 'pink',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        triangle: "url('/src/assets/img/logo2.jpg')",
      },
      boxShadow: {
        primary: '0px 4px 40px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
